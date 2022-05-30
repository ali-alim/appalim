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
        <Link to="/task">
          <button id="set_new_task">ДОБАВИТЬ ЗАДАЧУ</button>
        </Link>
        <Link to="/tasks">
          <button id="tasks_button">ПЕРЕЙТИ К ЗАДАЧАМ</button>
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

      <div className="tasks">
        TASKS
        <Link to="/task">
          <button id="set_new_task">ДОБАВИТЬ ЗАДАЧУ</button>
        </Link>
        <Link to="/tasks">
          <button id="tasks_button">ПЕРЕЙТИ К ЗАДАЧАМ</button>
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
        TASKS
        <Link to="/task">
          <button id="set_new_task">ДОБАВИТЬ ЗАДАЧУ</button>
        </Link>
        <Link to="/tasks">
          <button id="tasks_button">ПЕРЕЙТИ К ЗАДАЧАМ</button>
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

    </div>
  );
};

export default Home;
