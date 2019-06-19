import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {Button, Icon, Card, Row, Col, Navbar, NavItem, CardTitle} from 'react-materialize';

class Header extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div id="navBar">
                <Navbar>
                    <div className="nav-wrapper">

                    </div>
                </Navbar>
            </div>
        )
    }
}
export default Header