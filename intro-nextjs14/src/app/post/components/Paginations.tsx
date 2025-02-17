"use client";

import { useRouter } from "next/navigation";

const Pagination = ({
  totalPage,
  currentPage,
  currentLimit,
}: {
  totalPage: number;
  currentPage: number;
  currentLimit: number;
}) => {
  const router = useRouter();

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
      <button
        disabled={currentPage === 1}
        onClick={() => {
          router.push(`post?limit=${currentLimit}&page=${currentPage - 1}`);
        }}
      >
        Previous
      </button>
      <div>Current Page:{currentPage}</div>
      <button
        disabled={currentPage === totalPage}
        onClick={() => {
          router.push(`post?limit=${currentLimit}&page=${currentPage + 1}`);
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
