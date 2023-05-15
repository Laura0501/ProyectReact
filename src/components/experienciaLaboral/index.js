import React from "react";
import ListItem from "../groupList";
import CardCv from "../Card";
import imgExpLabo from './imagenes/exp.png'
import './styless/styless.css'

function ExperienciaLaboral() {
    return (
        <>
        <div class='Experiencia-main'>
            <div class='Experiencia-title'>
                <h1>EXPERIENCIA LABORAL</h1>
            </div>

            <div class='Experiencia-content'>
                <CardCv
                claseCard='Experiencia-card'
                claseImg='img-fluid rounded-start Experiencia-img'
                imgCard={imgExpLabo}
                claseBodyCard='flex-grow-1 Experiencia-card__body'
                claseTitle='Experiencia-card__title'
                titleCard=''
                claseText='Experiencia-card__text'
                textCard={
                    <ListItem
                    claselist='Experiencia-card__list'
                    claseItem='Experiencia-card__items'
                    item1='AUXILIAR ADMINISTRATIVA '
                    des1='Masora Gestor Catastral (Octubre 2021 A la Fecha)'
                    item2='ASESORA DE VENTAS '
                    des2='Digitex (Junio 2021 Septiembre 2021)'
                    item3='ADMINISTRADORA-ASESORA COMERCIAL'
                    des3='Nuevos y usados la 19 (Noviembre 2020 Mayo 2021)'
                    item4='ASESORA DE VENTAS'
                    des4='Dulce encanto tienda de regalos (Mayo 2020 Diciembre 2020)'
                    />
                }
                />
            </div> 
        </div>               
        </>
    );
}

export default ExperienciaLaboral