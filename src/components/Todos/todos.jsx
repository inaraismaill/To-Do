import { useState } from "react";
import Todo from "../Todo/todo";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../app/features/todos";
import style from "./todos.module.css"

const Todos = () => {
  const allTodo = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [todo, setTodo] = useState("");

  const addtodo = (e) => {
    e.preventDefault();
    if (todo.trim() === "") return;
    dispatch(
      addTodo({
        id: Date.now(),
        task: todo,
        isDone: false,
      })
    );
    setTodo("")
  };

  return (
    <div className={style.todos}>
      <div className={style.container}>
        <div className={style.top}>
          <h1>Todo List</h1>
          <form onSubmit={addtodo}>
            <input
              type="text"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              placeholder="Add new todo"
            />
            <button className={style.button} type="submit">Add</button>
          </form>
        </div>
        <div className={style.bottom}>
          {allTodo.length > 0 &&
            allTodo?.map((item, index) => (
              <Todo
                key={index}
                index={index+1}
                item={item}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Todos;
