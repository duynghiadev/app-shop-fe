import Post from "@/app/config/model/Post";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  context: { params: { postId: string } }
) {
  try {
    const id = context.params.postId;
    const post = await Post.findById(id);
    if (!post) {
      return NextResponse.json(
        {
          data: null,
          message: "The post id not existed",
        },
        { status: 400, statusText: "Failed" }
      );
    }

    return NextResponse.json(
      {
        data: post,
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
      { status: 500, statusText: "Failed" }
    );
  }
}

export async function PUT(
  req: NextRequest,
  context: { params: { postId: string } }
) {
  try {
    const { title, description } = await req.json();

    const id = context.params.postId;
    const post = await Post.findById(id);
    if (!post) {
      return NextResponse.json(
        {
          data: null,
          message: "The post is not existed.",
        },
        { status: 400, statusText: "Failed" }
      );
    }

    const existedTitle = await Post.findOne({ title, _id: { $ne: id } });
    if (!existedTitle) {
      const updated = await Post.findByIdAndUpdate(
        id,
        { title, description },
        { new: true }
      );

      return NextResponse.json(
        {
          data: updated,
          message: "Success",
        },
        { status: 201 }
      );
    }

    return NextResponse.json(
      {
        data: null,
        message: "The title post is duplicated.",
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
      { status: 500, statusText: "Failed" }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  context: { params: { postId: string } }
) {
  try {
    const id = context.params.postId;
    const post = await Post.findById(id);
    if (!post) {
      return NextResponse.json(
        {
          data: null,
          message: "The post is not existed.",
        },
        { status: 400, statusText: "Failed" }
      );
    }

    const deletedPost = await Post.findByIdAndDelete(id);

    return NextResponse.json(
      {
        data: deletedPost,
        message: "Success",
      },
      { status: 201 }
    );
  } catch (error) {
    console.log({ error });
    return NextResponse.json(
      {
        data: null,
        message: "Error",
      },
      { status: 500, statusText: "Failed" }
    );
  }
}
