import React, { Component } from 'react';
import FormGroup from "reactstrap/src/FormGroup";
import Label from "reactstrap/src/Label";
import Input from "reactstrap/src/Input";
import Button from "reactstrap/src/Button";
import Form from "reactstrap/src/Form";



class SignUpPage extends Component {
    constructor (props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }



    render() {
        return(
          <div>
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
          </div>
        );
    }

}