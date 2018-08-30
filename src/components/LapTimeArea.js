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
    Table
} from 'reactstrap';


class LapTimeArea extends Component {
    render() {
        return (
            <Col className="col-md-6">
                <Row>
                    <Col className="col-6">
                        <Table className="col-6">
                            <thead>
                            <tr>
                                <th>Lap #</th>
                                <th>Time</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>15:23.16</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>14:58.32</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>16:38.49</td>
                            </tr>
                            </tbody>
                        </Table>
                    </Col>
                    <Col className="col-6">
                        <Table className="col-6">
                            <thead>
                            <tr>
                                <th>Lap #</th>
                                <th>Time</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">4</th>
                                <td>15:23.16</td>
                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td>14:58.32</td>
                            </tr>
                            <tr>
                                <th scope="row">6</th>
                                <td>16:38.49</td>
                            </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Col>

        );
    }
}


export default LapTimeArea;