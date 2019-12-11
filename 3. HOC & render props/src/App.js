import React from 'react';
import './App.css';

import ClickCounter from './click-counter';
import HoverCounter from './hover-counter';
import RenderPropsCounter from './render-props';

// export default class App extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return (
//             <div>
//                <ClickCounter  name='harish'/>
//                <HoverCounter />
//             </div>
//         );
//     };
// }
export default function () {
    return (
        <div>
            <div><span>----> HOC -----</span>
                <ClickCounter name='harish'/>
                <HoverCounter/>
            </div>
            <br/>
            <div>
                <span>----> Render Props -----</span>
                <RenderPropsCounter
                    render={(count, handleIncrement) => (<ClickCounter count={count} handleIncrement={handleIncrement}/>
                    )}/>


                <RenderPropsCounter
                    render={(count, handleIncrement) => (<HoverCounter count={count} handleIncrement={handleIncrement}/>
                    )}/>
            </div>

        </div>
    );
}

