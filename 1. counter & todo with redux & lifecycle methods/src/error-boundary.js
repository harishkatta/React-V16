import React from 'react';

export default class ErrorBoundary extends React.Component {
    state= {
        error:'',
        info:'',
        hasError:false
    };

    componentDidCatch(error, info){
        console.log('componentDidCatch---->');
        console.log(error);
        console.log(info);

        this.setState({
            error:error,
            info:info,
            hasError:true
        })
    }

    render(){
        if(this.state.hasError){
            return [
                <div>
                    <h1>Oops, something went wrong :(</h1>
                    <p>The error: {this.state.error.toString()}</p>
                    <p>Where it occured: {this.state.info.componentStack}</p>
                </div>
            ]
        }
        return this.props.children
    }
}
