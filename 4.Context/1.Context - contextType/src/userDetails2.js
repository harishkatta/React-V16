import React from 'react';
import {UserContext} from './userContext';

export default class UserDetails2 extends React.Component {
    static contextType = UserContext;
    render() {
        return (
            <h2>Component UserDetails2 -contextType- {this.context.firstName}</h2>
        )
    }
}
// for only class components
// UserDetails2.contextType = UserContext;

