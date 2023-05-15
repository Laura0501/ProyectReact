import ProgressBar from 'react-bootstrap/ProgressBar';

function BarraProgres(props) {
  return <ProgressBar now={props.porc} className={props.claseBarra} label={`${props.porc}%`} />;   
}

export default BarraProgres;

