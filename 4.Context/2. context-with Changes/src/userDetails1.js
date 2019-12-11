import React from 'react';
import {UserConsumer} from "./userContext";

export default class UserDetails1 extends React.Component {
    render() {
        return (
            <UserConsumer>
                {
                    (context) => {
                        console.log(JSON.stringify(context));
                        return (
                            <div>

                                <h2>Profile Page of {context.user.userName}</h2>
                                <h3>Firstname: {context.user.firstName}</h3>
                                <h3>lastName: {context.user.lastName}</h3>
                                <input type="text" value={context.user.firstName}
                                       onChange={context.actions.handleFirstNameChange.bind(this)}/>
                                <input type="text" value={context.user.lastName}
                                       onChange={context.actions.handleLastNameChange.bind(this)}/>
                            </div>
                        );
                    }
                }
            </UserConsumer>
        )
    }

}
