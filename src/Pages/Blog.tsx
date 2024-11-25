import './Blog.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

function Blog() {
  return (
    <div className='blog-container'>
      
      <div className='headerTitleLg'> 
        BLOG
      </div>

      <Container>
        <Row>
          <Col>
          <h3 className='video-header'> Video Production</h3>
          <div className='videography-post'>
          <Link to="/videography-post">
            <img className='video-cover' src='https://nehal276.github.io/nehals-project/videography-cover.png' alt="Video cover"></img>
            </Link>
          </div>
          </Col>
        </Row>
      </Container>

      <Container>
      <h3 className='photo-header'> Photography Series</h3>
        <Row>
          <Col>
            <div className='posts'>
              <Link to="/business-headshot">
                <img className="post-image" src='https://nehal276.github.io/nehals-project/image1.png' alt="Business Headshot" />
              </Link>
            </div>
            <br/>
            <h5 className='pic-header'>Business Headshot</h5>
          </Col>
          <Col>
            <div className='posts'>
              <Link to="/dramatic-shot">
                <img className="post-image" src='https://nehal276.github.io/nehals-project/image2.png' alt="Dramatic Shot" />
              </Link>
            </div>
            <br/>
            <h5 className='pic-header'>Dramatic Shot</h5>
          </Col>
          <Col>
            <div className='posts'>
              <Link to="/passion-image">
                <img className="post-image" src='https://nehal276.github.io/nehals-project/image3.png' alt="Passion Image" />
              </Link>
            </div>
            <br/>
            <h5 className='pic-header'>Passion Image</h5>
          </Col>
        </Row>
      </Container>
      {/* Footer section placed outside Container */}
      <div className="footer">
        <p>&copy; {new Date().getFullYear()} Nehal Parab. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Blog;
