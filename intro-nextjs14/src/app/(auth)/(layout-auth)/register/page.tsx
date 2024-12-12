// Register Page Component
"use client";

import { useRouter } from "next/navigation";

export default function Index() {
  const router = useRouter();
  const handleNavigationLogin = () => {
    router.push("/login");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#eef6f9",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ color: "#333", marginBottom: "20px" }}>Register Page</h1>
      <p
        style={{
          color: "#555",
          marginBottom: "20px",
          textAlign: "center",
          maxWidth: "600px",
        }}
      >
        Create a new account to enjoy our amazing features. It only takes a few
        minutes to get started.
      </p>
      <button
        onClick={() => router.back()}
        style={{
          margin: "10px",
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#0070f3",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Back
      </button>
      <button
        onClick={() => router.forward()}
        style={{
          margin: "10px",
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#0070f3",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Forward
      </button>
      <button
        onClick={handleNavigationLogin}
        style={{
          margin: "10px",
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#0070f3",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Go to login
      </button>
      <footer style={{ marginTop: "30px", color: "#777", fontSize: "14px" }}>
        &copy; 2024 Your Website. All rights reserved.
      </footer>
    </div>
  );
}
