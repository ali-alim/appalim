import React, {useState,useEffect} from 'react'
import {Link} from "react-router-dom"
import axios from 'axios'

const Trainings = () => {

  const [mytrainings, setMyTrainings] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);


  useEffect(() => {
    if(dataLoaded === false){
      axios
      .get(process.env.REACT_APP_API_URL + "trainings")
      .then((response) => {
        const data = response.data;
        setMyTrainings(data);
        setDataLoaded(true);
      })
      .catch(() => {
        alert("Error retrieving data");
      });
    }
  }, [mytrainings, dataLoaded]);

  const deleteTraining = (id) => {
    axios.delete(process.env.REACT_APP_API_URL + `trainings/${id}`, id)
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
