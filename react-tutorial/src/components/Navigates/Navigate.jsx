import { Link, useLocation } from "react-router-dom";

const Navigate = () => {
  const location = useLocation();
  console.log("location:", { location });

  const routes = [
    {
      href: "/",
      title: "Home",
    },
    {
      href: "/blog",
      title: "Blog",
    },
    {
      href: "/profile",
      title: "Profile",
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "gray",
        fontSize: "20px",
        display: "flex",
        gap: 8,
        padding: 20,
        justifyContent: "space-evenly",
        alignItems: "center",
        borderRadius: 5,
        cursor: "pointer",
        color: "#000",
      }}
    >
      {routes.map((item, index) => {
        return (
          <Link
            key={index}
            to={item.href}
            style={{
              textDecoration: "none",
              color: item.href === location.pathname ? "blue" : "inherit",
            }}
          >
            {item.title}
          </Link>
        );
      })}
    </div>
  );
};

export default Navigate;
