import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">

      <div className="questionnaire">
          QUESTIONNAIRE
        <Link to="/form">
          <button id="new_user_button">НАЧАТЬ ВОПРОСНИК</button>
        </Link>
        <Link to="/answers">
          <button id="show_answers_button">ПОКАЗАТЬ ОТВЕТЫ</button>
        </Link>
      </div>

      <div className="tasks">
        TASKS
        <Link to="/tasks">
          <button id="tasks_button">Go to my tasks</button>
        </Link>
      </div>

    </div>
  );
};

export default Home;
