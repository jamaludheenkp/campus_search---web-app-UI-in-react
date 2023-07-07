import './Header.css';
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

import Image from '../img/call-img.png'
import logo from '../img/logo.jpeg'


function Header() {
  return (
    <>
      <Navbar expand="lg" className="bg-white">
        <Container fluid>
          <Navbar.Brand class="navbar-brand" href="#">
               <img src={logo} alt="logo" width="300px" height="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="nav me-auto my-4 my-lg-0 p-3"navbarScroll>
              <Nav.Link className='nav-menu px-3' href="#" active >Home</Nav.Link>
              <Nav.Link className='nav-menu px-3'href="#course">Courses</Nav.Link>
              <Nav.Link className='nav-menu px-3' href="#university"> Universities</Nav.Link>
              <Nav.Link className='nav-menu px-3' href="#guide"> Guide </Nav.Link>
              <Nav.Link className='nav-menu px-3' href="#more"> More </Nav.Link>
              {/* <NavDropdown title="More" className='nav-menu px-3'                id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else
                </NavDropdown.Item>
              </NavDropdown> */}
            <Form className="search-bar">
              <Form.Control
                type="search"
                placeholder=" 🔍    Search"
                className="border border-dark rounded-5"
                aria-label="Search"
              />
            </Form>
            <div className=''>
            <a href="/#"><img src={Image} className="call-logo" alt="call-img"/></a>
            </div>
            <div>
              <button type='button' className='btn mx-3'> Log in</button>
              <button type='button' className='btn btn-outline-primary'>Sign up</button>
            </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;