import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Pending() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then((response) => {
        setTasks(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to fetch tasks.');
        setLoading(false);
      });
  }, []);

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
            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pending;
