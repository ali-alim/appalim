import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// const API_URL = "http://appalim.herokuapp.com";
const API_URL = "http://localhost:5000";

const Tasks = ({editMode}) => {
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
  }

  const doneTask = (mytask) => {
    setMyTasks([{...myTasks,[mytask.task_name]:'fucked'}])
  };


  return (
    <div className="tasks_page">
      <Link to="/">
        <button className="go_to_mainpage">Go to my main page</button>
      </Link>
      {myTasks.map((mytask, index) => (
        <li key={index} id={index}>
          <Link to={`/tasks/${mytask._id}`} className="tasks-link"> 
          {mytask.task_date} - {mytask.task_name} -{" "}
          </Link>
          <button id="delete_task_button" onClick={() => deleteTask(mytask)}>
            delete
          </button>
          <button className="done_button" onClick={() => doneTask(mytask)}>
            done
          </button>
        </li>
      ))}
      <Link to="/task">
        <button className="go_to_component">Create new task</button>
      </Link>

      <div>
        <h1>Deleted Tasks</h1>
        <ul>
        {myTasks.map((task, index) => (
          <li key={index}>{task.task_date} - {task.task_name} - {task.task_done}</li>
        ))}
        </ul>
      </div>
    </div>
  );
};

export default Tasks;
