import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
            width={"40px"}
            className="navbar-logo me-2"
            style={{ margin: "10px" }}
          />

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible Menu */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link navs">
                  Home
                </Link>
              </li>
              <li className="nav-item ">
                <Link to="products" className="nav-link navs">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link to="about" className="nav-link navs">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="contact" className="nav-link navs">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default NavBar;
