import { auth } from "./services/auth";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  // Handle redirection for "/about" path
  if (request.nextUrl.pathname === "/about") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // For other paths, continue with auth middleware
  const authResponse = await auth(request);
  return authResponse;
}

export const config = {
  matcher: ["/account", "/about"],
};
