import React,{useState} from 'react'
import TodoForm from './TodoForm'
import EditTodoForm from './EditTodoForm';
import Todo from './Todo';
import { v4 as uuidv4 } from "uuid";
uuidv4();

const TodoWrapper = () => {
  const[todos,setTodos]=useState([])
  const [filter, setFilter] = useState('all');


  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
    
    console.log(todos);
  }

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  const deleteTodo= (id)=>{
    setTodos(todos.filter(todo=>todo.id!==id))
  }
  const editTodo=(id)=>{
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  }

  const editTask=(task,id)=>{
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  }
 const filteredTodos = todos.filter((todo) => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'incompleted') return !todo.completed;
    return true; // 'all' filter
  });

  return (
    <div>
 
    <div className='TodoWrapper'>
       
      <h1>To do List</h1>
       <TodoForm addTodo={addTodo} />
        
        <div className='filters'>
          <button onClick={() => setFilter('all')}>All</button>
          <button onClick={() => setFilter('completed')}>Completed</button>
          <button onClick={() => setFilter('incompleted')}>Incomplete</button>
        </div>
       {filteredTodos.map((todo)=>(
         todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} />
        ):(
         <Todo task={todo}  key={todo.id} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />
        )
       ))}
       
    </div>
    
    </div>
  )
}

export default TodoWrapper
