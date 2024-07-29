import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


function Pending() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadTasksFromLocalStorage = () => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      return JSON.parse(storedTasks);
    }
    return [];
  };

  const saveTasksToLocalStorage = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };
  useEffect(() => {
    
    const initialTasks = loadTasksFromLocalStorage();
    if (initialTasks.length === 0) {
      axios.get('https://jsonplaceholder.typicode.com/todos')
        .then((response) => {
          setTasks(response.data);
          saveTasksToLocalStorage(response.data);
          setLoading(false);
        })
        .catch((err) => {
          setError('Failed to fetch tasks.');
          setLoading(false);
        });
    } else {
      setTasks(initialTasks);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    saveTasksToLocalStorage(tasks);
  }, [tasks]);

  const deleteTask = (id) => { 
    const newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks);
  };

  // useEffect(() => {
  //   setLoading(true);
  //   axios.get('https://jsonplaceholder.typicode.com/todos')
  //     .then((response) => {
  //       setTasks(response.data);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       setError('Failed to fetch tasks.');
  //       setLoading(false);
  //     });
  // }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }
 

  return (
    <div className="todo-list">
      <h1>Pending List</h1>
      <ul>
        {tasks.slice(0, 10).map(task => (
          <li key={task.id}>
            <span>{task.title}</span>           
            <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={()=>deleteTask(task.id)}  />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pending;
