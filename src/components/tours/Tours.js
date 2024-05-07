import './Tours.css';
import Tour from './tour/Tour.js';
import { Link } from 'react-router-dom';
const result = require('../../data/db.json');
function Tours() {
  return (
    <>
      <div className="tour-container">
        {result.map(tour => (
          <Link to={`/city/${tour.id}`} style={{ fontSize: '25px', color: 'black', textDecoration: 'none' }}>
            <Tour key={tour.id} name={tour.name} imgPath={tour.image} />
          </Link>
        ))}
      </div>
    </>
  );
}
export default Tours;