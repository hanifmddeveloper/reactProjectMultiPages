import React from 'react'
import { Nav,Navbar,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import logo from "../assets/logo2.jpg"
const Menu = () => {
  return (
    <>
    <Navbar expand="lg" style={{backgroundColor:'aqua'}}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt='logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-5">
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
