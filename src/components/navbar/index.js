import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom'
import styles from './styless/styless.css'


function NavbarP() {
    return(
        <>
        <Navbar className='NavBg' variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to='/'>My Curriculum</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to='/'></Nav.Link>
                    <Nav.Link as={Link} to='/acercaDeMi'>Acerca de Mi</Nav.Link>
                    <Nav.Link as={Link} to='/educacion'>Educacion</Nav.Link>
                    <Nav.Link as={Link} to='/habilidades'>Habilidades</Nav.Link>
                    <Nav.Link as={Link} to='/experienciaLaboral'>Experiencia Laboral</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        <section>
            <Outlet></Outlet>
        </section>
        </>
    )

}

export default NavbarP