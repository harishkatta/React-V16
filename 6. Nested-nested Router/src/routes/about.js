import React from 'react';

const About = (props) => {
    console.log('About',props);
    return <h6>About. {props.location.search}</h6>
}


export default About;
