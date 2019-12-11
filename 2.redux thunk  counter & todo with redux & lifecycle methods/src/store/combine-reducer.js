import { combineReducers } from 'redux'
import counter from './counter/counter-reducer';
import todos from './todo/todos-reducer';

const rootReducer= combineReducers({
    counter,
    todos
});
export default rootReducer;

