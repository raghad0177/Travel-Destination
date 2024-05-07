import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link} from 'react-router-dom';
function NavbarComponent() { // Changed the function name to start with a capital letter
  return (
    <Navbar style={{ paddingLeft: '20px', backgroundColor: '#CC6633' }}>
      <Navbar.Brand style={{ fontSize: '32px' }}>Travel-Destination</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link to="/" style={{ fontSize: '25px', color: 'black', textDecoration: 'none' }}>Home</Link>
        </Nav>
      </Navbar.Collapse>
     
    </Navbar>
  );
}
export default NavbarComponent;

