import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import '../assets/css/styles.scss'
import {Button, Icon, Card, Row, Col, Navbar, NavItem, CardTitle} from 'react-materialize';
import Sidebar from './shared/sidebar/sidebar'
import Header from './shared/header/header'
class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            responseCode: '',
            siteId:'',
            loading:'initial'
        }
    }

    render() {
        return(
            <div>
                 <Header/>
                 <Sidebar/>
            </div>
        );
    }
}

export default Dashboard;