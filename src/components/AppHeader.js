import React, {Component} from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import {Link} from 'react-router-dom';
import {
    Collapse, Nav,
    Navbar, NavbarBrand,
    NavbarToggler, NavDropdown,
    NavItem, NavLink
} from 'reactstrap';

class AppHeader extends Component {
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
        return(
            <Navbar color="dark" inverse toggleable>
                <NavbarToggler right onClick={this.toggle}/>
                <h1 className="App-title text-white">Stopwatch</h1>
                <NavbarBrand href="/">
                    <img src={logo} className="App-logo" alt="logo"/>
                </NavbarBrand>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Link to="/">Stopwatch</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/history">Race History</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/setting">Settings</Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

export default AppHeader;