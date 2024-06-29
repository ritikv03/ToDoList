import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        text: action.payload.text,
        completed: false,
      };
      state.push(newTodo);
    },

    toggleComplete: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },

    editTodo: (state, action) => {
        const { id, text } = action.payload;
        const todo = state.find((todo) => todo.id === id);
        if (todo) {
          todo.text = text;
        }
    },

    deleteTodo: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },

  },
});

//Exporting the functions and reducer here
export const { addTodo, toggleComplete, deleteTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;