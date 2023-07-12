import './Header.css';
import {Button, Container, Form, Nav, Navbar} from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown'; 
import {Link} from 'react-router-dom'

import callImg from '../img/call-img.png'
import logo from '../img/logo.png'




function Header() {
  return (
    <>
    <section>
      <Navbar expand="lg" className="navbar fixed-top bg-light">
        <Container fluid>
          <Navbar.Brand class="navbar-brand" as={Link} to={"/"}>
            <img src={logo} alt="logo" width="250px" height="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className='me-auto'>
            <Nav className="nav me-auto my-3 px-4"navbarScroll>
              <Nav.Link className='nav-menu p-3' as={Link} to={"/"} active >Home</Nav.Link>
              <Nav.Link className='nav-menu p-3'as={Link} to={"/courses"}>Courses</Nav.Link>
              <Nav.Link className='nav-menu p-3' as={Link} to={"/universities"}> Universities</Nav.Link>
              <Nav.Link className='nav-menu p-3' as={Link} to={"guide"} > Guide </Nav.Link>
              <NavDropdown title="More" className='nav-menu p-2' id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">About us </NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Blog
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                Contact us 
                </NavDropdown.Item>
              </NavDropdown>
            <Form className="search-top my-1">
              <Form.Control
                type="search"
                placeholder=" 🔍    Search"
                className="border border-dark rounded-5"
                aria-label="Search"
                />
            </Form>
            <div className='nav-right me-auto my-1'>
              <a href="/#"><img src={callImg} className="call-logo" alt="call-img"/></a>
              <Button className='btn-login mx-3'>Log in</Button>
              <Button className='btn-sign'>Sign up</Button>
            </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
    </>
  );
}

export default Header;