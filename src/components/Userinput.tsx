import React, { ChangeEvent, FormEvent, MouseEvent } from "react";

type todotyps = {
  setTodolist: (value: string[]) => void;
  todoList: string[];
  inputTodo: string;
  setInputTodo: (ivalue: string) => void;
};

export default function Userinput({
  setTodolist,
  setInputTodo,
  todoList,
  inputTodo,
}: todotyps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputTodo(event.target.value);
  };
  const handleSubmit = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    if (inputTodo !== "") {
      setTodolist([...todoList, inputTodo]);
      setInputTodo("");
    }
  };
  return (
    <div>
      <h1 className="text-xl font-bold pt-5 underline">Todo List</h1>
      <br />
      <form action="">
        <input
          type="text"
          onChange={handleChange}
          value={inputTodo}
          className="border-2 border-black p-1"
        />
        <button
          className="bg-green-800 ml-6 p-1 text-white font-medium"
          onClick={handleSubmit}
        >
          Add item
        </button>
      </form>
    </div>
  );
}
