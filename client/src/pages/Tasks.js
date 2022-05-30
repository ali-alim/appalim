import React, {useState,useEffect} from 'react'
import {Link} from "react-router-dom"
import axios from 'axios'
import { Navigate } from 'react-router-dom';

const Tasks = () => {


  const [myTasks, setMyTasks] = useState([])

  useEffect(() => {
    axios
      .get("http://appalim.herokuapp.com/tasks")

      .then((response) => {
        const data = response.data;
        setMyTasks(data);
      })
      .catch(() => {
        alert("Error retrieving data");
      });
  }, [myTasks]);

  const deleteTask = (id) => {
    axios.delete(`http://appalim.herokuapp.com/tasks/${id}`, id)
  }

  return (
    <div>
      <h1>Your tasks are below, complete them ASAP</h1>
      {myTasks.map((mytask,index) => (
        <li key={index}>{mytask.task_date} - {mytask.task_name} - <button id="delete_task_button" onClick={() => deleteTask(mytask._id)}>delete</button></li>
      ))}
    <Link to="/task">
      <button>create new tasks</button>
    </Link>
    </div>
  )
}

export default Tasks
