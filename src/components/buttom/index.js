import Button from 'react-bootstrap/Button';

function Boton(props){
    return{
        <Button variant={props.variant} type="submit">
        {props.nameButtom}
        </Button>
    }
}