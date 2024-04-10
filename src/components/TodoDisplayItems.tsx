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
  // const editItem=(event:number)=>{
  //   const editTodoArray = [...todoList]; 
  // }

  const editItem = (index: number) => {
    // Enable editing for the item at the given index
    const newTodoList = [...todoList];
    newTodoList[index] = prompt('Enter the new task:', todoList[index]) || todoList[index];
    setTodoList(newTodoList);
  };

  return (
    <div>
      <ol className="flex flex-col gap-y-2 items-end">
        {todoList.map((item: string, index: number) => (
          <li key={index} className="flex flex-row ">
            {/* <h1 className="text-black pr-2">{index+1}.</h1> */}
            <input
              type="text"
              value={item}
              id="inputdisplay"
              // onChange={(e) => editItem(index, e.target.value)}
              className="bg-teal-100  border-2 border-black p-1 text-amber-950"
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
            <TodoButton value={"Edit"} colour={"bg-[#6AB20D]" } buttonClick={()=>editItem(index)} />
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
          colour={"bg-[#cb3333]"}
          buttonClick={clearAll}
        />
      </ol>
    </div>
  );
}
