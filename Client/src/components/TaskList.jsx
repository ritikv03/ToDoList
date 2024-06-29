import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleComplete, deleteTodo, editTodo } from "../Redux/todoSlice";

const TaskList = () => {

  //Selector is required for fetching the data from the redux store
  const todos = useSelector((state) => state.todos);

  //Using dispatch here to update the tasks
  const dispatch = useDispatch();

  //2 useStates are defined here so that the management of edit task can be done
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  //This will handle the "mark completed" section
  const handleToggleComplete = (id) => {
    dispatch(toggleComplete(id));
  };

  //Delete method
  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  //Edit method
  const handleEditTodo = (id, text) => {
    setEditId(id);
    setEditText(text);
  };

  //To save the edit task, this is implemented
  const handleSaveEdit = (id) => {
    dispatch(editTodo({ id, text: editText }));
    setEditId(null);
    setEditText("");
  };

  //As there are going to be more than 1 task, we are implementing todo.map
  return (
    <div className="task-content">
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              listStyle : "none",
              margin: "10px",
              marginBottom: "10px",
              padding: "10px",
            }}>
            {editId === todo.id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button className="btn btn-outline-success btn-sm" onClick={() => handleSaveEdit(todo.id)}>Save</button>
                <button className="btn btn-outline-danger btn-sm" onClick={() => setEditId(null)}>Cancel</button>
              </>
            ) : (
              <>
                {todo.text}
                <button className="btn btn-outline-success btn-sm" onClick={() => handleToggleComplete(todo.id)}>
                  {todo.completed ? "Mark Incomplete" : "Mark Complete"}
                </button>
                <button className="btn btn-outline-warning btn-sm" onClick={() => handleEditTodo(todo.id, todo.text)}>Edit</button>
                <button className="btn btn-outline-danger btn-sm" onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

//Exporting the Tasklist here
export default TaskList;
