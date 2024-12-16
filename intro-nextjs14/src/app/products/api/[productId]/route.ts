import { listProducts } from "@/app/data";
import { NextResponse } from "next/server";

export function GET(req: Request, context: any) {
  const productId = context?.params?.productId;
  console.log({ context });

  const data = listProducts.find((item) => item.id === +productId);
  if (data) {
    return NextResponse.json(
      { data },
      {
        status: 201,
        statusText: "Success",
      }
    );
  }
  return NextResponse.json(
    {
      data: {
        message: "Product not found",
      },
    },
    {
      status: 400,
      statusText: "Error",
    }
  );
}
