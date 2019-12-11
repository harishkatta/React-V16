import React from 'react';
import './App.css';
import CounterContainer from './store/counter/counter-container';
import TodoItemsContainer from './store/todo/todo-items-container';
import ErrorBoundary from './error-boundary';


// export default class App extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//
//     render() {
//         return (
//             <div>
//                 <ErrorBoundary>
//                     <CounterContainer/>
//                 </ErrorBoundary>
//                 <ErrorBoundary>
//                     <TodoItemsContainer/>
//                 </ErrorBoundary>
//             </div>
//
//         );
//     };
// }

export default function App(){
    return (
        <div>
            <ErrorBoundary>
                <CounterContainer/>
            </ErrorBoundary>
            <ErrorBoundary>
                <TodoItemsContainer/>
            </ErrorBoundary>
        </div>

    );
}
