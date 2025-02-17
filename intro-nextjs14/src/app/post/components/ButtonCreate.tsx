"use client";
import { useFormStatus } from "react-dom";

const ButtonCreate = () => {
  const { pending } = useFormStatus();

  return <button id="submit">{pending ? "Loading Create" : "Create"}</button>;
};

export default ButtonCreate;
