import { useNavigate } from "react-router-dom";
import Navigate from "../components/Navigates/Navigate";

const Blog = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navigate />
      <h1>Blog</h1>
      <button
        onClick={() =>
          navigate("/", {
            state: { name: "Hello" },
          })
        }
      >
        Back Home
      </button>
    </>
  );
};

export default Blog;
