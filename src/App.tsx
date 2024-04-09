import React from "react";
import "./App.css";
import { useState } from "react";
import TodoinputData from "./components/TodoinputData";
import TodoDisplayItems from "./components/TodoDisplayItems";

function App() {
  const [todoInput, setTodoInput] = useState<string>("");
  const [todoListArray, setTodoListArray] = useState<string[]>([]);
  return (
    <div className="App">
      <h1 className="text-xl font-bold pt-5 underline">Todo List</h1>
      <TodoinputData
        setTodolist={setTodoListArray}
        todoList={todoListArray}
        inputTodo={todoInput}
        setInputTodo={setTodoInput}
      />
      <TodoDisplayItems
        todoList={todoListArray}
        setTodoList={setTodoListArray}
      />
    </div>
  );
}

export default App;
