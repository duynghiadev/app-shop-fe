import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export function GET() {
  return NextResponse.json({
    dateTime: new Date().toLocaleTimeString(),
  });
}
