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
import LapTimeArea from "../components/LapTimeArea";

class History extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.dropdown_toggle = this.dropdown_toggle.bind(this);
        this.state = {
            isOpen: false,
            dropdownOpen: false
        }
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    dropdown_toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <div>
                <div className="container">
                    <Row>
                        <Col className="col-3">
                            <h1 className="App-title">Race: </h1>
                        </Col>
                        <Col className="col-9">
                            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.dropdown_toggle}>
                                <DropdownToggle caret>
                                    Race Name
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>Race 1</DropdownItem>
                                    <DropdownItem>Race 2</DropdownItem>
                                    <DropdownItem>Race 3</DropdownItem>
                                </DropdownMenu>
                            </ButtonDropdown>
                        </Col>
                    </Row>
                    <LapTimeArea/>
                    <Button className="float-right" color="danger">Delete Race</Button>{' '}
                </div>
            </div>
        );
    }
}

export default History;
