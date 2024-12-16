import { NextRequest, NextResponse } from "next/server";
import { cookies, headers } from "next/headers";

export function GET(req: NextRequest) {
  // case 1: take the token from the request
  const reqHeaders = new Headers(req.headers);
  const token = reqHeaders.get("Authorization");
  console.log("token:", { token });

  // case 2: take the token from the request
  const newHeaders = headers();
  const newToken = newHeaders.get("Authorization");
  console.log("new headers:", { newToken });

  // case 3: take the cookie from the request
  const reqCookies = cookies();
  const myCookie = reqCookies.get("my-cookie");
  console.log("req cookie:", { myCookie });

  return new NextResponse("<h1>My profile of me</h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "my-cookie, city=hcm",
    },
  });
}
