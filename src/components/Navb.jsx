import React from 'react'
import { Container,Nav,Navbar,NavDropdown,Form,Row,Col,Button } from 'react-bootstrap';
import './Navb.css';

function Navb() {
  return (
    <>
        <Navbar bg="dark" data-bs-theme="dark" sticky="top">
            <Container>
            <Navbar.Brand href="#home">
                <img
                src="https://images.squarespace-cdn.com/content/v1/5ab93d58365f02e76116f3d6/1622578858868-H2OQRGZ63AE0WPTQHSCK/Prime_Video_Logo.png"
                width="60"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
                />
            </Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Store</Nav.Link>
                <Nav.Link href="#live">Live TV</Nav.Link>
                <Nav.Link href="#category">Categories
                    {/* <NavDropdown  id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                    </NavDropdown> */}
                </Nav.Link>
                <Nav.Link href="#mycollect">My Stuff</Nav.Link>
                <Form inline>
                    <Row>
                        <Col xs="auto">
                            <Button type="submit" id="free">Try for free</Button>
                        </Col>
                        
                    </Row>
                </Form>
            </Nav>
            </Container>
        </Navbar>
    </>
  )
}

export default Navb