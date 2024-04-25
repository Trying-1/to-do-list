import React from 'react'
import { useState } from 'react';

function ListItem(props) {
    const tasks = props.tasks;
    const edittask = () => {

    }
    const deletetask = (indextodelete) => {
      const updatedtask=tasks.filter((task, index) => 
            index !== indextodelete
        )
        props.setTasks(updatedtask)
    }
    const donetask = () => {
        console.log("done");
    }

    return (
        <div>

            <div className="list">{tasks.map((task, index) => {
                return <div className='list-item' key={index}>
                    <h3 className='task-title' >{task}</h3>
                    <button className='edit-btn btn' onClick={edittask}>Edit</button>
                    <button className='delete-btn btn' onClick={()=>deletetask(index)}>Delete</button>
                    <button className='done-btn btn' onClick={donetask}>Done</button>
                </div>
            })}
            </div>

        </div>
    )
}

export default ListItem