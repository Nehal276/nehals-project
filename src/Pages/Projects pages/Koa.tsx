import "./Koa.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const koa = () => {
    return (
      <Container>
      <Row>
      <Col>
      <div>
        <h1 className="project-heading">KOA Vital Monitor</h1>
        <p className="brief-text">To design a home vital monitor for Blood pressure, blood glucose, blood cholesterol and albumin for early detection 
          of gestational diabetes and preeclampsia during and after pregnancy for pregnant women with comorbidities like obesity, diabetes,
           hypertension or history of diabetes/hypertension.</p>
      </div>
      <div>
    <img className="koa-img" src= "./koa1.png">
    </img>
    <br/>
    <img className="koa-img" src= "./koa2.png">
    </img>
    <br/>
    <img className="koa-img-except" src= "./koa3.png">
    </img>
    <br/>
    <br/>
    </div>
    </Col>
    </Row>
    </Container>

    );
  };
  
  export default koa;