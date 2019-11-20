import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

export const NavigationsBar = () => (
    <Navbar className="d-flex justify-content-between">
        <Nav>
            <NavDropdown title="User" id="basic-nav-dropdown">
                <NavDropdown.Item href="/Profile">Mi Perfil</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/Options">Configuration</NavDropdown.Item>
            </NavDropdown>
        </Nav>
        <Nav>
            <NavDropdown id="basic-nav-dropdown">
                <NavDropdown.Item href="./Home">Home</NavDropdown.Item>
                <NavDropdown.Item href="./Login">Login</NavDropdown.Item>
                <NavDropdown.Item href="./Register">Register</NavDropdown.Item>
            </NavDropdown>
        </Nav>
    </Navbar>
);

class NavigationBar extends Component {
    render() {
        return(
            <ul class="nav nav-pills fixed-top d-flex justify-content-between mr-0 ml-2">
            <li class="nav-item dropdown">
                <a class="navbar-brand" href="#" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                    <img className="rounded-circle" width="30" height="30" src="http://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-101-e1485815933252.jpg"/>
                </a>
                <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Separated link</a>
                </div>
            </li>
            <li class="nav-item dropdown">
                <a class="navbar-brand " href="#" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                    <img className="rounded" width="30" height="30" src="https://cdn3.iconfinder.com/data/icons/mobile-friendly-ui/100/menu-512.png"/>
                </a>
                <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Separated link</a>
                </div>
            </li>
            </ul>
        );
    }
}

export default NavigationBar;