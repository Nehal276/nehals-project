import "./Koa.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Nebulizer= () => {
    return (
      <Container>
      <Row>
      <Col>
      <div>
        <h1 className="project-heading">Nintendo Breathe Pediatric Ultrasonic Nebulizer</h1>
        <p className="brief-text">To redesign a nebulizer by using design cues from Nintendo, a gaming company. Nintendo is known for making 
            people smile, so incorporating that trait into a medical equipment like a nebulizer makes it more user-friendly and children may 
            feel like utilizing it rather than being compelled to do so.  </p>
      </div>
      <div>
    <img className="koa-img" src= "./neb1.png">
    </img>
    <br/>
    <img className="koa-img" src= "./neb2.png">
    </img>
    <br/>
    <img className="koa-img" src= "./neb3.png">
    </img>
    <br/>
    <br/>
    </div>
    </Col>
    </Row>
    </Container>

    );
  };
  
  export default Nebulizer;