import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const API_URL = "http://appalim.herokuapp.com";
// const API_URL = "http://localhost:5000";

const Tasks = ({ editMode }) => {
  const [myTasks, setMyTasks] = useState([]);

  // 1. useEffect - axios.get -> getTasks
  useEffect(() => {
    axios
      .get(API_URL + "/tasks")
      .then((response) => {
        const data = response.data;
        setMyTasks(data);
      })
      .catch(() => {
        alert("Error retrieving data");
      });
  }, [myTasks]);

  const deleteTask = async (mytask) => {
    const id = mytask._id;
    await axios.delete(`${API_URL}/tasks/${id}`, id);
  };

  return (
    <div className="tasks_page">
      <Link to="/">
        <button className="go_to_mainpage">Go to my main page</button>
      </Link>
      <h1>TASKS TO COMPLETE</h1>
      {myTasks
      // .filter((mytask) => mytask.task_done === false)
      .map((mytask, index) => (
        <li key={index} id={index}>
          <Link to={`/tasks/${mytask._id}`} className="tasks-link">
            {mytask.task_date} - {''} 
             {mytask.task_category}  - {''} 
              {mytask.task_name} - {''} 
              {mytask.task_deadline}
          </Link>
          <button id="delete_task_button" onClick={() => deleteTask(mytask)}>
            delete
          </button>
          
        </li>
      ))}
      <Link to="/task">
        <button className="go_to_component">Create new task</button>
      </Link>

      <div>
        <h1>Completed Tasks</h1>
        <ul>
          {myTasks
            .filter((task) => task.task_done === true)
            .map((task, index) => (
              <li key={index} style={{textDecoration:'line-through'}}>
                {task.task_date} - {task.task_category} - {task.task_name} - {task.task_deadline} 
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Tasks;
