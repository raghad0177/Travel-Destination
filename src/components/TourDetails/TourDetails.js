import './TourDetails.css';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Navbar from '../Navbar/Navbar.js';
import { useState } from 'react';
const result = require('../../data/db.json');
function TourDetails() {
    const { id } = useParams();
    const tour = result.find(tour => tour.id === id);
    const [showMore, setShowMore] = useState(false);  
    return (
        <>
            <Navbar />
            <div style={{ backgroundColor: '#FF9933' }}>
                <center>
                    <h1 style={{ paddingTop: '20px' }}>Travel-Destination</h1>
                </center>
                <center>
                    <Row className="g-3" >
                        <Col style={{ margin: '110px', marginTop: '30px' }}>
                            <Card style={{ width: '700px', backgroundColor: '#CC6633' }} >
                                <Card.Img variant="top" src={tour.image} style={{ height: '300px', width: '650px', margin: '20px', marginBottom: '0px', marginTop: '20px' }} />
                                <Card.Body>
                                    <center>
                                        <Card.Title style={{ color: 'black', fontSize: '30px' }}>{tour.name}</Card.Title>
                                    </center>
                                    {showMore ? (
                                        <Card.Text style={{fontWeight: 'bold'}}>{tour.info}</Card.Text>
                                    ) : (
                                        <Card.Text style={{fontWeight: 'bold'}}>{tour.info.substring(0, 250)}</Card.Text>
                                    )}
                                     <button className="btn" onClick={() => setShowMore(!showMore)} style={{backgroundColor:'orange',fontWeight: 'bold'}}>
                                        {showMore ? "Show less" : "Show more"}
                                    </button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </center>
            </div>
        </>
    );
}
export default TourDetails;