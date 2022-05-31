import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import axios from "axios";
let today = new Date();

const API_URL = "http://appalim.herokuapp.com";
// const API_URL = "http://localhost:5000"

const Training = () => {
  const [trainingList, setTrainingList] = useState([]);

  const navigate = useNavigate();

  const { register, handleSubmit, watch, reset } = useForm({ mode: "all" });

  const onSubmit = (data) => {
    const formattedDate = format(new Date(today), "dd/MM/yyyy");
    training_date = formattedDate.toString();
    training_numOfSets = training_numOfSets.toString();
    training_numInSets = training_numInSets.toString();
    training_totalNum = training_totalNum.toString();

    const training = {
      training_date,
      training_name,
      training_numOfSets,
      training_numInSets,
      training_totalNum
    };
    setTrainingList([...trainingList, training]);

    const payload = {
      ...training,
    };

    axios({
      // url: "/tasks",
      url: API_URL + "/trainings",
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
    navigate("/training");
  };

  let training_date = watch("training_date");
  const training_name = watch("training_name");
  let training_numOfSets = watch("training_numOfSets");
  let training_numInSets = watch("training_numInSets");
  let training_totalNum = watch("training_numInSets");

  return (
    <div className="training">
      <div className="two_buttons">
        <Link to="/trainings">
          <button className="go_to_component">Go to my Trainings</button>
        </Link>
        <Link to="/">
          <button className="go_to_mainpage">Go to my main page</button>
        </Link>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <br />
        <input
          placeholder="Добавь название упражнения ..."
          {...register("training_name", { required: true })}
        />
        <input type="number"
          placeholder="Добавь кол-во подходов ..."
          {...register("training_numOfSets", { required: true })}
        />
        <input type="number"
          placeholder="Добавь кол-во в подходе ..."
          {...register("training_numInSets", { required: true })}
        />
    
        <span style={{display:'none'}}>
        {training_totalNum = training_numOfSets * training_numInSets}
        </span>

        <input placeholder={training_numInSets === undefined ? "Количество в сумме" : training_totalNum } 
          {...register("training_totalNum")}
        />


        <input type="submit" value="Добавить" />
      </form>
    </div>
  );
};

export default Training;
