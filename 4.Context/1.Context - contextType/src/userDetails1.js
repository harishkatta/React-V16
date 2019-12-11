import React from 'react';
import {UserConsumer} from "./userContext";
import UserDetails2 from './userDetails2';

export default class UserDetails1 extends React.Component{

    render(){
        return(
           <UserConsumer>
               {
                   (context) => {
                       return (
                           <div>
                                <h2>Profile Page of  {context.userName}</h2>
                                <UserDetails2 />
                            </div>
                       );
                   }
               }
           </UserConsumer>
        )
    }

}
