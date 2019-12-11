import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserDetails1 from  './userDetails1';
import {UserProvider} from "./userContext";


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user: {
                userName: 'harish K',
                firstName: 'Harish',
                lastName: 'katta'
            }
        }
    }
    render(){
        return (
            <div className="App">
                <UserProvider value={this.state.user}>
                    <UserDetails1 />
                </UserProvider>
            </div>
        );
    }

}

export default App;
