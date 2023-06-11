import { configureStore, createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    allTodos: [],
    unCompletedCount: 0,
  },
  reducers: {
    setAllTodos(state, action) {
      state.allTodos = action.payload;
    },
    SetUnCompletedCount(state, action) {
      state.unCompletedCount = action.payload;
    },
    updateTodoCompletion(state, action) {
      const { todoId, isCompleted } = action.payload;
      const todo = state.allTodos.find((todo) => todo.id === todoId);
      if (todo) {
        todo.is_completed = isCompleted;
      }
    },
  },
});

export const { setAllTodos, SetUnCompletedCount, updateTodoCompletion } =
  todosSlice.actions;

const store = configureStore({
  reducer: todosSlice.reducer,
});

export default store;
