import React from 'react';


const withCounter=(OriginalComponent, incrementValue) =>{
    class NewComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state={
                count:0
            }
        }
        handleIncrement = () =>{
            this.setState((prevState) =>{
                return {count:prevState.count+incrementValue}
            })
        };

        render() {
            return (
                <div>
                    <OriginalComponent
                        count={this.state.count}
                        handleIncrement={this.handleIncrement}
                        {...this.props}
                    />
                </div>
            );
        }

    }
    return NewComponent;
};
export default withCounter;

