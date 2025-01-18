export default function Layout({
  children,
  filter,
  search,
}: {
  children: React.ReactNode;
  filter: React.ReactNode;
  search: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex" }}>
      {search}
      <div style={{ display: "flex", flexDirection: "column" }}>
        {filter}
        {children}
      </div>
    </div>
  );
}
