import Card from "./Card";
import Todo from "./TodoList/Todo";

function App() {
  const count = 0;
  return (
    <>
      <Card initialCount={count} />
      <Todo />
    </>
  );
}

export default App;
