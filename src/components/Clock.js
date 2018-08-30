import React, {Component} from 'react';
import '../styles/App.css';
import Stopwatch from 'react-stopwatch';
import {
    Jumbotron, Container,
    Row, Col, Button
} from 'reactstrap';


class Clock extends Component {
    render() {
        const styles = {
            containerOutter: {
                width: '',
                height: '',
                position: '',
                background: 'none',
                border: 'none',
            },
            containerInner: {
                lineHeight: ''
            }
        };
        return (
            <Col className="col-md-6">
                <Row>
                    <Col className="col-12">
                        <Stopwatch
                            seconds={0}
                            minutes={0}
                            hours={0}
                            custom={styles}
                            limit={"00:00:10"}
                            withLoop={true}
                            onCallback={() => console.log('Finish')}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col className="col-6">
                        <Button color="primary">Start</Button>
                    </Col>
                    <Col className="col-6">
                        <Button color="secondary">Reset</Button>
                    </Col>
                </Row>
            </Col>
        );
    }
}

export default Clock;