import React from "react";
import "./App.css";
import { useState } from "react";
import TodoinputData from "./components/TodoinputData";
import TodoDisplayItems from "./components/TodoDisplayItems";

function App() {
  const [todoInput, setTodoInput] = useState<string>("");
  const [todoListArray, setTodoListArray] = useState<string[]>([]);
  return (
    <div className="flex flex-col items-center justify-start gap-y-5 h-screen text-white m-2 bg-gradient-to-r from-slate-300 to-slate-500">
      <h1 className="text-3xl font-bold text-center  underline text-black">Todo List</h1>
      <div className="">
        <div className="flex flex-col justify-start items-start w-full">
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
    </div>
  );
}

export default App;
