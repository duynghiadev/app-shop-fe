"use server";
import Pagination from "@/app/post/components/Paginations";
import ButtonCreate from "@/app/post/components/ButtonCreate";
import { createPost, getListPost } from "@/app/actions";
import ItemPost from "@/app/post/components/ItemPost";
import Form from "@/app/post/components/Form";

export interface TPost {
  title: string;
  description: string;
  _id: string;
}

export default async function ListPost(searchParams: any) {
  console.log({ searchParams });
  const page = searchParams?.page ?? 1;
  const limit = searchParams?.limit ?? 2;
  const posts = await getListPost(limit, page);

  return (
    <main
      style={{
        background: "#fff",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Form />

      <h1>List Post</h1>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {posts?.data?.map((item: TPost) => {
          return <ItemPost key={item._id} item={item} />;
        })}
      </div>

      <Pagination
        totalPage={posts.totalPage}
        currentPage={+page}
        currentLimit={+limit}
      />
    </main>
  );
}
