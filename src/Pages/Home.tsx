import '../App.css';
import './Home.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';

function Home() {
    return (
      <>
      <div className="content-wrap">
      <Container fluid className="image-container">
        <Row className="align-items-center" style={{ width: '100%', margin: '0' }}>
          <Col md={4} style={{ padding: '0' }}>
            <Image src="/homepageheadshot.png" fluid  className="my-image-class"/>
          </Col>
          
          <Col md={8} style={{ paddingLeft: '1rem', paddingRight: '0' }}>
            <div style={{ padding: '2rem' }}> {/* Adjust padding as desired */}
              <h2>
                Explore the work of an{' '}
                <span className="gradient-text">Industrial and Experience Designer</span>
              </h2>
              <p>Blending creativity and functionality to shape user experiences</p>
              <br/>
              <br/>
              <br/>
              <br/>
              
              <h2 className="heading" >Hello! I'm Nehal Parab</h2>
              <p>
                I relish a challenge as it allows me to put my problem-solving skills to use and express
                creatively to come up with solutions while ensuring the quality of my work is exceptional.
              </p>
            </div>
          </Col>
        </Row>
        <div className="box-container" >
          <p className="skill-set">
           My area of expertise lies in Product Design and UI/UX Design and here is selection of my work -
          </p>
          <p className='scroller'>
            Scroll down to see more:))
          </p>
          <Carousel className='custom-carousel'>
      <Carousel.Item>
        <ExampleCarouselImage src="/carouselimage2.png" altText="First slide" />
        <Carousel.Caption>
          <h3>Pediatric Nebuliser</h3>
          <h6>User-friendly Ultrasonic Nebulizer</h6>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage src="/carouselimage1.png" altText="First slide" />
        <Carousel.Caption >
          <h3>A Vital Monitor</h3>
          <h6>Specialised for Gestational Diabetes</h6>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage src="/carouselimage3.png" altText="First slide" />
        <Carousel.Caption>
          <h3>Ease-Aid</h3>
          <h6>
            Packaging to store and transport bandages
          </h6>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage src="/carouselimage4.png" altText="First slide" />
        <Carousel.Caption>
          <h3>App for Vital Monitor</h3>
          <h6>Connects patient to doctor and helps in regular consultations</h6>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
      </Container>
      </div>
    
  
        {/* <div className="image-container">
          <div className="centered-text">
            <h2>
              Explore the work of an{' '}
              <span className="gradient-text">Industrial and Experience Designer</span>
            </h2>
            <p>Blending creativity and functionality to shape user experiences</p>
          </div>
          <div className="color-box">
            <img src="globe.png" alt="Globe Logo" className="small-logo" />
            <div className="location-text">
              <p>Located in Ireland</p>
            </div>
          </div>
          <div className="textbox">
            <h2 className="heading">Hello! I'm Nehal Parab</h2>
            <p>
              I relish a challenge as it allows me to put my problem-solving skills to use and express
              creatively to come up with solutions while ensuring the quality of my work is exceptional.
            </p>
          </div>
          <img
            src="/home page headshot.png"
            alt="headshot"
            className="my-image-class"
            style={{ width: '25%', marginTop: '0px' }}
          />
        </div>
  
        <div className="box-container">
          <p className="skill-set">
            I've had the opportunity to work on diverse projects in both product and UI/UX design,
            with a strong focus on the healthcare industry. My experience also includes packaging and
            system design from my internship. Each project has allowed me to blend creativity with
            functionality, always striving to make a meaningful impact.
          </p>
        </div> */}
      </>
    );
  }
  
  export default Home;