import React from "react";
import model from "./model";
import { createStore, StoreProvider } from "easy-peasy";
import Todos from "./Components/Todos";
import AddTodo from "./Components/AddTodo";
import "./App.css";

const store = createStore(model);

function App() {
  return (
    <StoreProvider store={store}>
      <div className="Container">
        <Todos />
        <AddTodo />
      </div>
    </StoreProvider>
  );
}

export default App;
