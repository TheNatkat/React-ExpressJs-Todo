import axios from "axios";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setAllTodos, SetUnCompletedCount } from "./store/store";
import { Todo } from "./components/Todo";
import Footer from "./components/Footer";

const App = () => {
  const allTodos = useSelector((state) => state.allTodos);
  const dispatch = useDispatch();

  useEffect(() => {
    getAllTodosApi();
  }, []);

  async function getAllTodosApi() {
    try {
      const res = await axios.get("https://api-todo-kv6c.onrender.com/todos/all");
      let count = 0;
      res.data.forEach((element) => {
        if (element.is_completed === false) {
          count++;
        }
      });
      dispatch(SetUnCompletedCount(count));
      dispatch(setAllTodos(res.data));
    } catch (error) {
      console.error("Error while Getting all Todos", error);
    }
  }

  async function postNewTodoApi(title) {
    try {
      await axios.post("https://api-todo-kv6c.onrender.com/todo", {
        title: title,
        is_completed: false,
      });
      getAllTodosApi();
    } catch (error) {
      console.error("Error while Posting a Todo", error);
    }
  }

  function handleNewTodo(e) {
    if (e.key === "Enter") {
      postNewTodoApi(e.target.value);
      e.target.value = "";
    }
  }

  return (
    <>
      <span>todos</span>
      <div className="todos">
        <div className="arrow"></div>
        <input
          type="text"
          onKeyDown={(e) => handleNewTodo(e)}
          placeholder="What need to be done?"
        />
        {allTodos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
      <Footer getAllTodosApi={getAllTodosApi} />
    </>
  );
};

export default App;
