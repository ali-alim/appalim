import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { Checkbox } from "@material-ui/core";
import { format } from "date-fns";
import axios from "axios";
let today = new Date();

// const API_URL = "http://appalim.herokuapp.com";
const API_URL = "http://localhost:5000";

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

  const onSubmit = async (data) => {
    const formattedDate = format(new Date(today), "dd/MM/yyyy");
    task_date = formattedDate.toString();

    const task = {
      task_date,
      task_name,
      task_done,
    };
    setTaskList([...taskList, task]);

    const payload = {
      ...task,
    };

    if (!editMode) {
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
    }

    if (editMode) {
      try {
        await axios.put(`${API_URL}/tasks/${id}`, task);
      } catch (err) {
        console.log(err);
      }
      navigate("/tasks");
    }
  };

  let task_date = watch("task_date");
  const task_name = watch("task_name");
  let task_done = watch("task_done");

  const fetchData = async () => {
    axios
      .get(`${API_URL}/tasks/${id}`)
      .then((response) => {
        const data = response.data;
        setSelectedTask(data);
      })
      .catch(() => {
        alert("error retrieving data");
      });
    console.log(`id from fetchData:`, id);
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
            />
            <br />
            <textarea
              placeholder="Введи задачу ..."
              {...register("task_name", { required: true })}
            />

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
            />
            <br />
            <textarea
              placeholder="Введи задачу ..."
              value={selectedTask.task_name}
              {...register("task_name", { required: true })}
            />

            <input type="submit" value="Изменить" />
          </form>
        </>
      )}
      <br />
    </div>
  );
};

export default Task;
