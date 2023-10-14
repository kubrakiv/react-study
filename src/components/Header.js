import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Header() {
    return (
        <header>
            <Navbar
                bg="dark"
                variant="dark"
                expand="lg"
                // className="bg-body-tertiary"
                collapseOnSelect
            >
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>DELTA LOGISTICS SRO</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to="/plan">
                                <Nav.Link>Planning</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/orders">
                                <Nav.Link>Orders</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/tasks">
                                <Nav.Link>Tasks</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/tasks/add">
                                <Nav.Link>Add Task</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/login">
                                <Nav.Link>Login</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;