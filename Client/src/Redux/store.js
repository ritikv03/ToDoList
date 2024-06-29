import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';

// using configureStore here because createStore is depricated nowadays...

const store = configureStore({
    reducer: {
    todos: todoReducer,
    },
});

//Exporting store here
export default store;