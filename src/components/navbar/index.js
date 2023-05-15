import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom'
import './styless/styless.css'
import FotoPersonal from './imagenes/FotoMia.jpeg'
import CardCv from "../Card";

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
                    <Nav.Link as={Link} to='/acercaDeMi'>Acerca de mi</Nav.Link>
                    <Nav.Link as={Link} to='/educacion'>Educación</Nav.Link>
                    <Nav.Link as={Link} to='/habilidades'>Habilidades Profesionales</Nav.Link>
                    <Nav.Link as={Link} to='/experienciaLaboral'>Experiencia Laboral</Nav.Link>
                    <Nav.Link as={Link} to='/contactame'>Contactame</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        

        <section>
            <Outlet></Outlet>
            <div class='Curriculum-main'>
                <div class='Curriculum-content'>
                    <CardCv
                    claseCard='Curriculum-card'
                    claseImg='img-fluid rounded-start'
                    imgCard={FotoPersonal}
                    claseBodyCard='flex-grow-1 SobreMi-card__body'
                    claseTitle='Curriculum-card__title'
                    titleCard=''
                    claseText=''
                    textCard={
                    <>
                    <div className="Curriculum-card__text">
                        Laura Vanesa Alayon Cuellar
                    </div>
                    <div className="Curriculum-card__text--1">
                        Edad: 20 años
                        <br/>
                        Contacto: 3115300239
                        <br/>
                        email:laura0501alayon@gmail.com
                        <br/>
                        direccion: cll 13 #24-42 apto 201
                    </div>

                    </> 
                
                    }
                    />
                </div> 
            </div> 
             
        </section>
        
        </>
    )

}

export default NavbarP