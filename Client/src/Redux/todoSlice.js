import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({

    // Naming it "todos"
    name: "todos",

    // Initial state will be empty
    initialState: [],

    // Making reducers now
    reducers: {
    
    // The first reducer is for adding the tasks...

    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        text: action.payload.text,
        completed: false,
      };
      state.push(newTodo);
    },

    // This reducer will handle the toggle complete section 

    toggleComplete: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },

    // This reducer is for edit functionality

    editTodo: (state, action) => {
        const { id, text } = action.payload;
        const todo = state.find((todo) => todo.id === id);
        if (todo) {
          todo.text = text;
        }
    },

    // This reducer is for deletion of the task / ToDo list

    deleteTodo: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },

  },
});

//Exporting reducers here
export const { addTodo, toggleComplete, deleteTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;