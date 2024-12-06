import reactLogo from'./assets/UL-Logo-Dark.png';
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from'react-router-dom';


function Topbar() {
  return (
    <>
      <Navbar expand="lg" className="navbar-custom">
        <Container>
          {/* Display the logo */}
          <Navbar.Brand href="/"> 
            <img
              src={reactLogo}
              alt="UL Logo"
              width="110"
              height="60"
              className="d-inline-block align-middle"
            />
          </Navbar.Brand> 

          <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {/* Update Nav.Link to Link */}
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/About">About</Link>
              <Link className="nav-link" to="/Resume">Resume</Link>
              <Link className="nav-link" to="/Projects">Projects</Link>
              <Link className="nav-link" to="/Gallery">Gallery</Link>
              <Link className="nav-link" to="/Blog">Blog</Link>
              <Link className="nav-link" to="/Contact">Contact</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Topbar;
