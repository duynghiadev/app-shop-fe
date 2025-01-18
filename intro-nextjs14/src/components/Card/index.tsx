export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        padding: "20px",
        margin: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid #dbdbdb",
      }}
    >
      {children}
    </div>
  );
}
