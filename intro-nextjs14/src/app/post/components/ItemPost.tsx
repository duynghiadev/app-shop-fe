"use client";
import { deletePost } from "@/app/actions";
import { TPost } from "@/app/post/page";
import Link from "next/link";

const ItemPost = ({ item }: { item: TPost }) => {
  return (
    <div key={item._id}>
      <Link href={`/post/${item._id}`}>
        <span>{item.title}</span>
      </Link>
      <span onClick={() => deletePost(item._id)}>❌</span>
    </div>
  );
};

export default ItemPost;
