import React, {Component} from 'react';
import './styles/App.css';
import Routes from "./routes/Routes";
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
import AppHeader from "./components/AppHeader";
import {BrowserRouter} from 'react-router-dom';


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <AppHeader/>
                    <Routes/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
