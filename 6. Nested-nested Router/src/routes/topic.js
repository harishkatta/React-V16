import React from 'react';
import {useParams, Route, Switch, Link, useRouteMatch} from "react-router-dom";
import SubTopic from './subtopic';

function Topic(props) {
    // let {topicId} = useParams();
    let {topicId} = props.match.params;
    let {path, url} = useRouteMatch();
    return (
        <div>
            <h3>{topicId}</h3>
            {/*nested-netsed route*/}
            <ul>
                <li>
                    <Link to={`${url}/functional`}>Functional components</Link>
                </li>
                <li>
                    <Link to={`${url}/class`}>Class components</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path={path}>
                    <h3>Please select a sub-topic.</h3>
                </Route>
                <Route path={`${path}/:subtopicId`} component={SubTopic}/>
            </Switch>
        </div>
    );
}

export default Topic;
