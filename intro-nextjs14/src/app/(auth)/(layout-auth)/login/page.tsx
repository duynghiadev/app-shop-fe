// Login Page Component
"use client";

import { useRouter } from "next/navigation";

export default function Index() {
  const router = useRouter();
  const handleNavigationRegister = () => {
    router.push("/register");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f9eef4",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ color: "#333", marginBottom: "20px" }}>Login Page</h1>
      <p
        style={{
          color: "#555",
          marginBottom: "20px",
          textAlign: "center",
          maxWidth: "600px",
        }}
      >
        Log in to your account to access your personalized dashboard and stay
        connected.
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
        onClick={handleNavigationRegister}
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
        Go to register
      </button>
      <footer style={{ marginTop: "30px", color: "#777", fontSize: "14px" }}>
        &copy; 2024 Your Website. All rights reserved.
      </footer>
    </div>
  );
}
