import React from "react";
import { MouseEvent } from "react";

type todoType = {
  todoList: string[];
  setTodoList: (value: string[]) => void;
};

export default function Result({ todoList, setTodoList }: todoType) {
  const deleteItem = (event: number) => {
    const newTodoArray = [...todoList];
    newTodoArray.splice(event, 1);
    setTodoList(newTodoArray);
  };
  const clearAll = () => {
    setTodoList([]);
  };

  return (
    <div>
      <ol>
        {todoList.map((item: string, index: number) => (
          <li key={index}>
            <input
              type="text"
              value={item}
              className="bg-[#d4e885] border-2 border-black"
            />
            <button
              onClick={() => deleteItem(index)}
              className="bg-[red] p-1 m-1"
            >
              Delete
            </button>
            <button className="bg-[#38f351] p-1 m-1 px-4">Edit</button>
          </li>
        ))}
        <button
          onClick={clearAll}
          className="bg-[#762733] p-1 m-1 px-4 text-white"
        >
          Clear All
        </button>
      </ol>
    </div>
  );
}
