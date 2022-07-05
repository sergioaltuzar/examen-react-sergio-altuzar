import { Container, Navbar, Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet, Link } from "react-router-dom";
const NavbarE = () => {
  return (
    <>
      <Navbar className="navBg" bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to='/'>Examen Sergio Altuzar</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
              <Nav.Link as={Link} to='/Employees'>Employees</Nav.Link>
              <Nav.Link as={Link} to='/Upload'>Upload</Nav.Link>

              <Nav.Link as={Link} to='/Login'>Login</Nav.Link>

         
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section>
        <Outlet></Outlet>
      </section>
    </>
  );
};

export default NavbarE;
