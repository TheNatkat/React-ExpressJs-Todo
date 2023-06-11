import axios from "axios";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { SetUnCompletedCount, updateTodoCompletion } from "../store/store";

export const Todo = ({ todo }) => {
  const unCompletedCount = useSelector((state) => state.unCompletedCount);
  const dispatch = useDispatch();

  async function putTodoApi(todo) {
    try {
      const res = await axios.put(`https://api-todo-kv6c.onrender.com/todo/${todo.id}`, {
        title: todo.title,
        is_completed: !todo.is_completed,
      });

      dispatch(
        SetUnCompletedCount(
          !todo.is_completed ? unCompletedCount - 1 : unCompletedCount + 1
        )
      );
      dispatch(
        updateTodoCompletion({
          todoId: todo.id,
          isCompleted: !todo.is_completed,
        })
      );
    } catch (error) {
      console.error("Error while Posting a Todo", error);
    }
  }
  return (
    <div className="outerBox">
      <div className="checkbox-wrapper-11">
        <input
          defaultChecked={todo.is_completed}
          id={todo.id}
          onClick={() => putTodoApi(todo)}
          type="checkbox"
          name="r"
          value="2"
        />
        <label htmlFor={todo.id}>{todo.title}</label>
      </div>
    </div>
  );
};
