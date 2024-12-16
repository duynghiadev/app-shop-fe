import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";

export function GET(req: NextRequest) {
  // case 1
  const reqHeaders = new Headers(req.headers);
  const token = reqHeaders.get("Authorization");
  console.log("token:", { token });

  // case 2
  const newHeaders = headers();
  const newToken = newHeaders.get("Authorization");
  console.log("new headers:", { newToken });

  return new NextResponse("<h1>My profile of me</h1>", {
    headers: {
      "Content-Type": "text/html",
    },
  });
}
