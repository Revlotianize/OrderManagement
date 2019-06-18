import React, {Component} from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './assets/css/styles.scss';
import Sidebar from './components/shared/sidebar/sidebar'
import Dashboard from "./components/Dashboard";

class App extends Component {

    constructor(props) {
        super(props);
        this.state ={

        }
    }

    render() {
        return (
                <Router>
                    <div>
                        <Switch>
                            <Route exact path='/' component={()=><Dashboard/>}/>
                            <Route exact path='/Dashboard' component={Dashboard}/>
                        </Switch>
                    </div>
                </Router>
        );
    }
}

export default App;
