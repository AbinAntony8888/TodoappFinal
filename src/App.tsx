import React from "react";
import "./App.css";
import { useState } from "react";
import TodoinputData from "./components/TodoinputData";
import TodoDisplayItems from "./components/TodoDisplayItems";

function App() {
  const [todoInput, setTodoInput] = useState<string>("");
  const [todoListArray, setTodoListArray] = useState<string[]>([]);
  return (
    <div className="flex flex-col gap-y-5 h-screen bg-slate-700 text-white">
      <h1 className="text-xl font-bold text-center  underline ">Todo List</h1>
      <div className="flex flex-col justify-star items-start w-full ">
        <div className="">
          <TodoinputData
            setTodolist={setTodoListArray}
            todoList={todoListArray}
            inputTodo={todoInput}
            setInputTodo={setTodoInput}
          />
        </div>
        <div className=" ">
          <TodoDisplayItems
            todoList={todoListArray}
            setTodoList={setTodoListArray}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
