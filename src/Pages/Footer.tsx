import { useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css';
import { Link } from "react-router-dom";

function Footer() {
  const location = useLocation();
  const isContact = location.pathname === '/Contact';

  return (
    <>
      {!isContact && (
        // to avoid footer on contact page
        <Container fluid className="footer-content text-center text-light py-5">
          <Row className="align-items-center">
            
            <Col xs={12} className="mb-3">
              <h1 className="work-text">Let’s work together</h1>
            </Col>
            <Col xs={12} className="mb-4">
              
              <Link to='/Contact'> <button className="get-in-touch-btn">
                <div className="line-circle">
                  <span className="circle"></span>
                  <span className="arrow-text">Get in touch</span>
                </div>
              </button></Link>
            </Col>
            <Col xs={12} className="footer-contact-buttons">
              <a href="mailto:nehal.n.parab@gmail.com">
                <button className="contact-button">nehal.n.parab@gmail.com</button>
              </a>
              <button className="contact-button">+353 899516796</button>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col xs={6} className="text-start">
              <p className="footer-info">2024 © Edition</p>
            </Col>
            <Col xs={6} className="text-end">
              <p className="footer-info">Local Time: {new Date().toLocaleTimeString()}</p>
            </Col>
          </Row>
          <Row className="social-links mt-4">
            <Col>
              <a href="https://x.com/?lang=en" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
              <a href="https://www.behance.net/nehalparab/moodboards" target="_blank" rel="noopener noreferrer">
                Behance
              </a>
              <a href="https://www.linkedin.com/in/nehal-parab-7b498b20b/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
}

export default Footer;
