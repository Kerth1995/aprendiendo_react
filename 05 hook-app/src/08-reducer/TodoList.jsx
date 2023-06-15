import React from 'react'

export const TodoList = (props) => {

    const {task, deleteTask, updateTask} = props;

    return (
        <>
            <li className='list-group-item d-flex justify-content-between'>
                <span className={`align-self-center ${(task.done)?'text-decoration-line-through':''}`}
                    onDoubleClick={(event) => {updateTask(task)}}
                >
                    {task.description}
                </span>
                <button className='btn btn-danger' onClick={(event) => {deleteTask(task)}}>Borrar</button>
            </li>
        </>
    )
}
