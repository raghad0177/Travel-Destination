//import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Tour(props) {
    return (
        <Row className="g-3" >
                <Col  style={{ margin:'20px' }}>
                    <Card style={{ width: '500px' ,backgroundColor:'#CC6633'}} key={props.id}>
                        <Card.Img variant="top" src={props.imgPath} style={{ height: '250px', width: '450px',margin:'20px' }} />
                        <Card.Body>
                            <center>
                            <Card.Title style={{color:'#FFFFFF',fontSize:'30px'}}>  {props.name} </Card.Title>
                            </center>
                            <Card.Text>
                            </Card.Text>
                           
                        </Card.Body>
                    </Card>
                </Col>
        </Row>
    );
}
export default Tour;
