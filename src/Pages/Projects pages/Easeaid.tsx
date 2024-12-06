import "./Koa.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Easeaid = () => {
    return (
      <Container>
      <Row>
      <Col>
      <div>
        <h1 className="project-heading">Ease-Aid</h1>
        <p className="brief-text">Packaging to store and transport bandages to provide improved hygiene and easier application.</p>
      </div>
      <div>
    <img className="koa-img" src= "./ea1.png">
    </img>
    <br/>
    <img className="koa-img" src= "./ea2.png">
    </img>
    <br/>
    <br/>
    </div>
    </Col>
    </Row>
    </Container>

    );
  };
  
  export default Easeaid;