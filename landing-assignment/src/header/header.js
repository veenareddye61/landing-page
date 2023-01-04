import './header.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Header() {
  return (
  
    <Navbar bg="light" sticky="top" expand="lg">
      <Container >
        <Navbar.Brand href="#">Global Logic</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#About">About Us</Nav.Link>
            <Nav.Link href="#Services">Services</Nav.Link>
            <Nav.Link href="#Features">Features</Nav.Link>
            <Nav.Link href="#Projects">Projects</Nav.Link>
            <Nav.Link href="#Contact">Contact Us</Nav.Link>
          </Nav>
          <Nav >
           <Nav.Link className='ficon'></Nav.Link>
           <Nav.Link className='ticon'></Nav.Link>
           <Nav.Link className='iicon'></Nav.Link>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
   
  );
}

export default Header;