"use client";

import { ChangeEvent, useEffect, useState } from "react";
import styles from "../page.module.css";
import Link from "next/link";

export interface TPost {
  title: string;
  description: string;
  _id: string;
}

export default function ListPost() {
  const [listPost, setListPost] = useState<{
    data: TPost[];
    totalPage: number;
  }>({
    data: [],
    totalPage: 0,
  });
  const [params, setParams] = useState({ page: 1, limit: 2 });
  const [inputState, setInputState] = useState({
    title: "",
    description: "",
  });

  const fetchListPost = async () => {
    fetch(
      `http://localhost:3000/post/api?limit=${params.limit}&page=${params.page}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("List Posts:", { data }, { data });
        setListPost({
          data: data.data,
          totalPage: data?.meta.totalPages,
        });
      });
  };

  useEffect(() => {
    fetchListPost();
  }, [params.page]);

  const handleDeletePost = async (id: string) => {
    fetch(`http://localhost:3000/post/api/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => {
        console.log("Delete Posts:", { data }, { data });
        if (data.message === "Success") {
          fetchListPost();
        }
      });
  };

  const handleCreate = () => {
    fetch(`http://localhost:3000/post/api`, {
      method: "POST",
      body: JSON.stringify({ ...inputState }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Create Posts:", { data }, { data });
        if (data.message === "Success") {
          fetchListPost();
          setInputState({ title: "", description: "" });
        }
      });
  };

  const handleOnChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputState({
      ...inputState,
      [e.target.name]: e.target.value,
    });
  };

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
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            value={inputState.title}
            name="title"
            onChange={handleOnChangeInput}
          />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
          <label htmlFor="description">Description</label>
          <input
            id="description"
            value={inputState.description}
            name="description"
            onChange={handleOnChangeInput}
          />
        </div>
        <button onClick={handleCreate}>Create</button>
      </div>

      <h1>List Post</h1>

      <div style={{ display: "flex", flexDirection: "column" }}>
        {listPost?.data?.map((item: TPost) => {
          return (
            <div key={item._id}>
              <Link href={`/post/${item._id}`}>
                <span>{item.title}</span>
              </Link>
              <span onClick={() => handleDeletePost(item._id)}>❌</span>
            </div>
          );
        })}
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
        <button
          disabled={params.page === 1}
          onClick={() => {
            setParams({ ...params, page: params.page - 1 });
          }}
        >
          Previous
        </button>
        <div>Current Page:{params.page}</div>
        <button
          disabled={params.page === listPost.totalPage}
          onClick={() => {
            setParams({ ...params, page: params.page + 1 });
          }}
        >
          Next
        </button>
      </div>
    </main>
  );
}
