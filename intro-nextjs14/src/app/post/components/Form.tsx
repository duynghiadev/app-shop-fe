"use client";
import { createPost } from "@/app/actions";
import ButtonCreate from "@/app/post/components/ButtonCreate";
import { useEffect } from "react";
import { useFormState } from "react-dom";

const initialState = {
  message: "",
};

const Form = () => {
  const [state, formAction] = useFormState(createPost, initialState);
  console.log({ state, formAction });

  useEffect(() => {
    if (state.message) {
      alert(state.message);
    }
  }, [state.message]);

  return (
    <form action={formAction}>
      <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
        <label htmlFor="title">Title</label>
        <input id="title" name="title" />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
        <label htmlFor="description">Description</label>
        <input id="description" name="description" />
      </div>
      <ButtonCreate />
    </form>
  );
};

export default Form;
