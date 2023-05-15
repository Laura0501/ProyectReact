import React from "react";
import CardCv from "../Card";
import imgHab from './imagenes/habilidadesimg.png'
import ItemAndPorcent from "../habilidad";
import './styless/styless.css'

function Habilidades() {
    return (
        <>
        <div class='Habilidades-main'>
            <div class='Habilidades-title'>
                <h1>MIS HABILIDADES PROFESIONALES</h1>
            </div>

            <div class='Habilidades-content'>
                <CardCv
                claseCard='Habilidades-card'
                claseImg='img-fluid rounded-start Habilidades-img'
                imgCard={imgHab}
                claseBodyCard='Habilidades-card__body'
                claseTitle='Habilidades-card__title'
                titleCard=''
                claseText='Habilidades-card__text'
                textCard={
                <>
                <div className="container-fluid">


                    <ItemAndPorcent
                    claseDescrip='col-6 items-hab__des'
                    descrip='Liderazgo'
                    claseBoxBar='col-6 items-hab__bar'
                    clasbar='items-hab_barra'
                    porcentaje='95'
                    />
                    
                    <ItemAndPorcent
                    claseDescrip='col-6 items-hab__des'
                    descrip='Comunicación Asertiva'
                    claseBoxBar='col-6 items-hab__bar'
                    clasbar='items-hab_barra'
                    porcentaje='90'
                    />

                    <ItemAndPorcent
                    claseDescrip='col-6 items-hab__des'
                    descrip='Trabajo bajo presión'
                    claseBoxBar='col-6 items-hab__bar'
                    clasbar='items-hab_barra'
                    porcentaje='85'
                    />

                    <ItemAndPorcent
                    claseDescrip='col-6 items-hab__des'
                    descrip='Programación Web'
                    claseBoxBar='col-6 items-hab__bar'
                    clasbar='items-hab_barra'
                    porcentaje='83'
                    />

                    <ItemAndPorcent
                    claseDescrip='col-6 items-hab__des'
                    descrip='Conocimiento de SW y HW'
                    claseBoxBar='col-6 items-hab__bar'
                    clasbar='items-hab_barra'
                    porcentaje='76'
                    />

                    <ItemAndPorcent
                    claseDescrip='col-6 items-hab__des'
                    descrip='Bases de Datos MySql'
                    claseBoxBar='col-6 items-hab__bar'
                    clasbar='items-hab_barra'
                    porcentaje='65'
                    />
                    
                    
                </div>
                </>
                } 
                />
            </div> 
        </div>               
        </>
    );
}


export default Habilidades