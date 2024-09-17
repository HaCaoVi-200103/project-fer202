import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'; 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import  {Button, Col, Form, InputGroup, Row}  from 'react-bootstrap';
import "bootstrap-icons/font/bootstrap-icons.css";

function Logo() {
  return (
    <Navbar expand="lg" className='bg-dark text-white'>
    <Container >
      <Navbar.Brand className='text-white' href="#home">WebGame G5</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link className='text-white' href="#">STORE</Nav.Link>
          <Nav.Link className='text-white' href="#">COMMUNITY</Nav.Link>
          <Nav.Link className='text-white' href="#">ABOUT</Nav.Link>
          <Nav.Link className='text-white' href="#">SUPPORT</Nav.Link>
        </Nav>
       
      </Navbar.Collapse>
      
      <Row>
        <Col xm={4}>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button style={{background: 'blue'}}>
             <InputGroup>
             <InputGroup.Text style={{background:'blue', 
                                      border:'none',
                                      color:'white'}}><i class="bi bi-search"></i></InputGroup.Text>
             </InputGroup>
             </Button>
          </Form>
        </Col>
      </Row>
      </Container>
  </Navbar>

  )
}

export default Logo;