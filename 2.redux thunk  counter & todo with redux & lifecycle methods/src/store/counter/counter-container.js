import React from 'react';
import {connect} from 'react-redux';
import {inc_counter, dec_counter} from './counter-actions'
import Count from './count';


class CounterContainer extends React.Component{

    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className='items'>
                <div>  <Count count={this.props.counter}/> </div>
                <button onClick={() =>this.props.inc_counter()}> +</button>
                <button onClick={() =>this.props.dec_counter()}> -</button>
            </div>
        );
    }

}
function mapStateToProps(state){
    return {
        counter: state.counter
    }
}
export default connect(mapStateToProps, {inc_counter, dec_counter})(CounterContainer)
