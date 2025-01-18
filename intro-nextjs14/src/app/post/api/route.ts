import Post from "@/app/config/model/Post";
import connectDB from "@/app/config/mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  await connectDB();

  try {
    const { title, description } = await req.json();
    const existed = await Post.findOne({ title });
    if (!existed) {
      const newPost = await Post.create({ title, description });

      return NextResponse.json(
        {
          data: newPost,
          message: "Success",
        },
        { status: 200, statusText: "Created" }
      );
    }
    return NextResponse.json(
      {
        data: null,
        message: "The title post is already",
      },
      { status: 400, statusText: "Invalid" }
    );
  } catch (error) {
    console.log({ error });
    return NextResponse.json(
      {
        data: null,
        message: "Error",
      },
      { status: 400, statusText: "Failed" }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const limit = req.nextUrl.searchParams.get("limit") ?? 2;
    const page = req.nextUrl.searchParams.get("page") ?? 1;
    const totalPosts = await Post.countDocuments();
    const totalPages = Math.ceil(totalPosts / +limit);
    const allPosts = await Post.find()
      .skip((+page - 1) * +limit)
      .limit(+limit);

    return NextResponse.json(
      {
        data: allPosts,
        meta: {
          totalPages,
          totalCount: totalPosts,
        },
        message: "Success",
      },
      { status: 200 }
    );
  } catch (error) {
    console.log({ error });
    return NextResponse.json(
      {
        data: null,
        message: "Error",
      },
      { status: 400, statusText: "Failed" }
    );
  }
}
