import { useRef, useState } from "react";
import TodoItem from "./TodoItem";

const Todo = () => {
  const [todos, setTodos] = useState([{ name: "homework", id: Math.random() }]);
  const [inputState, setInputState] = useState("");
  const refInput = useRef(null);
  console.log("refInput", refInput);

  const handleAddTodo = () => {
    if (inputState.trim() === "") return; // Prevent adding empty todos
    setTodos((prev) => [...prev, { name: inputState, id: Math.random() }]);
    setInputState("");
    refInput.current.focus();
  };

  const handleDeleteTodo = (idDeleted) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== idDeleted));
  };

  const handleUpdateTodo = (id, newName) => {
    const cloneTodo = [...todos];
    const findUpdate = cloneTodo.find((item) => item.id === id);
    if (findUpdate) {
      findUpdate.name = newName;
      setTodos(cloneTodo);
    }
  };

  return (
    <div>
      <input
        ref={refInput}
        type="text"
        value={inputState}
        onChange={(e) => {
          setInputState(e.target.value);
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
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleUpdateTodo={handleUpdateTodo}
            handleDeleteTodo={handleDeleteTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default Todo;
