const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del Alma',
    done: false
}];

const todoReducer = (state = [], action = {}) => {
    
    if(action.type === '[TODO] add todo'){
        return [...state, action.payload];
    }
    return state;
}

let todos = todoReducer(initialState, {});

const newTodo = {
    id: 2,
    todo: 'Recolectar la piedra del Poder',
    done: false
}

const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo
}

todos = todoReducer(todos, addTodoAction);

const newTodo3 = {
    id: 3,
    todo: 'Recolectar la piedra del Infinito',
    done: false
}

const addTodoAction3 = {
    type: '[TODO] add todo',
    payload: newTodo3
}

todos = todoReducer(todos, addTodoAction3);

console.log(todos);