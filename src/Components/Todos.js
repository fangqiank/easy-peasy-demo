import React, { useEffect } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import TodoItems from "./TodoItems";

const Todos = () => {
  const todos = useStoreState((state) => state.todos);
  //console.log(todos);

  const fetchTodos = useStoreActions((actions) => actions.fetchTodos);

  useEffect(() => {
    fetchTodos();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <h1>Todos</h1>
      <p>Click todo item to toggle completed</p>
      <hr />
      {todos.map((todo) => (
        <TodoItems todo={todo} key={todo.id} />
      ))}
    </>
  );
};

export default Todos;
