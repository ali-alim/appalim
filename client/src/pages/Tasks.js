import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const API_URL = "http://appalim.herokuapp.com";
// const API_URL = "http://localhost:5000/answers"

const Tasks = () => {
  const [myTasks, setMyTasks] = useState([]);

  useEffect(() => {
    axios
      // .get("/tasks")
      .get(API_URL + "/tasks")

      .then((response) => {
        const data = response.data;
        setMyTasks(data);
      })
      .catch(() => {
        alert("Error retrieving data");
      });
  }, [myTasks]);

  const deleteTask = (id) => {
    axios.delete(`${API_URL}/tasks/${id}`, id);
    // axios.delete(`${API_URL}/${id}`, id)
  };

  const doneTask = (index) => {
    const edited = document.getElementById(index);
    edited.style.lineThrough = "line-through";
  };

  return (
    <div className="tasks_page">
      <Link to="/">
        <button className="go_to_mainpage">Go to my main page</button>
      </Link>
      {myTasks.map((mytask, index) => (
        <li key={index}>
          {mytask.task_date} - {mytask.task_name} -{" "}
          <button
            id="delete_task_button"
            onClick={() => deleteTask(mytask._id)}
          >
            delete
          </button>
          <button className="done_button" onClick={() => doneTask(index)}>
            done
          </button>
        </li>
      ))}
      <Link to="/task">
        <button className="go_to_component">Create new task</button>
      </Link>
    </div>
  );
};

export default Tasks;
