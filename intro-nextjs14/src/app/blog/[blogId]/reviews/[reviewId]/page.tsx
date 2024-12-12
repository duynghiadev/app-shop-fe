"use client";

import { notFound, useParams } from "next/navigation";
import styles from "../../../../page.module.css";

export default function Index() {
  const arrIds = [1, 2, 3];
  const params = useParams();
  console.log("reviews id:", { params });

  if (!arrIds.includes(+params.reviewId)) {
    return notFound();
  }

  return (
    <main className={styles.main}>Review Page Detail {params.reviewId} </main>
  );
}
