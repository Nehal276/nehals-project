import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Resume.css";

function Resume() {
  return (
    <>
    <Container style={{ marginTop: '2rem' }}>
      <Row>
        <Col md={4}>
        <img className="resume-headshot" src='https://nehal276.github.io/nehals-project/homepageheadshot.png' alt="resume-headshot" />
        <br/>
          <h4>Education</h4>
          <h5>University of Limerick-Ireland</h5>
          <p>Masters in Interaction and Experience Design</p>
          <h5>United World Institute of Design</h5>
          <p>Bachelors in Product Design</p>
          <h5>Nirmala Memorial Foundation College of Science</h5>
          <p>2018-2019</p>
          <h5>Gokuldham High School and Junior Colege</h5>
          <p>2007-2017</p>
          <h4>Analog Skills</h4>
          <li>Conceptualization</li>
          <li>Ideation and Mapping</li>
          <li>Prototyping</li>
          <li>Digital Sketching</li>
          <li>Material Handling</li>
          <li>Team Work</li>
          <li>Time Management</li>
          <li>Concentration</li>
          <li>Visualization</li>
          <br/>

          <h4> Orchid ID</h4>
          <p><a href="https://orcid.org/0000-0002-0428-4958" target= "blank" rel="noopener noreferrer"> https://orcid.org/0000-0002-0428-4958 </a>
          </p>
          <br/>
          <h4>Languages</h4>
          <li>English</li>
          <li>Hindi</li>
          <li>Marathi</li>
        </Col>

    
        <Col md={8}>
        <div className='colouredbox'>
          <h3>Experience</h3>
          
          <h5>IDC-IIT Bombay</h5>
          <p>-May 2023 to June 2023</p>
          <h5>Tata Center of Technology and Design</h5>
          <p>- July 2023 to August 2023</p>
          
          <h3>Achievements</h3>

          <li>Product Showcased in Design Hunt in 2022</li>
          <li>Participation in Design Hackathon(By Doon’s University in Dehradun in year 2023 <br/>
          from 24th to 25th February)</li>
          <li>Mentor of Design Hunt</li>
          <li>Product Showcased in Ahmedabad Design Week 4.0</li>
          <li>Crea Exhibition ( Installation Design )</li>
          <li>Finalist in Taiwan International Students Design Competition</li>
          <li className='line-space'>
            Qualified for Stage 3 in Vishwakarma Awards
            </li>

          <h3>Patents</h3>
         <p>I was part of a few group projects in which we followed a design process which included,</p>
         <li>Brainstorming for new ideas</li>
         <li>Rapid sketching</li>
         <li>Technical component/Mechanism study</li>
         <li>Final Prototyping</li>
         <p className='patent-project'>Patent in process:</p>
         <li>Pediatric Ultrasonic Nebulizer</li>
         <li>A Vital Monitor </li>
         <li>Headgear for Character Armor Design</li>
         <p className='patent-project'> Design Registration in Process:</p>
         <li>Airport Check-in Kiosk</li>
         <li>Smart Travel Lock</li>
         <li>Vital Monitor for Gestational diabetes</li>
         <li>Headgear Design</li>
         <br/>
        
         <h3>Publications</h3>
         <p className='pub-align'>“Chapter 1: Design Research to Understand the Markets: Factors Affecting EV Consumer Behaviour in India"
          In Design Research Case Studies: A Guide to Design Students to Understand Research, 
          edited by Dr.Arunachalam Muthiah, Dr. Kishor Bhanushali, and Dr.Arunita Paul, pg. 03-22. Rajkot,
          Gujarat: VedantPublisher.</p>
          <p> DOI: <a href="https://doi.org/10.58213/iaar003" target="_blank" rel="noopener noreferrer">https://doi.org/10.58213/iaar003</a></p> 
          {/* //target-blank opens link in new tab, nooopener noreferrer improves security while 
          opening links by preventing the new page from accessing the original page// */}
          </div>
        
        </Col>

      </Row>
    </Container>
    
    {/* Footer section placed outside Container */}
    <div className="footer">
        <p>&copy; {new Date().getFullYear()} Nehal Parab. All Rights Reserved.</p>
      </div>
    </>
    
  );
}

export default Resume;
