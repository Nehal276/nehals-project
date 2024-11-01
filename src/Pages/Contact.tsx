import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h1 className='contact-header'>Connect with me at :-</h1>
      <div className="contact-content">
        <h2 className='contact-style'>Email ID</h2>
        <p className='connectid'>nehal.n.parab@gmail.com</p>
        <h2 className='contact-style'>LinkedIn ID</h2>
        <p><a className='contact-style' href=" https://www.linkedin.com/in/nehal-parab-7b498b20b/" target="_blank" rel="noopener noreferrer"> https://www.linkedin.com/in/nehal-parab-7b498b20b/</a></p>
        <h2 className='contact-style'>Mobile Number</h2>
        <p className='contact-style'>+353 899516796</p>
       </div>
       {/* Footer section placed outside Container */}
    <div className="footer">
        <p>&copy; {new Date().getFullYear()} Nehal Parab. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Contact;