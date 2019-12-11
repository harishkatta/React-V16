import React from 'react';
import {Link, useRouteMatch, useParams} from 'react-router-dom';

const SubTopic = (props) => {
    const {path, url}= useRouteMatch();
    const {subtopicId} = useParams();
    console.log('path sub', props);
    console.log('url sub', url);
    return (
        <div>
            <h3>{subtopicId}</h3>
            <Link to='/topics'>Go back to Topics</Link>
        </div>
    )
};
export default SubTopic;
