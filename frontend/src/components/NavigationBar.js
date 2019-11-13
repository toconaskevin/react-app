import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

export const NavigationBar = () => (
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