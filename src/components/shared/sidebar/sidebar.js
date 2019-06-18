import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import {Button, Icon, Card, Row, Col, Navbar, NavItem, CardTitle} from 'react-materialize';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[],
            responseCode: '',
            siteId:'',
            loading:'initial'
        }
    }
    componentDidMount() {

        this.setState({
            data: [
                {
                    "id": '1',
                    "name": "Dashboard",
                    "link": "/Dashboard",
                    "iconText": "jdicon-image-dummy",
                    "priority": 1,
                    "type":'one-level-menu'
                }
            ]
        });

        document.getElementsByTagName('body')[0].classList.remove("spinnerBody");
    }

    render() {
        var self = this;
        var active = "";
        var activeP = "";
        return(
            <aside className="sidebar">
                <div id="sideNav" className="side-menu">
                    <ul className="list">
                        {this.state.data.map(function(item,index) {
                            active = "";
                            if(self.props.active == item.link){active = "active"}
                            return (
                                <li key={item.id} className={active}>
                                    <Link to={item.link}>
                                        <i className={item.iconText}></i>
                                        <p>{item.name}</p>
                                    </Link>
                                </li>
                            );
                        })
                        }
                    </ul>
                </div>
            </aside>
        );
    }
}

export default Sidebar;