import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import axios from "axios";
let today = new Date();

const API_URL = "http://appalim.herokuapp.com"
// const API_URL = "http://localhost:5000"

const Task = () => {
  const [taskList, setTaskList] = useState([]);

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

    axios({
      // url: "/tasks",
      url: API_URL + "/tasks",
      method: "POST",
      data: payload,
    })
      .then(() => {
        console.log("Data has been sent to the server");
      })
      .catch(() => {
        console.log("Internal server error");
      });
      reset();
    navigate("/task");
  };

  let task_date = watch("task_date");
  const task_name = watch("task_name");

  return (
    <>
      {console.log(taskList)}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="submit" value="Добавить" />
        <br />
        <textarea
          placeholder="Введи задачу ..."
          {...register("task_name", { required: true })}
        />
      </form>
      <Link to="/tasks">
          <button>Go to my tasks</button>
      </Link>
      <br />
      <Link to="/">
          <button>Go to my main page</button>
      </Link>
    </>
  );
};

export default Task;
