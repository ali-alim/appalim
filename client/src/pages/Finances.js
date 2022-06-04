import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const API_URL = "http://appalim.herokuapp.com";

const Finances = () => {
  const [myFinances, setMyFinances] = useState([]);

  useEffect(() => {
    axios
      // .get("/tasks")
      .get(API_URL + "/finances")

      .then((response) => {
        const data = response.data;
        setMyFinances(data);
      })
      .catch(() => {
        alert("Error retrieving data");
      });
  }, [myFinances]);

  const deleteFinance = (id) => {
    axios.delete(`${API_URL}/finances/${id}`, id);
    // axios.delete(`${API_URL}/${id}`, id)
  };

  return (
    <div className="finances_page">
      <Link to="/">
        <button className="go_to_mainpage">Go to my main page</button>
      </Link>
      <br />
      {myFinances.map((myfinance, index) => (
        <li key={index}>
          Month name: {myfinance.finance_month} 
          <br />
          {myfinance.finance_date} - {myfinance.finance_name} -{" "}
          <button
            id="delete_finance_button"
            onClick={() => deleteFinance(myfinance._id)}
          >
            delete
          </button>
        </li>
      ))}{" "}
      <Link to="/finance">
        <button className="go_to_component">create new finance</button>
      </Link>
    </div>
  );
};

export default Finances;
