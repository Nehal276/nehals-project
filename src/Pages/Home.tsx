import '../App.css';
import './Home.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';

// Import images directly
import headshotImage from '../public/home page headshot.png';
import carouselImage1 from '../public/carouselimage1.png';
import carouselImage2 from '../public/carouselimage2.png';
import carouselImage3 from '../public/carouselimage3.png';
import carouselImage4 from '../public/carouselimage4.png';

function Home() {
    return (
      <>
      <div className="content-wrap">
        <Container fluid className="image-container">
          <Row className="align-items-center" style={{ width: '100%', margin: '0' }}>
            <Col md={4} style={{ padding: '0' }}>
              <Image src={headshotImage} fluid className="my-image-class" />
            </Col>
            
            <Col md={8} style={{ paddingLeft: '1rem', paddingRight: '0' }}>
              <div style={{ padding: '2rem' }}>
                <h2>
                  Explore the work of an{' '}
                  <span className="gradient-text">Industrial and Experience Designer</span>
                </h2>
                <p>Blending creativity and functionality to shape user experiences</p>
                <br/><br/><br/><br/>
                
                <h2 className="heading">Hello! I'm Nehal Parab</h2>
                <p>
                  I relish a challenge as it allows me to put my problem-solving skills to use and express
                  creatively to come up with solutions while ensuring the quality of my work is exceptional.
                </p>
              </div>
            </Col>
          </Row>
          
          <div className="box-container">
            <p className="skill-set">
              My area of expertise lies in Product Design and UI/UX Design, and here is a selection of my work:
            </p>
            <p className="scroller">Scroll down to see more:))</p>
            
            <Carousel className="custom-carousel">
              <Carousel.Item>
                <ExampleCarouselImage src={carouselImage2} altText="First slide" />
                <Carousel.Caption>
                  <h3>Pediatric Nebuliser</h3>
                  <h6>User-friendly Ultrasonic Nebulizer</h6>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <ExampleCarouselImage src={carouselImage1} altText="Second slide" />
                <Carousel.Caption>
                  <h3>A Vital Monitor</h3>
                  <h6>Specialized for Gestational Diabetes</h6>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <ExampleCarouselImage src={carouselImage3} altText="Third slide" />
                <Carousel.Caption>
                  <h3>Ease-Aid</h3>
                  <h6>Packaging to store and transport bandages</h6>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <ExampleCarouselImage src={carouselImage4} altText="Fourth slide" />
                <Carousel.Caption>
                  <h3>App for Vital Monitor</h3>
                  <h6>Connects patient to doctor and helps in regular consultations</h6>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </Container>
      </div>
      </>
    );
}

export default Home;
