import React from 'react';
import {connect} from 'react-redux';
import {addToDo, removeToDo} from './todo-actions';

class TodoItemsContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            todo:''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e){
        this.setState({
            todo: e.target.value
        });
    }

    handleSubmit(e){
        if(this.state.todo){
            this.props.addToDo(this.state.todo);
            this.setState({
                todo: ''
            });
        }

    }
    handleRemoveItem(item){
        this.props.removeToDo(item);
    }
    handleClick(){

    }

    render() {
        return (
            <div>
                <input onChange={this.handleChange} value={this.state.todo}/>
                <button onClick={this.handleSubmit}>Add</button>
                {this.props.todolist.map((todo, index) => {
                    return (
                        <li key={index} onClick={this.handleClick}>{todo} <span onClick={() => this.handleRemoveItem(todo)}> X</span></li>
                    );
                })}
            </div>
        );
    }
}

function mapStateToProps (state){
    return {
        todolist: state.todos
    }
}

export default connect(mapStateToProps,{addToDo, removeToDo})(TodoItemsContainer)

