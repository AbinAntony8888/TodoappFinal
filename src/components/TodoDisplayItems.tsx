import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  
  const editItem = (index: number,item:string) => {
    const newTodo = [...todoList];
    newTodo[index]=item;
    // newTodo[index]
    newTodo[index] = prompt('Enter the new task:', todoList[index]) || todoList[index];
    console.log(newTodo[index]);
    setTodoList(newTodo);
  };

  return (
    <div>
      <ol className="flex flex-col gap-y-1 items-end  ">
        {todoList.map((item: string, index: number) => (
          <li key={index} className="flex flex-row bg-red-400">
            <div className="font-bold w-8 text-m">
              <h1 className="text-black pr-2">{index + 1}.</h1>
            </div>
            <input 
              type="text"
              value={item}
              id="inputdisplay"
              // onChange={(e) => editItem(index, e.target.value)}
              className="bg-red-400 p-1 text-white font-bold text-lg"
            />

            <TodoButton
              value={ "Edit"}
              colour={"bg-[#6AB20D]"}
              buttonClick={() => editItem(index,item)}
            />
    
            <TodoButton
              value={"Delete"}
              colour={"bg-[red]"}
              buttonClick={() => deleteItem(index)}
            />
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
