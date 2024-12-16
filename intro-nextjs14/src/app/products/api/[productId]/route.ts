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

export async function PATCH(req: Request, context: any) {
  const productId = context?.params?.productId;
  const indexUpdated = listProducts.findIndex(
    (item) => item.id === parseInt(productId)
  );
  const updateProduct = await req.json();
  console.log({ updateProduct });

  if (indexUpdated !== -1) {
    listProducts[indexUpdated].name = updateProduct.name
      ? updateProduct.name
      : listProducts[indexUpdated].name;
    listProducts[indexUpdated].price = updateProduct.price
      ? updateProduct.price
      : listProducts[indexUpdated].price;

    return NextResponse.json(
      {
        data: {
          message: "Product updated",
          data: listProducts[indexUpdated],
        },
      },
      { status: 200, statusText: "Success" }
    );
  }

  return NextResponse.json(
    {
      data: {
        message: "Product not found",
      },
    },
    { status: 400, statusText: "Error" }
  );
}
