export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <h1 style={{ backgroundColor: "red", color: "white" }}>Image</h1>
    </>
  );
}
