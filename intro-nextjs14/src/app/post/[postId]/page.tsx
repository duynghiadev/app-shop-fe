"use client";

import { ChangeEvent, useEffect, useState } from "react";
import styles from "../../page.module.css";
import { TPost } from "@/app/post/page";

export default function PostDetail({ params }: { params: { postId: string } }) {
  const [dataPost, setDataPost] = useState<TPost>();
  const [isEdit, setIsEdit] = useState(false);
  const [inputState, setInputState] = useState({
    title: "",
    description: "",
  });

  const postId = params.postId;

  const handleOnChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputState({
      ...inputState,
      [e.target.name]: e.target.value,
    });
  };

  const fetchDetailsPost = async () => {
    fetch(`http://localhost:3000/post/api/${postId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Detail Posts:", { data }, { data });
        setDataPost(data.data);
      });
  };

  const handleUpdatePost = () => {
    fetch(`http://localhost:3000/post/api/${postId}`, {
      method: "PUT",
      body: JSON.stringify({ ...inputState }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Create Posts:", { data }, { data });
        if (data.message === "Success") {
          fetchDetailsPost();
          setIsEdit(false);
          setInputState({ title: "", description: "" });
        }
      });
  };

  useEffect(() => {
    if (postId) {
      fetchDetailsPost();
    }
  }, [postId]);

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
      <h1>Detail Posts</h1>
      <h2>
        Title:{" "}
        {isEdit ? (
          <input
            name="title"
            id="title"
            value={inputState.title}
            onChange={handleOnChangeInput}
          />
        ) : (
          <span>{dataPost?.title}</span>
        )}
      </h2>
      <h3>
        Description:{" "}
        {isEdit ? (
          <input
            name="description"
            id="description"
            value={inputState.description}
            onChange={handleOnChangeInput}
          />
        ) : (
          <span>{dataPost?.description}</span>
        )}
      </h3>
      {isEdit ? (
        <button onClick={handleUpdatePost}>Update</button>
      ) : (
        <button
          onClick={() => {
            setIsEdit(true);
            setInputState({
              title: dataPost?.title || "",
              description: dataPost?.description || "",
            });
          }}
        >
          Edit ✏️
        </button>
      )}
    </main>
  );
}
