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

    training_numInSets_1=training_numInSets_1.toString();
    training_numInSets_2 = training_numInSets_2.toString();
    training_numInSets_3=training_numInSets_3.toString();

    training_numOfSets_1=training_numOfSets_1.toString();
    training_numOfSets_2=training_numOfSets_2.toString();
    training_numOfSets_3=training_numOfSets_3.toString();

    training_totalNum_1=training_totalNum_1.toString();
    training_totalNum_2=training_totalNum_2.toString();
    training_totalNum_3=training_totalNum_3.toString();


    const training = {
      training_date,
      training_name_1,
      training_name_2,
      training_name_3,
      training_numOfSets_1,
      training_numOfSets_2,
      training_numOfSets_3,

      training_numInSets_1,
      training_numInSets_2,
      training_numInSets_3,

      training_totalNum_1,
      training_totalNum_2,
      training_totalNum_3,
    };

    console.log(training)
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
  const training_name_1 = watch("training_name_1");
  const training_name_2 = watch("training_name_2");
  const training_name_3 = watch("training_name_3");
  let training_numOfSets_1 = watch("training_numOfSets_1");
  let training_numOfSets_2 = watch("training_numOfSets_2");
  let training_numOfSets_3 = watch("training_numOfSets_3");

  let training_numInSets_1 = watch("training_numInSets_1");
  let training_numInSets_2 = watch("training_numInSets_2");
  let training_numInSets_3 = watch("training_numInSets_3");
  
  let training_totalNum_1 = watch("training_numInSets_1");
  let training_totalNum_2 = watch("training_numInSets_2");
  let training_totalNum_3 = watch("training_numInSets_3");

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
        {/* #1 */}
        <input className="input_training_name"
          value="приседания" disabled="disabled"
          {...register("training_name_1", { required: true })}
        />
        <br />
        <input className="training_inputs"
          type="number"
          placeholder="подходы"
          {...register("training_numOfSets_1", { required: true })}
        />
        <input className="training_inputs"
          type="number"
          placeholder="кол-во"
          {...register("training_numInSets_1", { required: true })}
        />

        <span style={{ display: "none" }}>{(training_totalNum_1 = training_numOfSets_1 * training_numInSets_1)}</span>

        <input className="training_inputs"
          placeholder={
            training_numInSets_1 === undefined
              ? "всего"
              : training_totalNum_1
          }
          {...register("training_totalNum_1")}
        />
      <br />

      {/* #2 */}
      <br />
      <input className="input_training_name"
          value="отжимания от пола" disabled="disabled"
          {...register("training_name_2", { required: true })}
        />
        <br />
        <input className="training_inputs"
          type="number"
          placeholder="подходы"
          {...register("training_numOfSets_2", { required: true })}
        />
        <input className="training_inputs"
          type="number"
          placeholder="кол-во"
          {...register("training_numInSets_2", { required: true })}
        />


        <input className="training_inputs"
          placeholder={
            training_numInSets_2 === undefined
              ? "всего"
              : training_totalNum_2
          }
          {...register("training_totalNum_2")}
        />
      <br />
      {/* #3 */}
      <br />
      <input className="input_training_name"
          value="подтягивания на турнике" disabled="disabled"
          {...register("training_name_3", { required: true })}
        />
        <br />
        <input className="training_inputs"
          type="number"
          placeholder="подходы"
          {...register("training_numOfSets_3", { required: true })}
        />
        <input className="training_inputs"
          type="number"
          placeholder="кол-во"
          {...register("training_numInSets_3", { required: true })}
        />

        <span style={{ display: "none" }}>{(training_totalNum_3 = training_numOfSets_3 * training_numInSets_3)}</span>

        <input className="training_inputs"
          placeholder={
            training_numInSets_3 === undefined
              ? "всего"
              : training_totalNum_3
          }
          {...register("training_totalNum_3")}
        />
      <br />
        <input type="submit" value="Добавить" />
      </form>
    </div>
  );
};

export default Training;
