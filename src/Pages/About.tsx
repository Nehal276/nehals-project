import './About.css';

function About() {
  return (
    <div className="about-container">
      <h1 className='about-header'>About Me</h1>
      <img className='aboutimg' src='https://nehal276.github.io/nehals-project/passionimage_3.png' alt="Header" />
      <div className="contact-content">
        <h4 className='h4design'> What I think</h4>
        <p className='pdesign'> Embracing innovation, design has been my unwavering companion ever since I chose to embark on a career 
            in Product Design. I believe that design stands as a paramount catalyst for shaping a better future. What truly 
            excites me about being a designer is its boundless applicability across diverse sectors; from the realms of toy 
            industries to the critical landscapes of medical design, the versatility of design knows no bounds. </p>
        <h4 className='h4design'> My Personal Journey</h4>
        <p className='pdesign'> My journey of design has been fueled by an urge to create positive change through the medium of design across various
            feilds. I have always been inetrested in merging functionality and design which has got me this far and I aspire to do 
            much more. My main goal is to make a meaningful impact through whatever facilities I have, within my community. </p>
       </div>
       {/* Footer section placed outside Container */}
    <div className="footer">
        <p>&copy; {new Date().getFullYear()} Nehal Parab. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default About;