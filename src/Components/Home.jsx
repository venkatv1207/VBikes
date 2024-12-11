import "./Home.css";

function Home() {
  return (
    <>
      <div className="pimg1"></div>
      <section className="section section-light">
        <h2>V-Bikes</h2>
        <h4>Find the Right Bike</h4>
      </section>
      <div className="pimg2">
        <div className="ptext">
          <span className="border trans"></span>
        </div>
      </div>
      <section className="section section-dark">
        <h2>
          <div className="ptext">
            <span className="border">Motorcycle Fanatic</span>
          </div>
        </h2>
      </section>
      <div className="pimg3">
        <div className="ptext">
          <span className="border trans"></span>
        </div>
      </div>
      <section className="section section-dark">
        <h2>
          <div className="ptext">
            <span className="border">Motorcycle Fanatic</span>
          </div>
        </h2>
      </section>
      <div className="pimg1"></div>
      <footer className="home">
        <h3 className="text">Get in Touch</h3>
        <div className="contact-links">
          <a href="#" target="_blank" className="btn contact-details">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" target="_blank" className="btn contact-details">
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://codepen.io"
            target="_blank"
            className="btn contact-details"
          >
            <i className="fab fa-codepen"></i>
          </a>

          <a href="venkatvadlakonda@gmail.com" className="btn contact-details">
            <i className="far fa-envelope"></i>
          </a>
        </div>
      </footer>
    </>
  );
}
export default Home;
