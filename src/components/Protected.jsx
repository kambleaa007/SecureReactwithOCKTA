import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";

const Protected = () => {
    return(
        <div>
            <Router>
            <div>
                <ul>
                <li>
                    <Link to="/protected/">Home</Link>
                </li>
                <li>
                    <Link to="/protected/topics">Topics</Link>
                </li>
                </ul>

                <hr />

                <Switch>
                <Route exact path="/protected/">
                    <h1>HOME</h1>
                </Route>
                <Route path="/protected/topics">
                    <h1>TOPICS</h1>
                </Route>
                </Switch>
            </div>
            </Router>
        </div>
    )
}

export default Protected;
