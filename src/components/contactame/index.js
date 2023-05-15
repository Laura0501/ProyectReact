import React from "react";
import CampoForm from "../campoFormulario";
import Form from 'react-bootstrap/Form';
import Boton from "../buttom";
import './styless/styless.css'


function Contactame() {
    return (
        <>
        <div class='Contanto-main'>
            <div class='Contanto-main__title'>
                <h1>CONTACTAME</h1>
            </div>

            <div className="Contanto-boxform">
                <Form className="Contanto-main__form">
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
                    typeSection='int'
                    placeholderSection='Enter Contact'
                    textSection=''
                    />
                    <Form.Control as="textarea" placeholder="Leave a comment here" />

                    <div className="Contanto-main__botton">
                        <Boton
                        variant='btn btn-danger'
                        type='submit'
                        nameButtom='Enviar'
                        />
                    </div>
                    

                </Form>
            </div>

        
        </div>               
        </>
    );
}

export default Contactame