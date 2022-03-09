import { Link, withRouter } from "react-router-dom";
import { Container, Nav, NavDropdown} from "react-bootstrap"
import "../navbar/navbar.css";

function Navbar(props) {
  
  if (props.location.pathname==="/login" || props.location.pathname==="/register") {
    return false;
  }

  return (
    <>
    {/* <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <h1 className="float-start sammly">Sammly</h1>
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
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav d-flex float-end justify-content-end">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/courses">
                Crash Courses
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/trainers">
                Trainers
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/aboutUs">
                About Us
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact Us
              </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to="/login">Log In</Link>
            </li>
           

            <li className="nav-item">
              <Link className="nav-link" to="/register">
                Register
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav> */}
    
    <Nav bg="dark" variant="light">
        <Container className="d-flex">
          <Nav.Link className="sammly" to="/home">
            Sammly
          </Nav.Link>
          <container
            style={{ marginLeft: "400px" }}
            className="d-flex pt-2 align-baseline"
          >
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/courses">Courses</Nav.Link>
            <Nav.Link as={Link} to="/trainers">Trainers</Nav.Link>
            <Nav.Link as={Link} to="/aboutUs">About Us</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <NavDropdown title="Sign" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/login">Log in</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/register">
                Sign Up
              </NavDropdown.Item>

            </NavDropdown>
          </container>
        </Container>
      </Nav>
   



    </>   
  );
}
export default withRouter(Navbar);

