import React, { useState } from 'react'
import ListItem from './ListItem'

function TodoList() {
    const [newtask, setnewtask] = useState("");//this for the input field
    const [tasks, setTasks] = useState(['hello', 'joy']);//this array store the list of tasks

    const handleoninputchange = (e) => {
        setnewtask(e.target.value);
    }


    const handleaddtask = () => {
        if (newtask.trim() !== "") { //check if the input is empty
            setTasks([...tasks, newtask]);
            setnewtask(""); // Clearing the input field
        }
        else {
            console.log("enter the task")
        }
    }

    return (
        <div className='todolist'>
            <div className="input-area">
                <input className='input-field' placeholder='Add task' onChange={handleoninputchange} value={newtask}  // Binding value to state
                />
                <button className='add-btn btn' onClick={handleaddtask}>Add</button>
            </div>
            <div className="list-area">
                <div className="listitem">
                    <ListItem tasks={tasks} setTasks={setTasks} />
                </div>
            </div>
        </div>
    )
}

export default TodoList