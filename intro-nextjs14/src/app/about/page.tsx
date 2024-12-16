"use client";

import { useState } from "react";
import styles from "../page.module.css";

export default function Index() {
  console.log("about client component");

  return <h1 className={styles.main}>About Page - client component</h1>;
}
