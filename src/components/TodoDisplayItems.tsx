import TodoButton from "./TodoButton";

type todoType = {
  todoList: string[];
  setTodoList: (value: string[]) => void;
};

export default function TodoDisplayItems({ todoList, setTodoList }: todoType) {
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
      <ol className="ol-list">
        {todoList.map((item: string, index: number) => (
          <li key={index}>
            <input
              type="text"
              value={item}
              className="bg-[#d4e885]  border-2 border-black p-1"
            />
            {/* <button
              onClick={() => deleteItem(index)}
              className="bg-[red] p-1 m-1"
            >
              Delete
            </button> */}
            {/* <button className="bg-[#38f351] p-1 m-1 px-4">Edit</button> */}
            <TodoButton
              value={"Delete"}
              colour={"bg-[red]"}
              buttonClick={() => deleteItem(index)}
            />
            <TodoButton value={"Edit"} colour={"bg-[#6AB20D]"} />
          </li>
        ))}
        {/* <button
          onClick={clearAll}
          className="bg-[#864747] p-1 m-1 px-4 text-white"
        >
          Clear All
        </button> */}
        <TodoButton
          value={"clear all"}
          colour={"bg-[#977ACF]"}
          buttonClick={clearAll}
        />
      </ol>
    </div>
  );
}
