const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const ADD_ITEM= 'ADD_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';

export const addToDo = (message) => {
    return {
        type: ADD_ITEM,
        todoItem:message
    }
};
export const removeToDo = (message) => {
    return {
        type: REMOVE_ITEM,
        todoItem: message
    }
};
