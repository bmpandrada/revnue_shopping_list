import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ButtonRev from '../button';

function NavbarRev() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
      <Navbar.Brand href="/">
        <img src='../Revnue-Sticky-Logo.png' alt="Revnue"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Platform" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">test 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">test 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">test 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Platform" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">test 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">test 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">test 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Solutions" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">test 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">test 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">test 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Company" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">test 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">test 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">test 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Resources" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">test 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">test 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">test 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Contact" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">test 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">test 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">test 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <ButtonRev />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarRev;