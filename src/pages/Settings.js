import React, {Component} from 'react';
import '../styles/App.css';

import {
    Collapse, Nav,
    Navbar, NavbarBrand,
    NavbarToggler, NavDropdown,
    NavItem, NavLink,
    Container, Row,
    Col, Jumbotron,
    Button, ButtonGroup, Alert, Form,
    FormGroup, Label, Input,
    FormText
} from 'reactstrap';

class Settings extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            Selected: []
        };
        this.onCheckboxBtnClick = this.onCheckboxBtnClick.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    onCheckboxBtnClick(selected) {
        const index = this.state.Selected.indexOf(selected);
        if (index < 0) {
            this.state.Selected.push(selected);
        } else {
            this.state.Selected.splice(index, 1);
        }
        this.setState({ Selected: [...this.state.Selected] });
    }

    render() {
        return (
            <div>
                <div className="container">
                    <Form>
                        <FormGroup>
                            <ButtonGroup>
                                <Button color="primary" onClick={() => this.onCheckboxBtnClick(3)} active={this.state.Selected.includes(3)}>Sound</Button>
                            </ButtonGroup>
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
                            <Button color="danger" block>Clear All Race</Button>{' '}
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
