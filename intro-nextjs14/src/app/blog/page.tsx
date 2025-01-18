import styles from "../page.module.css";

export const generateMetadata = () => {
  return {
    title: "Blog",
    description: "Blog duy nghia",
  };
};

export default function Home() {
  return (
    <main>
      <h1>Blog Page</h1>
    </main>
  );
}
