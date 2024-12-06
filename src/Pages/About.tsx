import './About.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function About() {
  return (
    <div>
    <Container>
      <Col>
    <div>
      <h2 className='about-head1'> What drew me to the world of Product and Experience Design</h2>
    </div>

    <div className='line-button-gif'>
        <button className='circle-ani'>
        <div className='animated-circle'>
            <span className='line'></span>
            <span className='circle2'>
            <img src="./bulb.png" alt="bulb" />
            </span>
          </div>
        </button>
    </div>
    </Col>

    <Col>
    <p className='head1-description'>Design, for me, is a powerful tool to solve real problems and enhance everyday life. <br/>
      I’ve always been drawn to the interplay of creativity and functionality—crafting products <br/>
       that serve a purpose and designing experiences that feel seamless and intuitive.<br/>
      What excites me most is the chance to merge empathy with innovation, whether through <br/>
      creating tangible solutions or bridging the gap between technology and people. For me, <br/> 
      design isn’t just about aesthetics; it’s about impact, purpose, and making life better, <br/>
      one thoughtful creation at a time.</p></Col>
      {/* Row with Text and Image */}
      <Row>
        {/* Text Column */}
        <Col md={6} className='d-flex align-items-top'>
          <div>
            <h3 className='about-head2'>My Design Philosophy</h3>
            <p className='head2-description'>
              My work is grounded in empathy and purpose. I believe that great design starts with
              understanding users' needs and aspirations, translating them into meaningful, functional solutions.
            </p>
          </div>
        </Col>

        {/* Image Column */}
        <Col md={6} className='d-flex justify-content-center'>
          <img
            src="./passionimage_3.png"
            alt="Design illustration"
            className='design-image'
          />
        </Col>
      </Row>
    </Container>

<Container className="help-container">
<div>
  <h4 className="help-mainheading">What I Can Help You With</h4>
</div>
<Row className="my-4">
  {/* First Row */}
  <Col md={4} className="d-flex flex-column align-items-center">
    <h5 className="help-heading">Design Development</h5>
    <p className="help-description">
      Solving problems with a structured, user-centered approach to drive innovation.
    </p>
  </Col>
  <Col md={4} className="d-flex flex-column align-items-center">
    <h5 className="help-heading">Prototyping</h5>
    <p className="help-description">
      Crafting interactive models for efficient understanding
    </p>
  </Col>
  <Col md={4} className="d-flex flex-column align-items-center">
    <h5 className="help-heading">Marketing</h5>
    <p className="help-description">
      Pitching the product to the target audience
    </p>
  </Col>
</Row>
</Container>
</div>

    
    
  );
}

export default About;