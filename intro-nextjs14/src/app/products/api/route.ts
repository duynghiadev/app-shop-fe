import { listProducts } from "@/app/data";
import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest) {
  console.log("request:", { req: req.nextUrl.searchParams.get("limit") });

  const data = listProducts;
  return NextResponse.json(
    { data },
    {
      status: 200,
      statusText: "Success",
    }
  );
}

export async function POST(req: NextRequest) {
  const newProduct = await req.json();
  const isExisted = listProducts.find((item) => item.name === newProduct.name);

  if (!isExisted) {
    const id = Math.max(...listProducts.map((item) => item.id)) + 1;
    listProducts.push({
      ...newProduct,
      id,
    });

    const data = listProducts;
    return NextResponse.json(
      { data: { ...newProduct, id }, message: "Created Success" },
      { status: 200, statusText: "Success" }
    );
  }

  return NextResponse.json(
    { data: null, message: "Product name is existed" },
    { status: 400, statusText: "Invalid" }
  );
}
