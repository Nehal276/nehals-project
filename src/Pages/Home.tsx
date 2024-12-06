import '../App.css';
import './Home.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub, FaBehance } from 'react-icons/fa';
import { Link } from "react-router-dom";


function Home() {
    return (
      <>
      <div className="social-bar">
        <div className="vertical-line"></div>
        <div className="social-icons">
          <a href="mailto:nehal.n.parab@gmail.com"><AiOutlineMail /></a>
          <a href="https://www.linkedin.com/in/nehal-parab-7b498b20b/"><FaLinkedinIn /></a>
          <a href="https://github.com/Nehal276"><FaGithub /></a>
          <a href="https://www.behance.net/nehalparab/moodboards"><FaBehance /></a>
        </div>
        <div className='scroll-container'>
        <div className='scrollindex'>
          <h6> SCROLL TO </h6>
        </div>
        <div className="vertical-line2"></div>
        </div>
      </div>
    <div>
  <Container fluid className="image-container">
    <Row className="align-items-center justify-content-center" style={{ width: '100%', margin: '0' }}>
      <Col md={4} className="d-flex justify-content-center" style={{ padding: '0', marginRight: '15px' }}>
      <div className='image-wrapper'>
        <Image 
          src="https://nehal276.github.io/nehals-project/homepageheadshot.png" 
          fluid 
          className="my-image-class" 
          style={{ marginLeft: '-15px' }} 
        />
        </div>
      </Col>
      <Col md={6} className="d-flex justify-content-center" style={{ padding: '0' }}>
        <div >
          <h6 className='title-text'> Industrial + Interaction and Experience Designer</h6>
          <h2 className='name-text'> Nehal Parab</h2>
          <p>I relish a challenge as it allows me to put my problem-solving skills to use and express
          creatively to come up with solutions while ensuring the quality of my work is exceptional.</p>
          <a href='./Resume_24.pdf'>
          <Button className='cvbutton'variant="outline-dark" style={{ marginRight: '15px' }}>Download CV</Button>
          </a>
          <Link to='/Contact'>
          <Button className='contact-button'variant="outline-dark">Contact</Button>
          </Link>
        </div>
      </Col>
    </Row>
  </Container>

      <Container className="idotext">
          <div>
            <h4 className="whatido-text">What I Do</h4>
          </div>
          <Row className="my-4">
            {/* First Row */}
            <Col md={3} className="d-flex flex-column align-items-center">
              <h5 className="ido-heading">Design Thinking</h5>
              <p className="ido-description">
                Solving problems with a structured, user-centered approach to drive innovation.
              </p>
            </Col>
            <Col md={3} className="d-flex flex-column align-items-center">
              <h5 className="ido-heading">UI/UX Design</h5>
              <p className="ido-description">
                Crafting intuitive user interfaces and seamless experiences.
              </p>
            </Col>
            <Col md={3} className="d-flex flex-column align-items-center">
              <h5 className="ido-heading">Industrial Design</h5>
              <p className="ido-description">
                Creating physical products with functionality and aesthetics in mind.
              </p>
            </Col>
            <Col md={3} className="d-flex flex-column align-items-center">
              <h5 className="ido-heading">Prototyping</h5>
              <p className="ido-description">
                Building prototypes to test and validate ideas efficiently.
              </p>
            </Col>
          </Row>

          <Row className="my-4">
            {/* Second Row */}
            <Col md={3} className="d-flex flex-column align-items-center">
              <h5 className="ido-heading">Interaction Design</h5>
              <p className="ido-description">
                Designing interactive systems to enhance user engagement.
              </p>
            </Col>
            <Col md={3} className="d-flex flex-column align-items-center">
              <h5 className="ido-heading">User Research</h5>
              <p className="ido-description">
                Conducting research to understand user needs and behaviors.
              </p>
            </Col>
            <Col md={3} className="d-flex flex-column align-items-center">
              <h5 className="ido-heading">3D Modeling</h5>
              <p className="ido-description">
                Creating 3D representations for concept and product development.
              </p>
            </Col>
            <Col md={3} className="d-flex flex-column align-items-center">
              <h5 className="ido-heading">Sustainability</h5>
              <p className="ido-description">
                Designing with an emphasis on environmentally friendly solutions.
              </p>
            </Col>
          </Row>
        </Container>
</div>

      </>
    );
  }
  
  export default Home;