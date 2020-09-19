import React from "react";
import { useStoreActions } from "easy-peasy";

const TodoItems = ({ todo }) => {
  const { remove, toggle } = useStoreActions((actions) => ({
    remove: actions.remove,
    toggle: actions.toggle,
  }));

  return (
    <div
      className="todo"
      style={{
        textDecoration: todo.completed ? "line-through" : "none",
      }}
    >
      <span style={{ cursor: "pointer" }} onClick={() => toggle(todo.id)}>
        {todo.title}
      </span>
      <button onClick={() => remove(todo.id)}>
        <i className="fas fa-trash-alt" />
      </button>
    </div>
  );
};

export default TodoItems;
