import React, { useState } from 'react'
import ListItem from './ListItem'

function TodoList() {
    const [task, setnewtask] = useState("");
    const [tasks, setTasks] = useState(["write", "trade", "run", "code", "eat"])
    const handleoninputchange = (e) => {
        setnewtask(e.target.value);
    }

    const handleaddtask = () => {
        setTasks(...tasks, task)
        setnewtask("");

    }

    return (
        <div className='todolist'>
            <div className="input-area">
                <input className='input-field' placeholder='Add task' onChange={handleoninputchange} />
                <button className='add-btn btn' onClick={handleaddtask}>Add</button>
            </div>
            <div className="list-area">
                <div className="listitem">
                    <ListItem tasks={tasks} />
                </div>
            </div>
        </div>
    )
}

export default TodoList