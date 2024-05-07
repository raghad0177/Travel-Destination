import { Carousel } from 'react-bootstrap';
import Navbar from '../Navbar/Navbar.js';
const result = require('../../data/db.json');
function Head() {
    return (
        <>
            <header>
                <Navbar />
                <center>
                    <h1 style={{ marginBottom: '20px', paddingTop: '20px' }}>Travel-Destination</h1>
                </center>
                <Carousel style={{marginBottom:'30px'}}>
                    {result.map(tour => (
                        <Carousel.Item >
                            <img
                                className="d-block w-100"
                                src={tour.image}
                                alt="First slide"
                                style={{ height: '600px', width: '500px'}}
                            />
                        </Carousel.Item>
                    ))}
                </Carousel>
            </header>
        </>
    )
}
export default Head;