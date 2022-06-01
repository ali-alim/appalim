import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import axios from "axios";
let today = new Date();

const API_URL = "http://appalim.herokuapp.com";
// const API_URL = "http://localhost:5000"

const Finance = () => {
  const [financeList, setFinanceList] = useState([]);

  const navigate = useNavigate();

  const { register, handleSubmit, watch, reset } = useForm({ mode: "all" });

  const onSubmit = (data) => {
    const formattedDate = format(new Date(today), "dd/MM/yyyy");
    finance_date = formattedDate.toString();
    finance_name = finance_name.toString();

    const finance = {
      finance_date,
      finance_name,
    };
    setFinanceList([...financeList, finance]);

    const payload = {
      ...finance,
    };

    console.log(payload)
    axios({
      // url: "/tasks",
      url: API_URL + "/finances",
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
    navigate("/finance");
  };

  let finance_date = watch("finance_date");
  let finance_name = watch("finance_name");

  return (
    <div className="finance">
      <div className="two_buttons">
        <Link to="/finances">
          <button className="go_to_component">Go to my finances</button>
        </Link>
        <Link to="/">
          <button className="go_to_mainpage">Go to my main page</button>
        </Link>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <br />
        <input 
          placeholder="Добавь финансы ..."
          {...register("finance_name", { required: true })}
        />
        <input type="submit" value="Добавить" />
      </form>
    </div>
  );
};

export default Finance;
