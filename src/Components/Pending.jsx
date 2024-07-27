import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios'


function Pending ()  {
  const [tasks, setTasks]=useState([]);
  const[Loading,setLoading]=useState(true)
  // const [reload, setReload]=useState(false)
 
  
  
    useEffect(
      ()=>{
        setLoading(true)
         axios.get('https://jsonplaceholder.typicode.com/todos')
        .then((resp)=>{
          setTasks(resp.data)
          console.log(resp.data)
          setLoading(false)
          
         })
  
         .catch(err=>console.log(err))
      },[]
    )

    if(Loading)
      return(
      <h1>Loading...</h1>
      )  
    
  
  return (
    <div className='main'  >
    <h1>Pending Todo List</h1>
    <br></br>
    {/* <input className='inputfield' type="text"   placeholder="Enter text" />
    <button  >Add Task</button>  */}
     <div className='under'>
    <p>Task Id: {tasks[0].id}</p>
    <p>Task Title: {tasks[0].title}</p>
    <br></br>
    <p>Task Id: {tasks[1].id}</p>
    <p>Task Title: {tasks[1].title}</p>
    <br></br>
    <p>Task Id: {tasks[15].id}</p>
    <p>Task Title: {tasks[15].title}</p>
    <br></br>
    <p>Task Id: {tasks[20].id}</p>
    <p>Task Title: {tasks[20].title}</p>
    <br></br>
    <p>Task Id: {tasks[4].id}</p>
    <p>Task Title: {tasks[4].title}</p>
    
     

    </div>
   

   </div>



  );
};

export default Pending;