import { useEffect, useState } from "react";
import Card from "./Card";
import Todo from "./TodoList/Todo";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("component re-render");
    // cleanup functions
    return () => {
      console.log("component destroyed");
    };
  }, [count]);

  return (
    <>
      <Card initialCount={count} />
      <Todo />
    </>
  );
}

export default App;
