import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { Checkbox } from "@mui/material";
import { format } from "date-fns";
import axios from "axios";
let today = new Date();

const API_URL = "http://appalim.herokuapp.com";
// const API_URL = "http://localhost:5000";

const Task = ({ editMode }) => {
  const [taskList, setTaskList] = useState([]);
  const [selectedTask, setSelectedTask] = useState({});
  const navigate = useNavigate();
  let { id } = useParams();

  const { register, handleSubmit, control, watch, reset } = useForm({
    defaultValues: {
      task_done: false,
    },
  });

  // const { onChange } = register("task_category");

  const onSubmit = async (data) => {
    const formattedDate = format(new Date(today), "dd/MM/yyyy");
    task_date = formattedDate.toString();

    const task = {
      task_date,
      task_name,
      task_done,
      task_category,
      task_deadline,
    };
    setTaskList([...taskList, task]);
    console.log(task);
    const payload = {
      ...task,
    };

    if (!editMode) {
      axios({
        // url: "/tasks",
        url: API_URL + "/api/tasks",
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
    }

    if (editMode) {
      try {
        await axios.put(`${API_URL}/api/tasks/${id}`, task);
      } catch (err) {
        console.log(err);
      }
      navigate("/tasks");
    }
  };

  let task_date = watch("task_date");
  const task_name = watch("task_name");
  const task_category = watch("task_category");
  const task_deadline = watch("task_deadline");
  let task_done = watch("task_done");

  const fetchData = async () => {
    axios
      .get(`${API_URL}/api/tasks/${id}`)
      .then((response) => {
        const data = response.data;
        setSelectedTask(data);
      })
      .catch(() => {
        alert("error retrieving data");
      });
  };

  useEffect(() => {
    if (editMode) fetchData();
  }, []);

  return (
    <div className="task">
      <div className="two_buttons">
        <Link to="/tasks">
          <button className="go_to_component">Go to my tasks</button>
        </Link>
        <Link to="/">
          <button className="go_to_mainpage">Go to my main page</button>
        </Link>
      </div>
      {!editMode && (
        <>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="task_done"
              control={control}
              render={({ field }) => <Checkbox {...field} />}
            />{" "}
            check if the task is already completed
            <br />
            <textarea
              placeholder="Введи задачу ..."
              {...register("task_name", { required: true })}
            />
            <input
              placeholder="Дата исполнения ..."
              {...register("task_deadline", { required: true })}
            />
            <input
              placeholder="Категория ..."
              {...register("task_category", { required: true })}
            />
            <br />
            <input type="submit" value="Добавить" />
          </form>
        </>
      )}
      {editMode && (
        <>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="task_done"
              control={control}
              render={({ field }) => <Checkbox {...field} />}
            />{" "}
            the task is completed
            <br />
            <textarea
              placeholder="Введи задачу ..."
              value={selectedTask.task_name}
              {...register("task_name", { required: true })}
            />
            <br />
            <input type="submit" value="Изменить" />
          </form>
        </>
      )}
      <br />
    </div>
  );
};

export default Task;
