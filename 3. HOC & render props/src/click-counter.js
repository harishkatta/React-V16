import React from 'react';
import withCounter from "./with-counter";

class ClickCounter extends React.Component {
    render() {
        let {count, handleIncrement} =this.props;
        return (
            <div>
                {this.props.name}
                <button onClick={handleIncrement}>clicked {count} times</button>
            </div>
        );
    };
}
export default withCounter(ClickCounter, 5)
