import React, {useState} from 'react'

const TodoForm = ({addTodo}) => {
  const [value, setValue]=useState("")

  const handleSubmit=e=>{
    e.preventDefault();
    addTodo(value)
  }

  return (
    <form className='TodoForm'  onSubmit={handleSubmit}>
        <input type="text" value={value}  onChange={(e) => setValue(e.target.value)}   className='todo-input'/>
        <button type="submit" className='todo-btn'>ADD TASK</button>
      
    </form>
  )
}

export default TodoForm
