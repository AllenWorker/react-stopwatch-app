import React, {Component} from 'react';
import '../styles/App.css';
import { Stopwatch } from '../stopwatch';
import {
    Container, Row,
    Col, Button
} from 'reactstrap';


class HomePage extends Component {
    render() {
        return (
            <Container>
                    <Stopwatch/>
            </Container>
        );
    }
}

export default HomePage;
