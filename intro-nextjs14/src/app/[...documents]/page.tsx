import { notFound } from "next/navigation";
import styles from "../page.module.css";

export default function Index({ params }: { params: any }) {
  console.log("params:", { params });

  if (params.documents.includes("routing")) {
    if (params.documents.includes("nested")) {
      return <h1>You can read document of nested</h1>;
    }
    return <h1>You can read document of routing</h1>;
  }

  if (params.documents.length > 1) {
    notFound();
  }

  return <main className={styles.main}>Document pages</main>;
}
