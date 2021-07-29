import React from 'react'
import {Nav,Container,Navbar} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <div>
            
            <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">HackerNews2.0</Navbar.Brand>
    <Nav className="me-auto">
    <Nav.Link  as={Link} to="/LogIn"> LogIn</Nav.Link>
    <Nav.Link  as={Link} to="/Registration"> Registration</Nav.Link>
    
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>

        </div>
    )
}
