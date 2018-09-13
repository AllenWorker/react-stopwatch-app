import React, { Component } from 'react';
import './Stopwatch.css';

import Timer        from './Timer';
import Controls     from './Controls';
import LapTimeList  from  './LapTimeList';

import {
    Collapse, Nav,
    Navbar, NavbarBrand,
    NavbarToggler, NavDropdown,
    NavItem, NavLink,
    Container, Row,
    Col, Jumbotron,
    Button, Alert,
    Table
} from 'reactstrap';

import Config       from '../constants/Config';

function getDefaultState() {
    return {
        isRunning   : false,
        isStarted   : false,
        time        : 0,
        timeList    :[]
    }
}

class Stopwatch extends Component {

    constructor( props) {
        super(props);
        this.state      = getDefaultState();
        this.timerRef   = null;
    }

    updateTimer(extraTime) {
        const { time } = this.state;
        this.setState({ time : time + extraTime });
    }

    start() {
        this.setState({
            isRunning : true,
            isStarted : true,
        }, () => {
            this.timerRef = setInterval(
                () => { this.updateTimer( Config.updateInterval ) }, Config.updateInterval
            )
        });
    }

    stop() {
        this.setState({
            isRunning : false
        }, () => {
            clearInterval(this.timerRef);
        });
    }

    reset() {
        this.setState(getDefaultState());
    }

    addLapTime() {
        const {time, timeList} = this.state;

        this.setState({
            timeList : [...timeList, time ]
        });
    }

    render() {
        const { isRunning, isStarted, time, timeList } = this.state;
        return (
            <div className="Stopwatch">
                <Row>
                    <Col sm="6" md="6" lg="12" xl="12">
                        <Timer time={ time }/>

                        <Controls
                            isRunning={ isRunning }
                            isStarted={ isStarted }
                            start={ () => this.start() }
                            stop={ () => this.stop() }
                            reset={ () => this.reset() }
                            addLapTime={ () => this.addLapTime() }
                        />
                    </Col>
                    <Col sm="6" md="6" lg="12" xl="12">
                        <LapTimeList timeList={ timeList } />
                    </Col>
                </Row>

            </div>
        );
    }
}

export default Stopwatch;
