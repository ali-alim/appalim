import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import axios from "axios";
let today = new Date();

const Tasks = () => {
  const [taskList, setTaskList] = useState([]);

  const [tasks, setTasks] = useState([]);

  const navigate = useNavigate();

  const { register, handleSubmit, watch, reset } = useForm({ mode: "all" });

  const onSubmit = (data) => {
    const formattedDate = format(new Date(today), "dd/MM/yyyy");
    task_date = formattedDate.toString();

    const task = {
      task_date,
      task_name,
    };
    setTaskList([...taskList, task]);

    const payload = {
      ...task,
    };

    reset();

    axios({
      url: "http://appalim.herokuapp.com/tasks/",
      method: "POST",
      data: payload,
    })
      .then(() => {
        console.log("Data has been sent to the server");
      })
      .catch(() => {
        console.log("Internal server error");
      });

    navigate("/tasks");
  };

  let task_date = watch("task_date");
  const task_name = watch("task_name");

  useEffect(() => {
    axios
      .get("http://appalim.herokuapp.com/tasks")

      .then((response) => {
        const data = response.data;
        setTasks(data);
      })
      .catch(() => {
        alert("Error retrieving data");
      });
  }, [onSubmit]);

  const deleteZTask = (id) => {
    const payload = id;
    axios({
      url: `http://appalim.herokuapp.com/tasks/${id}`,
      method: "DELETE",
      data: payload,
    });
  };

  return (
    <>
      <Link to="/"><button>Main Menu</button></Link>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="submit" value="Добавить" />
        <br />
        <textarea
          placeholder="Введи задачу ..."
          {...register("task_name", { required: true })}
        />
      </form>

      <h1>ТВОИ ЗАДАЧИ</h1>
      <div className="tasks_list">
        {tasks.map((task, index) => (
          <>
            <li key={index}>
              {task.task_date} - {task.task_name} -{" "}
              <button
                id="delete_task_button"
                onClick={() => deleteZTask(task._id)}
              >
                сделано
              </button>
            </li>
            <hr />
          </>
        ))}
      </div>
    </>
  );
};

export default Tasks;
