import axios from "axios";
import React, { useEffect, useState } from "react";

const Answers = () => {
  const [answers, setAnswers] = useState([]);

  const questions = [
    "Как тебя зовут?",
    "Твое самое большое достижение за неделю?",
    "Где ты тормозил, тратил время впустую, бездействовал?",
    "Что из того, что ты откладываешь нужно сделать на следующей неделе?",
    "Какую цель ты хочешь достигнуть на следующей неделе и что нужно для этого сделать?",
    "Есть ли кто-то, кого я хочу поблагодарить?",
    "Самое сильное впечатление на этой неделе?",
    "Что мешает мне двигаться вперед и как убрать эти помехи?",
    "Твои главные 3 цели на 3 года?",
    "Есть ли кто-то, кому я могу помочь?",
    "Какие возможности есть в твоем распоряжении?",
    "Что ты сделал для поддержания себя в форме и отличного здоровья?",
    "Какие шаги продвинут тебя вперед к целям и что ты можешь сделать уже сейчас?",
    "Чего ты боишься - твои страхи - и что сделать для их уменьшения?",
    "Решение какого одного дела продвинет тебя максимально вперед?",
    "Кто может тебе помочь - с кем ты хочешь встретиться?",
    "Развитие какого одного навыка продвинет тебя максимально вперед?",
    "Что из того что ты делаешь тянет тебя назад?",
    "Если бы следующая неделя была бы последней в твоей жизни, какое бы одно дело ты сделал уже завтра?",
  ];
  useEffect(() => {
    axios
      .get("http://appalim.herokuapp.com/answers")

      .then((response) => {
        const data = response.data;
        setAnswers(data);
      })
      .catch(() => {
        alert("Error retrieving data");
      });
  }, []);

  // const [toggle, setToggle] = useState(true);
  const [username, setUsername] = useState("");

  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="answers">
      <h1>ТВОИ ОТВЕТЫ</h1>

      {!isClicked && (
        <input
          type="text"
          placeholder="what is your name?"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
        />
      )}
      <button id="new_user_button" onClick={() => setIsClicked(!isClicked)}>
        Name
      </button>

      {/* {username &&
        answers
          .filter((answer) => answer.новое.includes(username))
          .map((filteredAnswer, index) => (
            <div key={index}>
              <li>{filteredAnswer.дата}</li>
              <li>{filteredAnswer.новое}</li>
              <li>{filteredAnswer.достижение}</li>
              <li>{filteredAnswer.торможение}</li>
              <li>{filteredAnswer.откладывание}</li>
              <li>{filteredAnswer.цель}</li>
              <li>{filteredAnswer.благодарность}</li>
              <li>{filteredAnswer.впечатление}</li>
              <li>{filteredAnswer.помехи}</li>
              <li>{filteredAnswer.цели}</li>
              <li>{filteredAnswer.помощь}</li>
              <li>{filteredAnswer.возможности}</li>
              <li>{filteredAnswer.здоровье}</li>
              <li>{filteredAnswer.шаги}</li>
              <li>{filteredAnswer.страхи}</li>
              <li>{filteredAnswer.решения}</li>
              <li>{filteredAnswer.встречи}</li>
              <li>{filteredAnswer.навыки}</li>
              <li>{filteredAnswer.бесполезное}</li>
              <li>{filteredAnswer.важное}</li>
            </div>
))} */}
              
      {answers.filter((answer) => answer.новое.includes('Lika')) ?   
        
         (
          <>
            <h2>{questions[0]}</h2>
            {answers.map((answer, index) => (
              <p>
                {answer.дата} --- {answer.новое}
              </p>
            ))}
            <hr />

            <h2>{questions[1]}</h2>
            {answers.map((answer, index) => (
              <p>
                {answer.дата} --- {answer.достижение}
              </p>
            ))}

            <hr />

            <h2>{questions[2]}</h2>
            {answers.map((answer, index) => (
              <p>
                {answer.дата} --- {answer.торможение}
              </p>
            ))}
            <hr />
          </>
        ) : (
          <div>Fucked off </div>
        )
        }
    </div>
  );
};

export default Answers;



// ADD TO ANSWERS ARRAY
{/* <h2>{questions[3]}</h2>
{answers.map((answer, index) => (
  <p>
    {answer.дата} --- {answer.откладывание}
  </p>
))}
<hr />

<h2>{questions[4]}</h2>
{answers.map((answer, index) => (
  <p>
    {answer.дата} --- {answer.цель}
  </p>
))}
<hr />

<h2>{questions[5]}</h2>
{answers.map((answer, index) => (
  <p>
    {answer.дата} --- {answer.благодарность}
  </p>
))}
<hr />

<h2>{questions[6]}</h2>
{answers.map((answer, index) => (
  <p>
    {answer.дата} --- {answer.впечатление}
  </p>
))}
<hr />

<h2>{questions[7]}</h2>
{answers.map((answer, index) => (
  <p>
    {answer.дата} --- {answer.помехи}
  </p>
))}
<hr />

<h2>{questions[8]}</h2>
{answers.map((answer, index) => (
  <p>
    {answer.дата} --- {answer.цели}
  </p>
))}
<hr />

<h2>{questions[9]}</h2>
{answers.map((answer, index) => (
  <p>
    {answer.дата} --- {answer.помощь}
  </p>
))}
<hr />

<h2>{questions[10]}</h2>
{answers.map((answer, index) => (
  <p>
    {answer.дата} --- {answer.возможности}
  </p>
))}
<hr />

<h2>{questions[11]}</h2>
{answers.map((answer, index) => (
  <p>
    {answer.дата} --- {answer.здоровье}
  </p>
))}
<hr />

<h2>{questions[12]}</h2>
{answers.map((answer, index) => (
  <p>
    {answer.дата} --- {answer.шаги}
  </p>
))}
<hr />

<h2>{questions[13]}</h2>
{answers.map((answer, index) => (
  <p>
    {answer.дата} --- {answer.страхи}
  </p>
))}
<hr />

<h2>{questions[14]}</h2>
{answers.map((answer, index) => (
  <p>
    {answer.дата} --- {answer.решения}
  </p>
))}
<hr />

<h2>{questions[15]}</h2>
{answers.map((answer, index) => (
  <p>
    {answer.дата} --- {answer.встречи}
  </p>
))}
<hr />

<h2>{questions[16]}</h2>
{answers.map((answer, index) => (
  <p>
    {answer.дата} --- {answer.навыки}
  </p>
))}
<hr />

<h2>{questions[17]}</h2>
{answers.map((answer, index) => (
  <p>
    {answer.дата} --- {answer.бесполезное}
  </p>
))}
<hr />

<h2>{questions[18]}</h2>
{answers.map((answer, index) => (
  <p>
    {answer.дата} --- {answer.важное}
  </p>
))}
<hr /> */}