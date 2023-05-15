import Button from 'react-bootstrap/Button';

function Boton(props){
    return(
        <Button variant={props.variant} type={props.type}>
        {props.nameButtom}
        </Button>
    )
}

export default Boton;