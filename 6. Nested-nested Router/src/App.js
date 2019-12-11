import React from 'react';
import './App.css';
import {Switch, Route, Link} from "react-router-dom";
import Home from './routes/home';
import About from './routes/about';
import Topics from './routes/topics.js'

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/topics' component={Topics}/>
            <Route path="/topics">
                <Topics name='Harish katta'/>
            </Route>
        </Switch>
    </main>
);
const Header = () => (
    <header>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/topics'>Topics</Link></li>
                <li><Link to='/about?name=harish'>About</Link></li>
            </ul>
        </nav>
    </header>
);

class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Main/>
            </div>
        );
    }
}

export default App;

