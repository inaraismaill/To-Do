import style from "./todo.module.css";
import { deleteTodo, doneTodo } from "../../app/features/todos";
import { useDispatch } from "react-redux";

const Todo = ({ item, index }) => {
  const dispatch = useDispatch();

  return (
    <div className={style.todo}>
      <div className={style.text} onClick={() => dispatch(doneTodo(item.id))}>
        <span>{index}. </span>
        <h3 className={item.isDone ? style.done : ""}>{item.task}</h3>
      </div>
      <button className={style.button} onClick={() => dispatch(deleteTodo(item.id))}>Delete todo</button>
    </div>
  );
};

export default Todo;
