import styles from "../page.module.css";

export default function Index() {
  console.log("Server Component");

  return <main className={styles.main}>Server Component</main>;
}
