import { listProducts } from "@/app/data";
import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest) {
  console.log("request:", { req: req.nextUrl.searchParams.get("limit") });

  const data = listProducts;
  return NextResponse.json(
    { data },
    {
      status: 201,
      statusText: "Success",
    }
  );
}
