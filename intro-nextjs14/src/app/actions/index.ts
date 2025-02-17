"use server";
import Post from "@/app/config/model/Post";
import { revalidatePath } from "next/cache";

export async function getListPost(limit: number, page: number) {
  const res = await fetch(
    `http://localhost:3000/post/api?limit=${limit}&page=${page}`,
    {
      next: { tags: ["list-post"] },
    }
  );
  const data = await res.json();
  const totalPage = data?.meta.totalPage;

  return {
    data: data.data,
    totalPage,
  };
}

export async function createPost(prevState: any, data: FormData) {
  console.log({ prevState });
  const title = data.get("title");
  const description = data.get("description");
  const existed = await Post.findOne({ title });

  if (!existed) {
    await Post.create({ title, description });
    revalidatePath("list-post");
    return {
      message: "Success",
    };
  }

  return {
    message: "The post title is existed",
  };
}

export async function deletePost(id: string) {
  const res = await fetch(`http://localhost:3000/post/api/${id}`, {
    method: "DELETE",
  });
  const response = await res.json();
  revalidatePath("list-post");
  return response;
}
