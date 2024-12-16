import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest, res: NextResponse) {
  const { pathname, searchParams } = req.nextUrl;
  const isLogged = false;
  console.log("run in middleware");

  if (!isLogged) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  req.cookies.delete("city");
  const allCookies = req.cookies.getAll();
  console.log("all cookies:", { allCookies });
}

export const config = {
  matcher: ["/my-profile"],
};
