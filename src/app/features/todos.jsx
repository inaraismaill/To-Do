import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    doneTodo: (state, action) => {
      const todo = state.find((item) => item.id === action.payload);
      if (todo) {
        todo.isDone = !todo.isDone;
      }
    },
    deleteTodo: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addTodo, doneTodo, deleteTodo } = todosSlice.actions;

export default todosSlice.reducer;
