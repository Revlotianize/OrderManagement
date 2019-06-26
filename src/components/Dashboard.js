import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import '../assets/css/styles.scss'
import {Button, Icon, Card, Row, Col, Navbar, NavItem, CardTitle} from 'react-materialize';
import Sidebar from './shared/sidebar/sidebar'
import Header from './shared/header/header'
import { Bar,Line,Pie } from 'react-chartjs-2';

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            responseCode: '',
            siteId:'',
            loading:'initial',
            chartData:{
                options : {
                    scales: {
                        xAxes: [{
                            barPercentage: 0.5,
                            barThickness: 6,
                            maxBarThickness: 1,
                            minBarLength: 2,
                            gridLines: {
                                offsetGridLines: false
                            }
                        }]
                    }
                },
                labels:['Length','Word','Breakdown','Data','Article'],
                datasets:[
                    {
                        label:'Insights',
                        data:[
                            3,
                            2,
                            3,
                            3,
                            4
                        ],
                        backgroundColor:[
                            'rgb(0,0,128)',
                            'rgb(0,0,255)',
                            'rgb(0,128,0)',
                            'rgb(0,128,128)',
                            'rgb(0,255,0)'
                        ]
                    }
                ]

            }
        }
    }

    render() {
        return(
            <div className="main-panel">
                <h2>Pie Chart</h2>
                <div className = "pie">
                    <Pie
                        data={this.state.chartData}
                        options={{
                            scales: {
                                xAxes: [{
                                    barPercentage: 0.5,
                                    barThickness: 250,
                                    maxBarThickness: 80,
                                    minBarLength: 2,
                                    gridLines: {
                                        offsetGridLines: true
                                    }
                                }]
                            }
                        }}
                        // width={100}
                        // height={50}
                        // options={{ maintainAspectRatio: true }}
                    />
                </div>
                <div className = "linechart">
                    <Line
                        data={this.state.chartData}
                        options={{
                            scales: {
                                xAxes: [{
                                    barPercentage: 0.5,
                                    barThickness: 250,
                                    maxBarThickness: 80,
                                    minBarLength: 2,
                                    gridLines: {
                                        offsetGridLines: true
                                    }
                                }]
                            }
                        }}
                        // width={100}
                        // height={50}
                        // options={{ maintainAspectRatio: true }}
                    />
                </div>
                <div className= "bar">
                    <Bar className = "bar"
                         data={this.state.chartData}
                         options={{
                             scales: {
                                 xAxes: [{
                                     barPercentage: 0.5,
                                     barThickness: 250,
                                     maxBarThickness: 80,
                                     minBarLength: 2,
                                     gridLines: {
                                         offsetGridLines: true
                                     }
                                 }]
                             }
                         }}
                        // width={100}
                        // height={50}
                        // options={{ maintainAspectRatio: true }}
                    />
                </div>
            </div>
        );
    }
}

export default Dashboard;