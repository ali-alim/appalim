import React, {useState,useEffect} from 'react'
import {Link} from "react-router-dom"
import axios from 'axios'

const API_URL = "http://appalim.herokuapp.com"


const Trainings = () => {

  const [mytrainings, setMyTrainings] = useState([])

  useEffect(() => {
    axios
      // .get("/tasks")
      .get(API_URL + "/trainings")

      .then((response) => {
        const data = response.data;
        setMyTrainings(data);
      })
      .catch(() => {
        alert("Error retrieving data");
      });
  }, [mytrainings]);

  const deleteTraining = (id) => {
    axios.delete(`${API_URL}/trainings/${id}`, id)
    // axios.delete(`${API_URL}/${id}`, id)
  }

  return (
    <div className='trainings_page'>
            <Link to="/">
        <button className="go_to_mainpage">Go to my main page</button>
      </Link>
      <br />
      {mytrainings.map((mytraining,index) => (
        <li key={index}>
          <center>{mytraining.training_date} </center>
          {mytraining.training_name_1} - {mytraining.training_totalNum_1} раз  <br />
          {mytraining.training_name_2} - {mytraining.training_totalNum_2} раз <br />
          {mytraining.training_name_3} - {mytraining.training_totalNum_3} раз  <br />
          <button id="delete_training_button" onClick={() => deleteTraining(mytraining._id)}>
            delete
            </button>
            </li>
      ))}
    <Link to="/training">
    <button className="go_to_component">create new training</button>
    </Link>
    </div>
  )
}

export default Trainings
