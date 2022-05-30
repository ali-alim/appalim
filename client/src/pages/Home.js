import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>

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
        <Link to="/task">
          <button id="set_new_task">ДОБАВИТЬ ЗАДАЧУ</button>
        </Link>
        <Link to="/tasks">
          <button id="tasks_button">ПЕРЕЙТИ К ЗАДАЧАМ</button>
        </Link>
      </div>



      <div className="dreams">
        DREAMS
        <Link to="/dream">
          <button id="set_new_dream">ДОБАВИТЬ МЕЧТУ</button>
        </Link>
        <Link to="/dreams">
          <button id="dreams_button">ПЕРЕЙТИ К МЕЧТАМ</button>
        </Link>
      </div>

      <div className="visits">
        DOCTOR VISITS
        <Link to="/visit">
          <button id="set_new_visit">ДОБАВИТЬ ВИЗИТ</button>
        </Link>
        <Link to="/visits">
          <button id="visits_button">ПЕРЕЙТИ К ВИЗИТАМ</button>
        </Link>
      </div>

    </div>
  );
};

export default Home;
