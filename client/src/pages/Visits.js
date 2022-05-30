import React, {useState,useEffect} from 'react'
import {Link} from "react-router-dom"
import axios from 'axios'

const API_URL = "http://appalim.herokuapp.com"


const Visits = () => {

  const [myVisits, setMyVisits] = useState([])

  useEffect(() => {
    axios
      // .get("/tasks")
      .get(API_URL + "/visits")

      .then((response) => {
        const data = response.data;
        setMyVisits(data);
      })
      .catch(() => {
        alert("Error retrieving data");
      });
  }, [myVisits]);

  const deleteVisit = (id) => {
    axios.delete(`${API_URL}/visits/${id}`, id)
    // axios.delete(`${API_URL}/${id}`, id)
  }

  return (
    <div className='visits_page'>
      {myVisits.map((myvisit,index) => (
        <li key={index}>{myvisit.visit_date} - {myvisit.visit_name} - <button id="delete_visit_button" onClick={() => deleteVisit(myvisit._id)}>delete</button></li>
      ))}
    <Link to="/visit">
    <button className="go_to_component">create new visit</button>
    </Link>
    </div>
  )
}

export default Visits
