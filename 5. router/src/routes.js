import React from 'react';
import {BrowserRouter as Router, Route, Link, NavLink, Redirect} from 'react-router-dom';

function Home() {
    return <h2>Home</h2>;
}

function About(props) {
    console.log('about', props);
    return <h2>About</h2>;
}

function Users(prop) {
    console.log('Users prop--', prop);
    if(prop.userName) return <h2>{prop.userName}</h2>;
    else return <h2>User</h2>
}
const Notfound = () => <h1>Not found</h1>


export default class Routes extends React.Component {
    state = {
        login: false
    };

    handleClick() {
        this.setState((prevState) => {
            return {login: !prevState.login}
        })
    }

    render() {
        return (
            <Router>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <NavLink to="/users" activeStyle={{color: 'yellow'}}>Users</NavLink>
                        </li>
                        <li>
                            <Link to="/users/Harish">Users-Harish</Link>
                        </li>
                    </ul>
                </nav>
                <hr/>

                <Route exact path='/' render={
                    (props) => <Home  {...props}/>
                }/>
                <Route exact path='/about' component={About}/>
                <Route exact path='/render' render={() => <div>render</div>}/>
                <Route exact path='/users' component={Users}/>
                <Route exact path='/users/:Harish' render={(props) => (
                    this.state.login ? <Users userName={props.match.params.Harish}/> : <Redirect exact to='/'/>
                )}/>
                <Route component={Notfound} />
                <button onClick={this.handleClick.bind(this)}> {this.state.login ? 'login' : 'logout'}</button>

            </Router>
        );
    }

}
