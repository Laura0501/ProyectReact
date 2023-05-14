import Card from 'react-bootstrap/Card';

function CardCv(props) {
  return (
    <Card className={props.claseCard}>
        <div className='row g-0'>            
            <div class="col-md-4">
                <Card.Img className={props.claseImg} alt="..." src={props.imgCard} />
            </div>
            <div class='col-md-8'>
                <div className='h-100 d-flex flex-column'>
                    <Card.Body className={props.claseBodyCard} >
                        <Card.Title className={props.claseTitle}>{props.titleCard}</Card.Title>
                        <Card.Text className={props.claseText}>
                            {props.textCard}
                        </Card.Text>
                    </Card.Body>
                </div>
            </div>
            
        </div>    
    </Card> 
  );
}

export default CardCv;