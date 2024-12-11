import "./About.css";
function About() {
  return (
    <>
      <header>
        <h1>About Us</h1>
      </header>
      <div className="container">
        <div className="about-section">
          <h2>Welcome to V-Bikes</h2>
          <p>
            At V-Bikes, we are passionate about creating high-quality bikes that
            combine innovation, performance, and style. Since our inception,
            weve been dedicated to helping riders of all levels enjoy their
            journeys, whether they are commuting in the city or exploring rugged
            trails.
          </p>
        </div>
        <div className="team-section">
          <div className="team-member">
            <img src="https://via.placeholder.com/100" alt="Team Member" />
            <h3>Venkat Vadlakonda</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/100" alt="Team Member" />
            <h3>ShivaPrasad</h3>
            <p>Chief Designer</p>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/100" alt="Team Member" />
            <h3>Phanindra</h3>
            <p>Head of Engineering</p>
          </div>
        </div>
      </div>
      <footer className="about">
        <p>
          &copy; 2024 <i>V-Bikes</i>. All Rights Reserved.
        </p>
      </footer>
    </>
  );
}

export default About;
