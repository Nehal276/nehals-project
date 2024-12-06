import "./AppforVitalMonitor.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AppforVitalMonitor() {
  return (
    <Container>
    <Row>
    <Col>

    <div>
        <img className="avm-img" src= "./avm1.png">
        </img>
        <br/>
        <img className="avm-img" src= "./avm2.png">
        </img>
        <br/>
        <img className="avm-img" src= "./avm3.png">
        </img>
        <br/>
        <img className="avm-img" src= "./avm4.png">
        </img>
        <br/>
        <img className="avm-img" src= "./avm5.png">
        </img>
        <br/>
        <img className="avm-img" src= "./avm6.png">
        </img>
        <br/>
        <br/>
        </div>
    </Col>
    </Row>
    </Container>
  );
}

export default AppforVitalMonitor;