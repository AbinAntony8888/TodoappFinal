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
  const editItem=(event:number)=>{
    const newTodo = [...todoList]; 
  }

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
              className="bg-teal-100  border-2 border-black p-1 text-amber-950"
            /> 
          
            <TodoButton
              value={"Delete"}
              colour={"bg-[red]"}
              buttonClick={() => deleteItem(index)}
            />
            <TodoButton value={"Edit"} colour={"bg-[#6AB20D]" } buttonClick={()=>editItem(index)} />
          </li>
        ))}
        <TodoButton 
          value={"clear all"}
          colour={"bg-[#cb3333]"}
          buttonClick={clearAll}
        />
      </ol>
    </div>
  );
}
