import React, { useState } from "react";
import {  useDispatch } from "react-redux";
import { addTodo } from "../Redux/todoSlice";

const TaskInput = () => {

    //Using the useState hook to manage the input field, by doing this, we can see that whatever we type on the field is clearly visible to the user
    const [enterText,setEnterText] = useState("")

    //Initializing the dispatch method
    const dispatch = useDispatch();

    //hander function to set the imput field value
    function handleTextChange(event){
        setEnterText(event.target.value);
    }

    //As the function name suggests, it handles the adding of the data
    const handleAddTodo = () => {
        if (enterText) {
            dispatch(addTodo({
                text: enterText
            }));
            setEnterText("");
        }
      };

    return (
        //Using the Bootstrap Grid System here to contain the large input field 
        <div className="container mt-3">
        <div className="row justify-content-center">
            <div className="col-md-6">
                <div className='input-group input-group-lg'>
                    <input
                        className="form-control custom-box-shadow"
                        id="inputGroup-sizing-lg"
                        type='text'
                        placeholder='Enter Text Here'
                        value={enterText}
                        onChange={handleTextChange}
                    />
                    <button 
                    className='btn btn-primary btn-sm'
                    onClick={handleAddTodo}
                    >
                     ADD 
                    </button>
                </div>
            </div>
        </div>
    </div>
    )
}

//Exporting the TaskInput here
export default TaskInput
