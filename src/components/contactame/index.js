import React from "react";
import CampoForm from "../campoFormulario";
import Form from 'react-bootstrap/Form';
import Boton from "../buttom";


function Contactame() {
    return (
        <>
        <div class='SobreMi-main'>
            <div class='SobreMi-title'>
                <h1>CONTACTO</h1>
            </div>

            <div>
                <Form>
                    <CampoForm
                    controlid='formBasicName'
                    nomSection='Nombre'
                    typeSection='text'
                    placeholderSection='Enter your full name'
                    textSection='Su nombre será confidencial'
                    />

                    <CampoForm
                    controlid='formBasicEmail'
                    nomSection='Email'
                    typeSection='email'
                    placeholderSection='Enter Email'
                    textSection='Nunca compartiremos tu email'
                    />

                    <CampoForm
                    controlid='formBasicContact'
                    nomSection='Contact'
                    typeSection='number'
                    placeholderSection='Enter Contact'
                    textSection=''
                    />

                    <Form.Control as="textarea" placeholder="Leave a comment here" />

                </Form>
            </div>

        
        </div>               
        </>
    );
}

export default Contactame