import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const API_URL = "http://appalim.herokuapp.com";

const Dreams = () => {
  const [myDreams, setMyDreams] = useState([]);

  useEffect(() => {
    axios
      // .get("/tasks")
      .get(API_URL + "/dreams")

      .then((response) => {
        const data = response.data;
        setMyDreams(data);
      })
      .catch(() => {
        alert("Error retrieving data");
      });
  }, [myDreams]);

  const deleteDream = (id) => {
    axios.delete(`${API_URL}/dreams/${id}`, id);
    // axios.delete(`${API_URL}/${id}`, id)
  };

  return (
    <div className="dreams_page">
      <Link to="/">
        <button className="go_to_mainpage">Go to my main page</button>
      </Link>
      {myDreams.map((mydream, index) => (
        <li key={index}>
          {mydream.dream_date} - {mydream.dream_name} -{" "}
          <button
            id="delete_dream_button"
            onClick={() => deleteDream(mydream._id)}
          >
            delete
          </button>
        </li>
      ))}
      <br />
      <Link to="/dream">
        <button className="go_to_component">create new dream</button>
      </Link>
    </div>
  );
};

export default Dreams;
