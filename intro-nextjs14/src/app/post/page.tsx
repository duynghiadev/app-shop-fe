import { ChangeEvent, useEffect, useState } from "react";
import Link from "next/link";
import Pagination from "@/app/post/components/Paginations";

export interface TPost {
  title: string;
  description: string;
  _id: string;
}

async function getListPost(limit: number, page: number) {
  const res = await fetch(
    `http://localhost:3000/post/api?limit=${limit}&page=${page}`
  );
  const data = await res.json();
  const totalPage = data?.meta.totalPage;

  return {
    data: data.data,
    totalPage,
  };
}

async function createPost(data: FormData) {
  "use server";
  const title = data.get("title");
  const description = data.get("description");
  const res = await fetch(`http://localhost:3000/post/api`, {
    method: "POST",
    body: JSON.stringify({
      description,
      title,
    }),
  });
  const response = await res.json();
  return response;
}

export default async function ListPost(searchParams: any) {
  console.log({ searchParams });
  const page = searchParams?.page ?? 1;
  const limit = searchParams?.limit ?? 2;
  const posts = await getListPost(limit, page);
  // const [listPost, setListPost] = useState<{
  //   data: TPost[];
  //   totalPage: number;
  // }>({
  //   data: [],
  //   totalPage: 0,
  // });
  // const [params, setParams] = useState({ page: 1, limit: 2 });
  // const [inputState, setInputState] = useState({
  //   title: "",
  //   description: "",
  // });

  // const fetchListPost = async () => {
  //   const res = await fetch(
  //     `http://localhost:3000/post/api?limit=${params.limit}&page=${params.page}`
  //   );
  //   const data = await res.json();
  //   console.log("List Posts:", { data });
  //   setListPost({
  //     data: data.data,
  //     totalPage: data?.meta.totalPages,
  //   });
  // };

  // useEffect(() => {
  //   fetchListPost();
  // }, [params.page]);

  // const handleDeletePost = async (id: string) => {
  //   const res = await fetch(`http://localhost:3000/post/api/${id}`, {
  //     method: "DELETE",
  //   });
  //   const data = await res.json();
  //   console.log("Delete Posts:", { data });
  //   if (data.message === "Success") {
  //     fetchListPost();
  //   }
  // };

  // const handleCreate = async () => {
  //   const res = await fetch(`http://localhost:3000/post/api`, {
  //     method: "POST",
  //     body: JSON.stringify({ ...inputState }),
  //   });
  //   const data = await res.json();
  //   console.log("Create Posts:", { data });
  //   if (data.message === "Success") {
  //     fetchListPost();
  //     setInputState({ title: "", description: "" });
  //   }
  // };

  // const handleOnChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
  //   setInputState({
  //     ...inputState,
  //     [e.target.name]: e.target.value,
  //   });
  // };

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
      <form action={createPost}>
        <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
          <label htmlFor="title">Title</label>
          <input id="title" name="title" />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
          <label htmlFor="description">Description</label>
          <input id="description" name="description" />
        </div>
        <button id="submit">Create</button>
      </form>

      <h1>List Post</h1>

      <div style={{ display: "flex", flexDirection: "column" }}>
        {posts?.data?.map((item: TPost) => {
          return (
            <div key={item._id}>
              <Link href={`/post/${item._id}`}>
                <span>{item.title}</span>
              </Link>
              {/* <span onClick={() => handleDeletePost(item._id)}>❌</span> */}
            </div>
          );
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
