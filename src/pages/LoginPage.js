import React, { Component } from 'react';
import {
        Form, FormGroup,
        Label, FormText,
        Input,Button
        } from 'reactstrap';



class LoginPage extends Component {
    constructor (props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }

    render() {
        return (
            <Form>
                <FormGroup>
                    <Label for="username">Username</Label>
                    <Input name="username" id="username" placeholder="Username here"/>
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input type="password" name="password" id="password" placehodler="password here"/>
                </FormGroup>
                <Button type="submit">Submit</Button>
            </Form>
        )
    }
}

export default LoginPage;