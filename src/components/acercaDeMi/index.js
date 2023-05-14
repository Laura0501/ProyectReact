import React from "react";
import CardCv from "../Card";
import Foto from "./imagenes/foto1.jpeg"
import './styless/styless.css'

function SobreMi() {
    return (
        <>
        <div class='SobreMi-main'>
            <div class='SobreMi-title'>
                <h1>ACERCA DE MI</h1>
            </div>

            <div class='SobreMi-content'>
                <CardCv
                claseCard='SobreMi-card'
                claseImg='img-fluid rounded-start'
                imgCard={Foto}
                claseBodyCard='flex-grow-1 SobreMi-card__body'
                claseTitle='SobreMi-card__title'
                titleCard=''
                claseText='SobreMi-card__text'
                textCard='Apasionada por la tecnología desde niña. Me encanta realizar y ser parte 
                de proyectos tecnológicos que impacten al público y dejen huella. Soy muy sociable
                por lo que disfruto mucho a la hora de trabajar en equipo.'
                />
            </div> 
        </div>               
        </>
    );
}

export default SobreMi