import { useState } from "react";

const TodoItem = ({ todo, handleDeleteTodo, handleUpdateTodo }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState(todo.name);

  const handleUpdate = () => {
    handleUpdateTodo(todo.id, name);
    setIsEdit(false);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 2,
      }}
    >
      {isEdit ? (
        <div>
          <input value={name} onChange={(e) => setName(e.target.value)} />
          <button onClick={() => handleUpdate()}>Update</button>
        </div>
      ) : (
        <>
          <h1 onClick={() => setIsEdit(!isEdit)}>{todo.name}</h1>
          <span onClick={() => handleDeleteTodo(todo.id)}>Delete</span>
        </>
      )}
    </div>
  );
};

export default TodoItem;
