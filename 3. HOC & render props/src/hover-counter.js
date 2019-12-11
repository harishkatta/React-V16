import React from 'react';
import withCounter from "./with-counter";

class HoverCounter extends React.Component {
    render() {
        let {count, handleIncrement} =this.props;
        return (
            <div>
                <button onMouseOver={handleIncrement}>Hovered {count} times</button>
            </div>
        );
    };
}
export default withCounter(HoverCounter, 10);

