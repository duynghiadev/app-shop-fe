"use client";
import { createPost } from "@/app/actions";
import ButtonCreate from "@/app/post/components/ButtonCreate";
import { useEffect, useRef } from "react";
import { useFormState, useFormStatus } from "react-dom";

const initialState = {
  message: "",
};

const Form = () => {
  const [state, formAction] = useFormState(createPost, initialState);
  const refForm = useRef<HTMLFormElement | null>(null);
  const { pending } = useFormStatus();

  console.log({ state, formAction });

  useEffect(() => {
    if (state.message) {
      alert(state.message);
    }
  }, [state.message]);

  return (
    <form
      action={(formData: FormData) => {
        formAction(formData);
        refForm?.current?.reset();
      }}
      ref={refForm}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
        <label htmlFor="title">Title</label>
        <input id="title" name="title" />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
        <label htmlFor="description">Description</label>
        <input id="description" name="description" />
      </div>
      <button id="submit">{pending ? "Loading Create" : "Create"}</button>;
    </form>
  );
};

export default Form;
