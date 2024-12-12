"use client";

import { useParams } from "next/navigation";
import styles from "../../../../page.module.css";

export default function Index() {
  const params = useParams();

  return (
    <main className={styles.main}>Review Page Detail {params.reviewId} </main>
  );
}
