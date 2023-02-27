import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import axios from "axios";
let today = new Date();

const Dream = () => {
  const [dreamList, setDreamList] = useState([]);

  const navigate = useNavigate();

  const { register, handleSubmit, watch, reset } = useForm({ mode: "all" });

  const onSubmit = (data) => {
    const formattedDate = format(new Date(today), "dd/MM/yyyy");
    dream_date = formattedDate.toString();

    const dream = {
      dream_date,
      dream_name,
    };
    setDreamList([...dreamList, dream]);

    const payload = {
      ...dream,
    };

    axios({
      url: process.env.REACT_APP_API_URL + "/dreams",
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
    navigate("/dream");
  };

  let dream_date = watch("dream_date");
  const dream_name = watch("dream_name");

  return (
    <div className="dream">
      <div className="two_buttons">
        <Link to="/dreams">
          <button className="go_to_component">Go to my dreams</button>
        </Link>
        <Link to="/">
          <button className="go_to_mainpage">Go to my main page</button>
        </Link>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <br />
        <textarea
          placeholder="Запиши сюда мечту ..."
          {...register("dream_name", { required: true })}
        />
        <input type="submit" value="Добавить" />
      </form>
    </div>
  );
};

export default Dream;
