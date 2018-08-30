import React, {Component} from 'react';
import '../styles/App.css';

import {
    Collapse, Nav,
    Navbar, NavbarBrand,
    NavbarToggler, NavDropdown,
    NavItem, NavLink,
    Container, Row,
    Col, Jumbotron,
    Button, Alert, Form,
    FormGroup, Label, Input,
    FormText
} from 'reactstrap';

class Settings extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        }
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <div className="container">
                    <Form>
                        <FormGroup>
                            <Label>
                                Sound:
                            </Label>
                            <Input className="float-left" c type="checkbox" />{' '}
                        </FormGroup>
                        <FormGroup>
                            <Label for="themeSelect">Theme: </Label>
                            <Input type="select" name="select" id="themeSelect">
                                <option>Theme 1</option>
                                <option>Theme 2</option>
                                <option>Theme 3</option>
                                <option>Theme 4</option>
                                <option>Theme 5</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Button color="danger">Clear All Race</Button>{' '}
                        </FormGroup>
                        <FormGroup tag="fieldset">
                            <FormGroup>
                                <Label for="about">About:</Label>
                                <FormText color="muted">
                                    ___________________________________________________
                                    ___________________________________________________
                                </FormText>
                            </FormGroup>
                            <FormGroup>
                                <Label for="version">Version:</Label>
                                <FormText color="muted">
                                    ___________________________________________________
                                    ___________________________________________________
                                </FormText>
                            </FormGroup>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        );
    }
}

export default Settings;
