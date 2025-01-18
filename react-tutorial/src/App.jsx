import { useEffect, useMemo, useState } from "react";
import Card from "./Card";
import Todo from "./TodoList/Todo";

function App() {
  const [count, setCount] = useState(0);
  const course = [
    {
      name: "JavaScript",
      score: 9,
    },
    {
      name: "HTML",
      score: 8,
    },
    {
      name: "CSS",
      score: 7,
    },
    {
      name: "React",
      score: 6,
    },
    {
      name: "Node.js",
      score: 5,
    },
  ];

  useEffect(() => {
    console.log("component re-render");
    // cleanup functions
    return () => {
      console.log("component destroyed");
    };
  }, [count]);

  const totalScore = useMemo(() => {
    course.reduce((total, current) => {
      return (total += current.score);
    }, 0);
  }, []);

  return (
    <>
      <h1>{totalScore}</h1>
      <Card initialCount={count} />
      <Todo />
    </>
  );
}

export default App;
