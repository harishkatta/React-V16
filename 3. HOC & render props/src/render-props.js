import React from 'react';

export default class RenderPropsCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            count:0
        }
    }
    handleIncrement = () =>{
        this.setState((prevState) =>{
            return {count:prevState.count+1}
        })
    };
    render() {
        return(<div>
            {this.props.render(this.state.count, this.handleIncrement)}
        </div>)
    }

}
