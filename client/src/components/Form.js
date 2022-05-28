import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import axios from "axios";
let today = new Date();

const Form = ({ usersInfo, setUsersInfo }) => {
  const navigate = useNavigate();

  const { register, handleSubmit, watch } = useForm({ mode: "all" });

  const onSubmit = (data) => {
    const formattedDate = format(new Date(today), "dd/MM/yyyy");
    дата = formattedDate.toString();

    const newList = {
      дата,
      новое,
      достижение,
      торможение,
      откладывание,
      цель,
      благодарность,
      впечатление,
      помехи,
      цели,
      помощь,
      возможности,
      здоровье,
      шаги,
      страхи,
      решения,
      встречи,
      навыки,
      бесполезное,
      важное,
    };
    setUsersInfo([...usersInfo, newList]);

    const payload = {
      ...newList,
    };

    axios({
      url: "http://appalim.herokuapp.com/answers/",
      method: "POST",
      data: payload,
    })
      .then(() => {
        console.log("Data has been sent to the server");
      })
      .catch(() => {
        console.log("Internal server error");
      });

    navigate("/");
  };

  let дата = watch("дата");
  const новое = watch("новое");
  const достижение = watch("достижение");
  const торможение = watch("торможение");
  const откладывание = watch("откладывание");
  const цель = watch("цель");
  const благодарность = watch("благодарность");
  const впечатление = watch("впечатление");
  const помехи = watch("помехи");
  const цели = watch("цели");
  const помощь = watch("помощь");
  const возможности = watch("возможности");
  const здоровье = watch("здоровье");
  const шаги = watch("шаги");
  const страхи = watch("страхи");
  const решения = watch("решения");
  const встречи = watch("встречи");
  const навыки = watch("навыки");
  const назад = watch("назад");
  const бесполезное = watch("бесполезное");
  const важное = watch("важное");

  const questions = [
    "Что нового ты узнал и что из этого внедрил?",
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

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>ВОПРОСЫ</h1>

        <input type="submit" value="Сохранить" />
        <br />

        {бесполезное && (
          <textarea
            placeholder={questions[18]}
            {...register("важное", { required: true })}
          />
        )}

        {навыки && (
          <textarea
            placeholder={questions[17]}
            {...register("бесполезное", { required: true })}
          />
        )}

        {встречи && (
          <textarea
            placeholder={questions[16]}
            {...register("навыки", { required: true })}
          />
        )}

        {решения && (
          <textarea
            placeholder={questions[15]}
            {...register("встречи", { required: true })}
          />
        )}

        {страхи && (
          <textarea
            placeholder={questions[14]}
            {...register("решения", { required: true })}
          />
        )}
        {шаги && (
          <textarea
            placeholder={questions[13]}
            {...register("страхи", { required: true })}
          />
        )}

        {здоровье && (
          <textarea
            placeholder={questions[12]}
            {...register("шаги", { required: true })}
          />
        )}

        {возможности && (
          <textarea
            placeholder={questions[11]}
            {...register("здоровье", { required: true })}
          />
        )}

        {помощь && (
          <textarea
            placeholder={questions[10]}
            {...register("возможности", { required: true })}
          />
        )}

        {цели && (
          <textarea
            placeholder={questions[9]}
            {...register("помощь", { required: true })}
          />
        )}
        {помехи && (
          <textarea
            placeholder={questions[8]}
            {...register("цели", { required: true })}
          />
        )}
        {впечатление && (
          <textarea
            placeholder={questions[7]}
            {...register("помехи", { required: true })}
          />
        )}
        {благодарность && (
          <textarea
            placeholder={questions[6]}
            {...register("впечатление", { required: true })}
          />
        )}
        {цель && (
          <textarea
            placeholder={questions[5]}
            {...register("благодарность", { required: true })}
          />
        )}
        {откладывание && (
          <textarea
            placeholder={questions[4]}
            {...register("цель", { required: true })}
          />
        )}
        {торможение && (
          <textarea
            placeholder={questions[3]}
            {...register("откладывание", { required: true })}
          />
        )}
        {достижение && (
          <textarea
            placeholder={questions[2]}
            {...register("торможение", { required: true })}
          />
        )}

        {новое && (
          <textarea
            placeholder={questions[1]}
            {...register("достижение", { required: true })}
          />
        )}

        <textarea placeholder={questions[0]} {...register("новое")} 
        {...register("новое", { required: true })}
        />
        
        <br />
      </form>
    </>
  );
};

export default Form;
