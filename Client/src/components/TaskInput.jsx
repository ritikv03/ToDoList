import React from 'react'
import { useState } from 'react'


const TaskInput = () => {

    //Using the useState hook to manage the input field, by doing this, we can see that whatever we type on the field is clearly visible to the user
    const [enterText,setEnterText] = useState("")



    //hander function to set the imput field value
    function handleTextChange(event){
        setEnterText(event.target.value);
    }

    //hander function for add button so that the dispatch function is activated whenever the button is clicked
    function handleAddButton(event){

    }

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
                    onClick={handleAddButton}
                    >
                     ADD 
                    </button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default TaskInput
