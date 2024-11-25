import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './VideographyPost.css'

function VideographyPost() {
  return (
    <Container>
      <Row>
        <div className='videographyhead'>
          <img className='video-head' src='./videography-header.png'></img>
        </div>
      </Row>
      <Row>
        <div className='video-text'>
          <h5> Meet the Venture Bag: The Art of Product Stroytelling</h5>
          <p>Product shoots are not just about capturing the features of an item, its about telling a story that resonates with the audience. 
            In our recent group project, we decided to shoot a product showcase video for a compact venture travel bag. Our goal was to not only
             highlight its physical features but also present the bag in various kinds of outdoor settings and backgrounds to show its 
             adaptability in different scenarios. As I was handling the continuity of the video, I had to pay sharp focus on each scene to 
             make sure that it feels seamless and cohesive and leaves no room for distraction. Let me show you through the behind the 
             scenes of how we shoot the video with continuity as one of the guiding principles.
             <br/>
             <br/>
             Venture Bag is more than just a travel bag but a multifunctional companion. It consists of different compartments for shoes, laptop 
             (or any other electronic devices), and even a charging port. It offers practicality with sleek design. These were the key aspects of 
             the product that we wanted to focus on when it came to making a short form product showcase video. One of our challenges were to 
             highlight all these different aspect with proper transitions while preventing distractions and a disjointed narrative. We went ahead 
             with deciding all the shots that we needed to capture with locations. All props and colour contrasts were taken into consideration. 
             The next thing to do was storyboarding to have a perfect visual representation of all the angles that we would like to explore and 
             create a seamless and engaging storyline.
             <br/>
             <br/>
             Consistency was maintained by ensuring that the same compartments were showcased in all the shots without missing details. All the 
             other props used to highlight the bag were maintained in all the scenes at similar positions. This gave a sense of flow to the video.
             The bag angles and orientations were looked open in all the transitions. Each compartment was assigned a dedicated shot as well.
             When it came to locations, we chose backgrounds which were in contrast with the product to complement the bag’s aesthetics. Angles 
             for the outdoor shot were chosen in such a way that the background remains constant with not many changes to ensure the flow of the
             video. Before each take, I ensured that the bag’s compartments were properly arranged and that it looks similar in width. 
             Furthermore, we took various shots to make sure that we have a couple to chose from when it comes to editing. 
             <br/>
             <br/>
             In post-production, we focused on smooth transitions between all the scenes, ensuring that the bag’s features were visually anchored 
             throughout. The final result was a story of a bag that is adaptable to all the different activities throughout the day. 
             </p>
        </div>
        <div className="gallery-container">
      <div className="gallery-item">
        <img src='./vidpost1.jpeg' alt='Vidpost1' />
        <div className="overlay">
        </div>
      </div>
      <div className="gallery-item">
        <img src='./vidpost2.jpeg' alt='Vidpost2' />
        <div className="overlay">
        </div>
      </div>
      <div className="gallery-item">
        <img className='vidpost3'src='./vidpost3.png' alt='Vidpost3' />
        <div className="overlay">
        </div>
      </div>
    </div>
      </Row>
      <Row>
      <div className="video-box">
          <iframe 
            className="youtube-video" 
            src="https://www.youtube.com/embed/CFGLoQIhmow" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
        
      </Row>
    </Container>
    
  );
  }

  export default VideographyPost;
  