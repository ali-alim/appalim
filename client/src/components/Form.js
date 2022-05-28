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

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>ВОПРОСЫ</h1>

        <input type="submit" value="Сохранить" />
        <br />

        {бесполезное && (
          <input
            placeholder="Если бы следующая неделя была бы последней в твоей жизни, какое бы одно дело ты сделал уже завтра?"
            {...register("важное", { required: true })}
          />
        )}

        {назад && (
          <input
            placeholder="Что из того что ты делаешь тянет тебя назад?"
            {...register("бесполезное", { required: true })}
          />
        )}

        {встречи && (
          <input
            placeholder="Развитие какого одного навыка продвинет тебя максимально вперед?"
            {...register("навыки", { required: true })}
          />
        )}

        {решения && (
          <input
            placeholder="Кто может тебе помочь - с кем ты хочешь встретиться?"
            {...register("встречи", { required: true })}
          />
        )}

        {страхи && (
          <input
            placeholder="Решение какого одного дела продвинет тебя максимально вперед?"
            {...register("решения", { required: true })}
          />
        )}
        {шаги && (
          <input
            placeholder="Чего ты боишься - твои страхи - и что сделать для их уменьшения?"
            {...register("страхи", { required: true })}
          />
        )}

        {здоровье && (
          <input
            placeholder="Какие шаги продвинут тебя вперед к целям и что ты можешь сделать уже сейчас?"
            {...register("шаги", { required: true })}
          />
        )}

        {возможности && (
          <input
            placeholder="Что ты сделал для поддержания себя в форме и отличного здоровья?"
            {...register("здоровье", { required: true })}
          />
        )}

        {помощь && (
          <input
            placeholder="Какие возможности есть в твоем распоряжении?"
            {...register("возможности", { required: true })}
          />
        )}

        {цели && (
          <input
            placeholder="Есть ли кто-то, кому я могу помочь?"
            {...register("помощь", { required: true })}
          />
        )}
        {помехи && (
          <input
            placeholder="Твои главные 3 цели на 3 года?"
            {...register("цели", { required: true })}
          />
        )}
        {впечатление && (
          <input
            placeholder="Что мешает мне двигаться вперед и как убрать эти помехи?"
            {...register("помехи", { required: true })}
          />
        )}
        {благодарность && (
          <input
            placeholder="Самое сильное впечатление на этой неделе?"
            {...register("впечатление", { required: true })}
          />
        )}
        {цель && (
          <input
            placeholder="Есть ли кто-то, кого я хочу поблагодарить?"
            {...register("благодарность", { required: true })}
          />
        )}
        {откладывание && (
          <input
            placeholder="Какую цель ты хочешь достигнуть на следующей неделе и что нужно для этого сделать?"
            {...register("цель", { required: true })}
          />
        )}
        {торможение && (
          <input
            placeholder="Что из того, что ты откладываешь нужно сделать на следующей неделе?"
            {...register("откладывание", { required: true })}
          />
        )}
        {достижение && (
          <input
            placeholder="Где ты тормозил, тратил время впустую, бездействовал?"
            {...register("торможение", { required: true })}
          />
        )}

        {новое && (
          <input
            placeholder="Твое самое большое достижение за неделю?"
            {...register("достижение", { required: true })}
          />
        )}

        <input
          placeholder="Что нового ты узнал и что из этого внедрил?"
          {...register("новое")}
        />

        <br />
      </form>
    </>
  );
};

export default Form;

/* <input placeholder="გვარი" {...register("გვარი", { required: true })} />
        {errors.გვარი && <strong>&nbsp; * სავალდებულო ველი</strong>}
        {USER_EXISTS === false ? (
          <div>
            <input
              placeholder="პირადი ნომერი"
              {...register(
                "პირადი_ნომერი",

                {
                  required: true,
                  minLength: 11,
                  onChange: (e) => userExists(e),
                }
              )}
            />
            {errors.პირადი_ნომერი && <strong>მინიმუმ 11 სიმბოლო</strong>}
          </div>
        ) : (
          <div>
            <input
              placeholder="პირადი ნომერი"
              {...register(
                "პირადი_ნომერი",
                {
                  onChange: (e) => userExists(e),
                },
                { required: true, minLength: 11 }
              )}
            />
            <span>
              <strong>
                &nbsp;* მომხმარებელი ასეთი პირადი ნომრით უკვე დამატებულია
              </strong>{" "}
            </span>
          </div>
        )}
        <select {...register("სქესი", { required: true })}>
          <option value="">სქესი</option>
          <option value="მამრობითი">მამრობითი</option>
          <option value="მდედრობითი">მდედრობითი</option>
        </select>
        {errors.სქესი && <strong>&nbsp; * სავალდებულო ველი</strong>}
        <div className="date_field">
         
    <Controller
        control={control}
        name="დაბადების_თარიღი"
        render={({ field }) => (
          <DatePicker
          maxDate={today}
            placeholderText="Select date"
            onChange={(date) => field.onChange(date)}
            selected={field.value}
          />
        )}
      />

          {errors.დაბადების_თარიღი && (
            <strong>&nbsp; * სავალდებულო ველი</strong>
          )}
        </div>
        <input
          placeholder="დაბადების_ადგილი"
          {...register("დაბადების_ადგილი", { required: true })}
        />
        {errors.დაბადების_ადგილი && <strong>&nbsp; * სავალდებულო ველი</strong>}{" "}
        <input
          placeholder="მისამართი"
          {...register("მისამართი", { required: true })}
        />
        {errors.მისამართი && <strong>&nbsp; * სავალდებულო ველი</strong>}
        <br />*/
