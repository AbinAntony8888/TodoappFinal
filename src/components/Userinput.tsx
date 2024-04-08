import React from "react";

export default function Userinput() {
    const handleSubmit=()=>{
        
    }
  return (
    <div>
      <h1 className="text-xl font-bold pt-5 underline">Todo List</h1>
      <br />
      <form action="" onSubmit={handleSubmit}>
      <input type="text" className="border-2 border-black p-1" />
      <button className="bg-green-800 ml-6 p-1 text-white font-medium">
        Add item
      </button>
      </form>
    </div>
  );
}
