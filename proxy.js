import { NextResponse } from "next/server";

function proxy(request) {
  const hostname = new URL(request.url).hostname;

  if (hostname === "cobwebgames.vercel.app") {
    const response = NextResponse.next();

    response.headers.set(
      "X-Robots-Tag",
      "noindex, nofollow"
    );

    return response;
  }

  return NextResponse.next();
}

export default proxy;

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};