import ListGroup from 'react-bootstrap/ListGroup';

function ListItem(props) {
  return (
    <ListGroup as='ul' class={props.claselist}>
        <ListGroup.Item as="li" className={props.claseItem}>
            <div className="ms-2 me-auto">
                <div className="fw-bold">{props.item1}</div>
                {props.des1}
            </div>
        </ListGroup.Item>

        <ListGroup.Item as="li" className={props.claseItem}>
            <div className="ms-2 me-auto">
                <div className="fw-bold">{props.item2}</div>
                {props.des2}
            </div>
        </ListGroup.Item>

        <ListGroup.Item as="li" className={props.claseItem}>
            <div className="ms-2 me-auto">
                <div className="fw-bold">{props.item3}</div>
                {props.des3}
            </div>
        </ListGroup.Item>

        <ListGroup.Item as="li" className={props.claseItem}>
            <div className="ms-2 me-auto">
                <div className="fw-bold">{props.item4}</div>
                {props.des4}
            </div>
        </ListGroup.Item>

    </ListGroup>
  );
}

export default ListItem;