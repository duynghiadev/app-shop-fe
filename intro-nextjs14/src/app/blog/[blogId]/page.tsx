"use client";

import { useParams } from "next/navigation";

export default function Index() {
  const params = useParams();
  console.log("params", params);

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1>Blog Page Detail {params.blogId}</h1>
      </div>
    </div>
  );
}
