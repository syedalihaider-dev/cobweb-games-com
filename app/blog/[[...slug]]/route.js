const WORDPRESS_URL = "https://blog.cobwebgames.com";

function buildPublicUrl(request, wordpressLocation) {
  try {
    const locationUrl = new URL(wordpressLocation);

    // Convert WordPress subdomain URLs to public domain + /blog URLs
    if (
      locationUrl.hostname === "blog.cobwebgames.com" ||
      locationUrl.hostname === "www.cobwebgames.com" ||
      locationUrl.hostname === "localhost"
    ) {
      const requestUrl = new URL(request.url);
      const publicUrl = new URL(
        `/blog${locationUrl.pathname}${locationUrl.search}${locationUrl.hash}`,
        requestUrl.origin
      );
      return publicUrl.toString();
    }

    return wordpressLocation;
  } catch {
    return wordpressLocation;
  }
}

function shouldFollowRedirectInternally(originalPath, redirectPath) {
  // Normalize paths by removing trailing/leading slashes
  const normOriginal = originalPath.replace(/\/+$/, "").replace(/^\/+/, "");
  const normRedirect = redirectPath.replace(/\/+$/, "").replace(/^\/+/, "");

  // Follow redirect internally if it is just a trailing slash change
  return normOriginal === normRedirect;
}

async function proxyRequest(request) {
  const url = new URL(request.url);

  // Preserve the exact path including trailing slash
  const wordpressPath = url.pathname.replace(/^\/blog(?:\/|$)/, "/");
  let currentUrl = new URL(wordpressPath + url.search, WORDPRESS_URL).toString();

  // Forward relevant client request headers
  const forwardHeaders = new Headers();
  const headersToForward = [
    "user-agent",
    "accept",
    "accept-language",
    "cookie",
    "referer",
  ];
  for (const header of headersToForward) {
    const val = request.headers.get(header);
    if (val) {
      forwardHeaders.set(header, val);
    }
  }

  // Ensure host header matches the WordPress server domain
  forwardHeaders.set("Host", "blog.cobwebgames.com");
  
  // Custom header so WP can identify proxy traffic vs direct visits
  forwardHeaders.set("x-pixel-proxy", "true");

  let response;
  let redirectCount = 0;
  const maxRedirects = 3;

  // Follow internal redirects (like trailing-slash corrections) server-side
  while (redirectCount < maxRedirects) {
    response = await fetch(currentUrl, {
      method: request.method,
      headers: forwardHeaders,
      redirect: "manual",
      cache: "no-store",
    });

    if (response.status >= 300 && response.status < 400) {
      const location = response.headers.get("location");
      if (location) {
        try {
          const locationUrl = new URL(location, WORDPRESS_URL);
          if (locationUrl.hostname === "blog.cobwebgames.com") {
            const currentUrlParsed = new URL(currentUrl);
            if (shouldFollowRedirectInternally(currentUrlParsed.pathname, locationUrl.pathname)) {
              currentUrl = locationUrl.toString();
              redirectCount++;
              continue;
            }
          }
        } catch {
          // Ignore parsing errors and break
        }
      }
    }
    break;
  }

  const headers = new Headers(response.headers);

  // Intercept and translate any Location headers (redirects) that were not followed internally
  const location = headers.get("location");
  if (location) {
    const publicLocation = buildPublicUrl(request, location);
    headers.set("location", publicLocation);
  }

  // Remove connection/transfer encoding/length headers that can interfere with proxying
  headers.delete("content-length");
  headers.delete("content-encoding");
  headers.delete("transfer-encoding");
  headers.delete("connection");

  const contentType = response.headers.get("content-type") || "";

  // Rewrite URLs for text-based resources (HTML, XML, RSS, etc.)
  if (
    contentType.includes("text/html") ||
    contentType.includes("application/xhtml+xml") ||
    contentType.includes("application/xml") ||
    contentType.includes("text/xml") ||
    contentType.includes("application/rss+xml")
  ) {
    let bodyText = await response.text();

    // Match http:// or https:// blog.cobwebgames.com, EXCEPT for static/API paths
    const wpUrlRegex = /https?:\/\/blog\.cobwebgames\.com(?!(\/wp-(?:content|includes|json|admin|login)|xmlrpc))/g;
    const requestUrl = new URL(request.url);
    const replacement = `${requestUrl.origin}/blog`;
    bodyText = bodyText.replace(wpUrlRegex, replacement);

    return new Response(bodyText, {
      status: response.status,
      headers,
    });
  }

  return new Response(response.body, {
    status: response.status,
    headers,
  });
}

export async function GET(request) {
  return proxyRequest(request);
}

export async function HEAD(request) {
  return proxyRequest(request);
}