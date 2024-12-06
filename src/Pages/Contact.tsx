import './Contact.css';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

function Contact() {
  return (
    <div className='contact-box'>
    <Container>
      <Row>
      <Col>
    <div>
      <h1 className='contact-header'>Let's work on a <br/>
        project together</h1>
       </div>
       </Col>
       </Row> 

       <Row> 
        {/* bootstrap form element */}
       <Col className="information-update"md={6}>
       <h6> 01. What's your name?</h6>
       <Form.Control size="lg" type="text" placeholder="Nehal Parab*" />
      <br />
      <h6> 02. What's your email?</h6>
      <Form.Control type="text" placeholder="nehal@example.com*" />
      <br />
      <h6>03. What services are you looking for?</h6>
      <Form.Control type="text" placeholder="Product Designer,Experience Designer*" />
      <br/>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>04. Your message</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Hello Nehal, can you help me with...." />
      </Form.Group>
      </Col> 

      <Col className="personal-information" md={4}>
      <br/>
      <h6>Contact Details</h6>
      <p className='personal-text'> nehal.n.parab@gmail.com</p>
      <p className='personal-text'> +353 899516796</p>

      <br/>
      <h6>Address</h6>
      <p className='personal-text'> Thomond Village, Castletroy <br/>
      Limerick, Ireland</p>

      <br/>
      <h6>Socials</h6>
      <a href="https://www.linkedin.com/in/nehal-parab-7b498b20b/" style={{ textDecoration: 'none' , color: 'black'}}>
      <p className='personal-text'> LinkedIn</p>
      </a>
      <a href="https://www.behance.net/nehalparab/moodboards" style={{ textDecoration: 'none' , color: 'black'}}>
      <p>Behance </p>
      </a>
      <a href="https://www.linkedin.com/in/nehal-parab-7b498b20b/" style={{ textDecoration: 'none' , color: 'black'}}>
      <p>Instagram</p>
      </a>

      </Col> 
       </Row>
       </Container>
       </div>

       
       
  );
}

export default Contact;