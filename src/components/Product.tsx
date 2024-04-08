import React, { useState } from 'react'
import Userinput from './Userinput'

export default function Product() {
    const[todoInput,setTodoInput]=useState<string>("");
    const[todoListArray,setTodoListArray]=useState<string[]>([])
  return (
    <div>
      <Userinput/>
    </div>
  )
}
