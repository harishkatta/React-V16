
const initialState=['item1', 'item2'];
export default function (state = initialState, action){
    switch (action.type){
        case 'ADD_ITEM':
            return [...state, action.todoItem];
        case 'REMOVE_ITEM':
            return state.filter(todo => todo !== action.todoItem);
        default:
            return state;
    }
}
