import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function CampoForm(props) {
  return (
      <Form.Group className="mb-3" controlId={props.controlid}>
        <Form.Label>{props.nomSection1}</Form.Label>
        <Form.Control type={props.typeSection1} placeholder={props.placeholderSection1} />
        <Form.Text className="text-muted">
          {props.textSection1}
        </Form.Text>
      </Form.Group>

      
    </Form>
  );
}

export default Formulario;