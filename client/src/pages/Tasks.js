import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { format, add } from "date-fns";
import { flexbox } from "@mui/system";

const API_URL = "http://appalim.herokuapp.com";
// const API_URL = "http://localhost:5000";

let today = format(new Date(), "dd/MM/yyyy");
let tomorrow = format(add(new Date(), { days: 1 }), "dd/MM/yyyy");

const Tasks = ({ editMode }) => {

 
  const [myTasks, setMyTasks] = useState([]);

  // 1. useEffect - axios.get -> getTasks
  useEffect(() => {
    axios
      .get(API_URL + "/api/tasks")
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
    await axios.delete(`${API_URL}/api/tasks/${id}`, id);
  };

  return (
    <div className="tasks_page">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Link to="/task">
          <button className="go_to_component">Create a new task</button>
        </Link>
        <Link to="/">
          <button className="go_to_mainpage">Go to my main page</button>
        </Link>
      </div>
      <h1>Tasks to complete</h1>
      {myTasks
        .filter((mytask) => mytask.task_done === false)
        // .sort((a, b) => new Date(...a.task_deadline.split('/').reverse()) - new Date(...b.task_deadline.split('/').reverse()))
        .map((mytask, index) => (
          <li
            key={index}
            id={index}
            className="tasks_li"
            style={{
              border: "2px solid var(--blue-color",
              padding: "5px",
              borderRadius: "10px",
              margin: "5px",
            }}
          >
            
            <Link to={`/tasks/${mytask._id}`} className="tasks-link">
              <div>
                <strong>
                    {mytask.task_deadline === today && <span>Today</span> ||
                    mytask.task_deadline === tomorrow && <span>Tomorrow</span> || 
                    mytask.task_deadline }
                  </strong> | {""}
                <em>delay</em>:{" "}
                <span style={{ textDecoration: "underline" }}>
                X</span> days |{" "}
                <span id="category">{mytask.task_category}</span>
                <br />
                <hr />
              </div>
              {mytask.task_name} - {""}
            </Link>
            <button id="delete_task_button" onClick={() => deleteTask(mytask)}>
              delete
            </button>
          </li>
        ))} 

   

      {/* <center>
        <h2>TODAY</h2>
      </center>
      {myTasks
        .filter(
          (mytask) =>
            mytask.task_done === false && mytask.task_deadline === today
        )
        .map((mytask, index) => (
          <li key={index} id={index} style={{
            border: "2px solid var(--blue-color",
            padding: "5px",
            borderRadius: "10px",
            margin: "5px",
          }}>
            <Link to={`/tasks/${mytask._id}`} className="tasks-link">
            <div>
                <strong>{mytask.task_deadline}</strong> | {""}
                <em>delay</em>:{" "}
                <span style={{ textDecoration: "underline" }}>0</span> days |{" "}
                <span id="category">{mytask.task_category}</span>
                <br />
                <hr />
              </div>
              {mytask.task_name} - {""}
            </Link>
            <button id="delete_task_button" onClick={() => deleteTask(mytask)}>
              delete
            </button>
          </li>
        ))} */}

       <center>
        <h2>TOMORROW</h2>
      </center>
      {myTasks
        .filter(
          (mytask) =>
            mytask.task_done === false && mytask.task_deadline === tomorrow
        )
        .map((mytask, index) => (
          <li key={index} id={index} style={{
            border: "2px solid var(--blue-color",
            padding: "5px",
            borderRadius: "10px",
            margin: "5px",
          }}>
            <Link to={`/tasks/${mytask._id}`} className="tasks-link">
            <div>
                <strong>{mytask.task_deadline}</strong> | {""}
                <em>delay</em>:{" "}
                <span style={{ textDecoration: "underline" }}>0</span> days |{" "}
                <span id="category">{mytask.task_category}</span>
                <br />
                <hr />
              </div>
              {mytask.task_name} - {""}
            </Link>
            <button id="delete_task_button" onClick={() => deleteTask(mytask)}>
              delete
            </button>
          </li>
        ))}

      <div>
        <h1>Completed Tasks</h1>
        <ul>
          {myTasks
            .filter((task) => task.task_done === true)
            .map((task, index) => (
              <li key={index}>
                {task.task_date} -
                <span id="done">
                  {task.task_category} - {task.task_name} - {task.task_deadline}
                </span>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Tasks;
