import BarraProgres from "../barrasProgress";

function ItemAndPorcent(props) {
    return(
        <>
        <div className="row g-0 items-hab">
            <div className={props.claseDescrip}>{props.descrip}</div>
            <div className={props.claseBoxBar}>
                <BarraProgres
                    claseBarra={props.clasbar}
                    porc={props.porcentaje}
                />
            </div>
        </div> 
        </>
        
    )
}

export default ItemAndPorcent