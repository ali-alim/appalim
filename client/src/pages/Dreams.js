import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Dreams = () => {
  const [myDreams, setMyDreams] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    if(dataLoaded === false){
      axios
      .get(process.env.REACT_APP_API_URL + "dreams")
      .then((response) => {
        const data = response.data;
        setMyDreams(data);
        setDataLoaded(true);
      })
      .catch(() => {
        alert("Error retrieving data");
      });
    }
  }, [myDreams, dataLoaded]);

  const deleteDream = (id) => {
    axios.delete(process.env.REACT_APP_API_URL + `dreams/${id}`, id);
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
