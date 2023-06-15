import React, { useEffect, useReducer } from 'react'
import { useTodos } from '../hooks/useTodos'
import { TodoAdd } from './TodoAdd'
import { TodoList } from './TodoList'
import { todoReducer } from './todoReducer'

export const TodoApp = () => {

    const {todos, getOutputTask, deleteTask, updateTask} = useTodos();

    return (
        <>
            <h1>TodoApp: {todos.length}, <small>pendientes: {todos.filter((todo)=> !todo.done).length}</small></h1>
            <hr />
            <div className='row'>
                <div className='col-md-7'>
                    <ul className='list-group'>
                        {
                            todos.map((task) => {
                                return <TodoList 
                                    task={task} 
                                    key={task.id} 
                                    deleteTask={(event) => { deleteTask(event) }}
                                    updateTask={(event) => { updateTask(event) }}
                                />
                            })
                        }
                    </ul>
                </div>
                <div className='col-md-5'>
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd outputTask={(event) => { getOutputTask(event) }} />
                </div>
            </div>
        </>
    )
}
