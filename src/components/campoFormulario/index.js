import Form from 'react-bootstrap/Form';

function CampoForm(props) {
  return (
      <Form.Group className="mb-3" controlId={props.controlid}>
        <Form.Label>{props.nomSection}</Form.Label>
        <Form.Control type={props.typeSection} placeholder={props.placeholderSection} />
        <Form.Text className="text-muted">
          {props.textSection}
        </Form.Text>
      </Form.Group>
  );
}

export default CampoForm;