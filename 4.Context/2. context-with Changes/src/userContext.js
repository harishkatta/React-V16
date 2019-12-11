import React from 'react';

const UserContext = React.createContext({
    userName: 'harish K',
    firstName: 'Harish',
    lastName: 'katta'
});
const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export {UserProvider, UserConsumer, UserContext}
