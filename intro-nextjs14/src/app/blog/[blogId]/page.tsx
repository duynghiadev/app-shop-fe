"use client";

import { useParams } from "next/navigation";
import styles from "../../page.module.css";

export default function Index() {
  const params = useParams();
  console.log("params", params);

  return <main className={styles.main}>Blog Page Detail {params.blogId} </main>;
}
