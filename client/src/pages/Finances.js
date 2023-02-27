import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Finances = () => {
  const [myFinances, setMyFinances] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
      if(dataLoaded === false){
        axios
      .get(process.env.REACT_APP_API_URL + "/finances")
      .then((response) => {
        const data = response.data;
        setMyFinances(data);
        setDataLoaded(true);
      })
      .catch(() => {
        alert("Error retrieving data");
      });
      }
  }, [myFinances, dataLoaded]);

  const deleteFinance = (id) => {
    axios.delete(process.env.REACT_APP_API_URL + `/finances/${id}`, id);
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
