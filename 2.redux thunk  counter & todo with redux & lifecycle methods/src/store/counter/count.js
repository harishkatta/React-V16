import React from 'react';


export default class Count extends React.Component{

    constructor(props){
        console.log('count--->constructor');

        super(props);
        this.state={
            countValue:0
        }
    }


    static getDerivedStateFromProps(nextProps, prevState){
        console.log('count--->getDerivedStateFromProps');
        // console.log('nextProps', nextProps);
        // console.log('prevState', prevState);
        if(nextProps.count !== prevState.countValue){
            return {
                countValue: nextProps.count
            }
        } else {
            return null;
        }
    }
    componentDidMount() {
        console.log('count Component DID MOUNT!')
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('count--->shouldComponentUpdate');
        // console.log('nextProps',nextProps)
        // console.log('nextState',nextState)
        // console.log('nextContext',nextContext)

        if(nextProps.count !== nextState.countValue){
            return false;
        } else{
            return true;
        }

    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate from Child");
        // console.log('prevProps', prevProps);
        // console.log('prevState', prevState);
        return 123;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('count---componentDidUpdate');
        // console.log('prevProps', prevProps);
        // console.log('prevState', prevState);
        // console.log('snapshot', snapshot);
    }

    render() {
        return (
            <div>
                {this.state.countValue}
            </div>
        );
    }

}
