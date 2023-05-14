import React from "react";
import CardCv from "../Card";
import LogoEdu from './imagenes/misestudios.jpg'
import './styless/styless.css'
import ListItem from "../groupList";

function Educacion() {
    return (
        <>
        <div class='Educacion-main'>
            <div class='Educacion-title'>
                <h1>FORMACIÓN</h1>
            </div>

            <div class='Educacion-content'>
                <CardCv
                claseCard='Educacion-card'
                claseImg='img-fluid rounded-start Educacion-img'
                imgCard={LogoEdu}
                claseBodyCard='flex-grow-1 Educacion-card__body'
                claseTitle='Educacion-card__title'
                titleCard=''
                claseText='Educacion-card__text'
                textCard={
                    <ListItem
                    claselist='Educacion-card__list'
                    claseItem='Educacion-card__items'
                    item1='Bachiller En Salud Y Nutrición (2007-2019)'
                    des1='I.E Nacional Auxiliares De Enfermería- Manizales'
                    item2='Técnico Profesional en Saneamiento Ambiental (2019-2020)'
                    des2='Universidad de caldas-Manizales'
                    item3='Tecnóloga en Gestión Ambiental (2019-2021)'
                    des3='Universidad de caldas-Manizales'
                    item4='Ing. de Sistemas  y Telecomunicaciones (2021- ... )'
                    des4='Universidad de Manizales-En Curso'
                    />
                }
                />
            </div> 
        </div>               
        </>
    );
}

export default Educacion