import React, { useState } from "react";
import Userinput from "./Userinput";
import Result from "./Result";

export default function Product() {
  const [todoInput, setTodoInput] = useState<string>("");
  const [todoListArray, setTodoListArray] = useState<string[]>([]);
  return (
    <div>
      <Userinput
        setTodolist={setTodoListArray}
        todoList={todoListArray}
        inputTodo={todoInput}
        setInputTodo={setTodoInput}
      />
      <Result todoList={todoListArray} setTodoList={setTodoListArray} />
    </div>
  );
}
