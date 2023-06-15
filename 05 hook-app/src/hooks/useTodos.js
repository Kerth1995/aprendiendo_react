import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-reducer/todoReducer";

const initReduce = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], initReduce);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));

    }, [todos])

    const getOutputTask = (task) => {
        const action = {
            type: '[TODO] Add todo',
            payload: task
        }

        dispatch(action)
    }

    const deleteTask = (task) => {

        const action = {
            type: '[TODO] Remove todo',
            payload: task
        }

        dispatch(action);
    }

    const updateTask = (task) => {
        const action = {
            type: '[TODO] Update todo',
            payload: task
        }

        dispatch(action);
    }

    return{
        todos,
        getOutputTask,
        deleteTask,
        updateTask
    }
}
