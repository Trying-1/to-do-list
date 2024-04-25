import React from 'react'
import { useState } from 'react';

function ListItem(props) {
    const [tasks, setTasks] = useState()
    const edittask = () => {
        
    }
    const deletetask = () => {
        console.log("deleted");
    }
    const donetask = () => {
        console.log("done");
    }
    
    return (
        <div>

            <div className="list">{props.tasks.map((item) => {
                return <div className='list-item' key={item}>
                    <h3 className='task-title' >{item}</h3>
                    <button className='edit-btn btn' onClick={edittask}>Edit</button>
                    <button className='delete-btn btn' onClick={deletetask}>Delete</button>
                    <button className='done-btn btn' onClick={donetask}>Done</button>
                </div>
            })}
            </div>

        </div>
    )
}

export default ListItem