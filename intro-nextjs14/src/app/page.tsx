// Home Page Component
import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f4f4f9",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ color: "#333", marginBottom: "20px" }}>Home Page</h1>
      <p
        style={{
          color: "#555",
          marginBottom: "20px",
          textAlign: "center",
          maxWidth: "600px",
        }}
      >
        Welcome to our website! Explore the pages below to learn more about us
        and get started.
      </p>
      <Link
        href="/register"
        style={{
          margin: "10px 0",
          color: "#0070f3",
          textDecoration: "none",
          fontSize: "18px",
        }}
      >
        Go to register page
      </Link>
      <Link
        href="/login"
        style={{
          margin: "10px 0",
          color: "#0070f3",
          textDecoration: "none",
          fontSize: "18px",
        }}
      >
        Go to login page
      </Link>
      <footer style={{ marginTop: "30px", color: "#777", fontSize: "14px" }}>
        &copy; 2024 Your Website. All rights reserved.
      </footer>
    </main>
  );
}
