import { useState } from "react";

const Boundary = () => {
  const [count, setCount] = useState(1);
  if (count === 3) {
    throw new Error("Invalid");
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Home Page</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>
    </div>
  );
};

export default Boundary;
