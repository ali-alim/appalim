import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Visits = () => {
  const [myVisits, setMyVisits] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
      if(dataLoaded === false){
        axios
      .get(process.env.REACT_APP_API_URL + "visits")
      .then((response) => {
        const data = response.data;
        setMyVisits(data);
        setDataLoaded(true);
      })
      .catch(() => {
        alert("Error retrieving data");
      });
      }
  }, [myVisits, dataLoaded]);

  const deleteVisit = (id) => {
    axios.delete(process.env.REACT_APP_API_URL +`visits/${id}`, id);
  };

  return (
    <div className="visits_page">
      <Link to="/">
        <button className="go_to_mainpage">Go to my main page</button>
      </Link>
      <br />
      {myVisits.map((myvisit, index) => (
        <li key={index}>
          {myvisit.visit_date} - {myvisit.visit_name} -{" "}
          <button
            id="delete_visit_button"
            onClick={() => deleteVisit(myvisit._id)}
          >
            delete
          </button>
        </li>
      ))}
      <Link to="/visit">
        <button className="go_to_component">create new visit</button>
      </Link>
    </div>
  );
};

export default Visits;
