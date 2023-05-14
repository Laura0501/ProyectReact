import Card from 'react-bootstrap/Card';

function CardCv(props) {
  return (
    <Card className={props.claseCard}>
        <div className='row g-0'>            
            <div class="col-md-4">
                <Card.Img className={props.claseImg} alt="..." src={props.imgCard} />
            </div>
            <Card.Body class='col-md-8'>
                <Card.Title className={props.claseTitle}>{props.titleCard}</Card.Title>
                <Card.Text className={props.claseText}>
                    {props.textCard}
                </Card.Text>
            </Card.Body>
        </div>    
    </Card> 
  );
}

export default CardCv;