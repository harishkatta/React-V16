import React from 'react';
import {Switch,Route,Link,useRouteMatch} from "react-router-dom";
import Topic from './topic';

const Topics = (props) => {
    let { path, url } = useRouteMatch();
    console.log('Topics--->', props);
    return <div>
        <h2>Topics</h2>
        <ul>
            <li>
                <Link to={`${url}/rendering`}>Rendering with React</Link>
            </li>
            <li>
                <Link to={`${url}/components`}>Components</Link>
            </li>
            <li>
                {/*here ?name=harish katta is query parmas*/}
                <Link to={`${url}/props-v-state?name=harish katta`}>Props v. State</Link>
            </li>
        </ul>
        <Switch>
            <Route exact path={path}>
                <h3>Please select a topic.</h3>
            </Route>
            <Route path={`${path}/:topicId`} component={Topic} />
        </Switch>
    </div>
};

export default Topics;
