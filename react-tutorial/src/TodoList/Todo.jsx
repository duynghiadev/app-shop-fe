import { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([{ name: "homework" }]);
  const [inputState, setInputState] = useState("");

  const handleAddTodo = () => {
    setTodos((prev) => [...prev, { name: inputState }]);
    setInputState("");
  };

  const handleDeleteTodo = (name) => {
    setTodos((prev) => prev.filter((todo) => todo.name !== name));
  };

  return (
    <div>
      <input
        type="text"
        value={inputState}
        onChange={(e) => {
          setInputState(e.target.value);
          console.log("input: ", e.target.value);
        }}
      />

      <button onClick={handleAddTodo}>Add Todo</button>

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {todos.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 2,
              }}
            >
              <h1 key={index}>{item.name}</h1>
              <span onClick={() => handleDeleteTodo(item.name)}>Delete</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
