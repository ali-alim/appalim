import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import axios from "axios";
let today = new Date();

const API_URL = "http://appalim.herokuapp.com";
// const API_URL = "http://localhost:5000"

const Visit = () => {
  const [visitList, setVisitList] = useState([]);

  const navigate = useNavigate();

  const { register, handleSubmit, watch, reset } = useForm({ mode: "all" });

  const onSubmit = (data) => {
    const formattedDate = format(new Date(today), "dd/MM/yyyy");
    visit_date = formattedDate.toString();

    const visit = {
      visit_date,
      visit_name,
    };
    setVisitList([...visitList, visit]);

    const payload = {
      ...visit,
    };

    axios({
      // url: "/tasks",
      url: API_URL + "/visits",
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
    navigate("/visit");
  };

  let visit_date = watch("visit_date");
  const visit_name = watch("visit_name");

  return (
    <div className="visit">
      <div className="two_buttons">
        <Link to="/visits">
          <button className="go_to_component">Go to my visits</button>
        </Link>
        <Link to="/">
          <button className="go_to_mainpage">Go to my main page</button>
        </Link>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <br />
        <input label="a"
          placeholder="Добавь визит ..."
          {...register("visit_name", { required: true })}
        />
        <input type="submit" value="Добавить" />
      </form>
    </div>
  );
};

export default Visit;
