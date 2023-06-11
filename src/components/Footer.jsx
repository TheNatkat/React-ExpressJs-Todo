import axios from "axios";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setAllTodos } from "../store/store";

const Footer = ({ getAllTodosApi }) => {
  const unCompletedCount = useSelector((state) => state.unCompletedCount);
  const dispatch = useDispatch();

  async function getOnlyUnCompletedApi() {
    try {
      const res = await axios.get("https://api-todo-kv6c.onrender.com/todos/false");
      dispatch(setAllTodos(res.data));
    } catch (error) {
      console.error("Error While Getting Uncompleted all Todos", error);
    }
  }

  async function getOnlyCompletedApi() {
    try {
      const res = await axios.get("https://api-todo-kv6c.onrender.com/todos/true");
      dispatch(setAllTodos(res.data));
    } catch (error) {
      console.error("Error While Getting All Completed Todos", error);
    }
  }

  async function deleteClearCompletedApi() {
    try {
      await axios.delete("https://api-todo-kv6c.onrender.com/todos/completed");
      getAllTodosApi();
    } catch (error) {
      console.error("Error While Deleteing Completed Todos", error);
    }
  }
  return (
    <>
      <div className="all-btns">
        <h5>{unCompletedCount} items left</h5>
        <div className="mid-btn">
          <h6 onClick={getAllTodosApi}>All</h6>
          <h6 onClick={getOnlyUnCompletedApi}> Active</h6>
          <h6 onClick={getOnlyCompletedApi}>Completed</h6>
        </div>
        <h4 onClick={deleteClearCompletedApi}>Clear Completed</h4>
      </div>
      <div id="deep-1"></div>
      <div id="deep-2"></div>
      <div id="deep-3"></div>
    </>
  );
};

export default Footer;
