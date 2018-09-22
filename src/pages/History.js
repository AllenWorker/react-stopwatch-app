import React, {Component} from 'react';
import '../styles/App.css';

import {
    Collapse, Nav,
    Navbar, NavbarBrand,
    NavbarToggler, NavDropdown,
    NavItem, NavLink,
    Container, Row,
    Col, Jumbotron,
    Button, Alert,
    ButtonDropdown, DropdownToggle, DropdownMenu,
    DropdownItem, Table
} from 'reactstrap';
//import LapTimeArea from "../components/LapTimeArea";
import LapTimeList from "../stopwatch/components/LapTimeList";

class History extends Component {

    constructor(props) {
        super(props);
        this.state = {
            raceList: []
        };
        this.deleteRace = this.deleteRace.bind(this);
    }

    hydrateStateWithLocalStorage() {
        if (localStorage.hasOwnProperty("raceList")) {
            // get the key's value from localStorage
            let value = localStorage.getItem("raceList");

            // parse the localStorage string and setState
            try {
                value = JSON.parse(value);
                this.setState({ raceList: value });
            } catch (e) {
                // handle empty string
                this.setState({ raceList: value });
            }
        }
    }

    componentDidMount() {
        this.hydrateStateWithLocalStorage();


    }

     deleteRace() {
        localStorage.clear();
         window.location.reload();
    }

    render() {
        const { raceList } = this.state;
        return (
            <div>
                <div className="container">
                    <Row>
                        <Col className="col-12">
                            <h1 className="App-title">Race History: </h1>
                        </Col>
                    </Row>
                    <LapTimeList timeList={ raceList }/>
                    <Button className="float-right" color="danger" onClick={this.deleteRace}>Delete Race</Button>{' '}
                </div>
            </div>
        );
    }
}

export default History;
