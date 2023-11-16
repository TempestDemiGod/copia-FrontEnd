import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import imgAlice from "../../assets/Alice.png";
import "./navBar.css";
export const MenuMain = () => {
	return(
    <>
    {[false].map((expand) => (
      <Navbar key={expand} expand={expand} className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">ALICE</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body >
            <div className="logo-navBar">
                <img src={imgAlice} />
              </div>
              <h1 className='title-nav'>Asistente ALICE</h1>
              <div style={{ display: 'block'}}>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Inicio</Nav.Link>
                <Nav.Link href="#action2">Que es Alice</Nav.Link>
                <NavDropdown
                  title="Dropdown"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                >
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
              </div>
              <div className='line01'>
              </div>
              <div className='line02'>
              </div>
              <div className='circle-sup'>
              </div>
              <div className='circle-supmid'>
              </div>
              <div className='circle-medio'>
              </div>
              <div className='circle-medio02'>
              </div>
              <div className='circle-mid'>
              </div>
              <div className='circle-mid02'>
              </div>
              <div className='circle-top'>
              </div>
              <div className='circle-main'>
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    ))}
  </>    
	)
}
export default MenuMain;