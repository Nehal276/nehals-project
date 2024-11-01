import './Projects.css';

function Project() {
  return (
    <div>
      <header className="project-header">
       Projects
      </header>
      <div className='posts'>
                <img className="project-image" src='./Frame 65.png' alt="Nebuliser" />
            </div>
        <p className='project-text'>To redesign a nebulizer by using design cues from Nintendo, a gaming company. Nintendo is known for making people smile, 
          so incorporating that trait into a medical equipment like a nebulizer makes it more user-friendly and children may feel like 
          utilizing it rather than being compelled to do so.  </p>
      
          <div className='posts'>
                <img className="project-image2" src='./Frame 66.png' alt="Vital Monitor" />
            </div>
        <p className='project-text'>To design a home vital monitor for Blood pressure, blood glucose, blood cholesterol and albumin for 
          early detection of gestational diabetes and preeclampsia during and after pregnancy for pregnant women with comorbidities like 
          obesity, diabetes, hypertension or history of diabetes/hypertension.  </p>
          
          <div className='posts'>
                <img className="project-image2" src='./Frame 67.png' alt="Packaging" />
            </div>
        <p className='project-text'>To design a packaging to store and transport bandages to provide improved 
          hygiene and easier application.  </p>
          
          <div className='posts'>
                <img className="project-image2" src='./Frame 110.png' alt="App" />
            </div>
        <p className='project-text'>Connects the patient to the doctor and makes regular consultations with the doctor more convenient,
           while also giving small advices regarding healthcare  </p>

           {/* Footer section placed outside Container */}
      <div className="footer">
        <p>&copy; {new Date().getFullYear()} Nehal Parab. All Rights Reserved.</p>
      </div>
          
      </div>
      
  );
}

export default Project;