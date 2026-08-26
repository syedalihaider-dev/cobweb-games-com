import { NextResponse } from "next/server";

export function proxy(request) {
  const hostname = (request.headers.get("host") ?? new URL(request.url).host)
    .split(":")[0]
    .toLowerCase();

  if (hostname === "cobwebgames.vercel.app") {
    const response = NextResponse.next();

    response.headers.set("X-Robots-Tag", "noindex");

    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
