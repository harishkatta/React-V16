import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserDetails1 from './userDetails1';
import {UserProvider} from "./userContext";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                userName: 'harish K',
                firstName: 'Harish',
                lastName: 'katta'
            }
        }
    }
    render() {
        return (
            <div className="App">
                <UserProvider value={
                    {
                        user: this.state.user,
                        actions: {
                            handleFirstNameChange: (e) => {
                                let user1 = this.state.user;
                                user1.firstName = e.target.value;
                                this.setState({user: user1}, console.log('firstname set'));
                            },
                            handleLastNameChange: (e) => {
                                let user1 = this.state.user;
                                user1.lastName = e.target.value;
                                this.setState({user: user1}, console.log('lastName set'));
                            }
                        }
                    }
                }>
                    <UserDetails1/>
                </UserProvider>
            </div>
        );
    }

}

export default App;
