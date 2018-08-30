import React, {Component} from 'react';
import '../styles/App.css';
import Clock from "../components/Clock";
import {
    Container, Row,
    Col, Button
} from 'reactstrap';
import LapTimeArea from "../components/LapTimeArea";


class HomePage extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Clock/>
                    <LapTimeArea/>
                </Row>
            </Container>
        );
    }
}

export default HomePage;
