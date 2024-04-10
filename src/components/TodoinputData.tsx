import React, { ChangeEvent, FormEvent } from "react";
import TodoButton from "./TodoButton";

type todotyps = {
  setTodolist: (value: string[]) => void;
  todoList: string[];
  inputTodo: string;
  setInputTodo: (ivalue: string) => void;
};

export default function TodoinputData({
  setTodolist,
  setInputTodo,
  todoList,
  inputTodo,
}: todotyps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputTodo(event.target.value);
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (inputTodo !== "") {
      setTodolist([...todoList, inputTodo]);
      setInputTodo("");
    }
  };
  return (
    <div className=" flex items-center text-black pb-3 ">
      <br />
      <form action="" className="flex flex-row" onSubmit={handleSubmit}>
        <input
          placeholder="Enter Your Task.."
          type="text"
          onChange={handleChange}
          value={inputTodo}
          className="border-2 border-black p-1"
        />
        <TodoButton value={" add"} colour={"bg-[#237a3c]"} />
        {/* <button
          className="bg-green-600 ml-6 p-1 text-white font-medium">
          Add item
        </button> */}
      </form>
    </div>
  );
}
