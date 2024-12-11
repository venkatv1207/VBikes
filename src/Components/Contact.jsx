import "./Contact.css";
function Contact() {
  return (
    <>
      <header>
        <h1>Contact Us</h1>
      </header>
      <div className="container">
        <div className="contact-section">
          <h2>Wed Love to Hear From You</h2>
          <p>
            Have questions, feedback, or need assistance? Our team is here to
            help you!
          </p>
        </div>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
        <div className="contact-info">
          <p>
            <i className="fas fa-envelope"></i>Email: support@vbikes.com
          </p>
          <p>
            <i className="fas fa-phone-alt"></i>Phone: +91 93-456-7890
          </p>
          <p>
            <i className="fas fa-map-marker-alt"></i>Address: 123 Bike Street,
            Hyderabad, Telangana, India
          </p>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.6661000276754!2d78.36444587462803!3d17.4367224013831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91be2a7b7ff5%3A0xb8cc4b1c069b581a!2sTrysol%20Global%20Services%20Pvt%20Ltd!5e1!3m2!1sen!2sin!4v1733907868541!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <footer className="cont">
        <p>&copy; 2024 V-Bikes. Your adventure starts with us.</p>
      </footer>
    </>
  );
}

export default Contact;
