import React from 'react'
import { Nav,Navbar,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <>
    <Navbar expand="lg" style={{backgroundColor:'aqua'}}>
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" >Home</Nav.Link>
             <Nav.Link as={Link}to="/about">About</Nav.Link>
            <Nav.Link as={Link}to="/blog">Blog</Nav.Link>
            <Nav.Link as={Link}to="/services">Services</Nav.Link>
            <Nav.Link as={Link}to="/news">News</Nav.Link>
            <Nav.Link as={Link}to="/contact">Contact</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Container>
  </Navbar>
  </>
  )
}

export default Menu
