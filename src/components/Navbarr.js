import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
function Navbarr() {
  return (
    <div>
           <Navbar bg="primary" data-bs-theme="dark">
        <Container>
        
          <Nav className="me-auto">
          <Nav.Link href="#pricing"><Link style={{textDecoration:"none", color:"white"}} to="/">Lundi</Link></Nav.Link>
          <Nav.Link href="#pricing"><Link style={{textDecoration:"none", color:"white"}}   to="/mardi">Mardi</Link></Nav.Link>
          <Nav.Link href="#pricing"><Link style={{textDecoration:"none", color:"white"}}  to="/mercredi">Mercredi</Link></Nav.Link>
            <Nav.Link href="#pricing"><Link style={{textDecoration:"none", color:"white"}}  to="/jeudi">Jeudi</Link></Nav.Link>
            <Nav.Link href="#pricing"><Link style={{textDecoration:"none", color:"white"}}  to="/vendredi">Vendredi</Link></Nav.Link>
            <Nav.Link href="#pricing"><Link style={{textDecoration:"none", color:"white"}}  to="/samedi">Samedi</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navbarr