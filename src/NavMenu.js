import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from './imgs/logo.png';
//npm install react-icons --save
//import { BsPieChart } from "react-icons/bs";
import { BsMenuButtonWide } from "react-icons/bs";

export default function NavMenu() {
  return (
    <Navbar key={false} 
        bg="primary" 
        variant="dark" 
        expand={false} 
        className="mb-3"
        >
          <Container fluid>
            <Row>
              <Col md={4}>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`} />            
              </Col>
              <Col md={8}>
                <Navbar.Brand href="/">
                  <img
                        src={logo}
                        height='30'
                        width='30'
                        className='d-inline-block'
                        alt='Logo'
                    />{' '}CorpTech Gannt
                </Navbar.Brand>
              </Col>
            </Row>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${false}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
              placement="start"
              // style={{backgroundColor: "#354868", color: "#fff"}}
            >
              <Offcanvas.Header closeButton
              //style={{backgroundColor: "#354868", color: "#fff"}}
              style={{"border-style": "solid", "border-width": "1px", "border-color": "#ddd"}}
              >
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
                  Диаграмма ганта
                </Offcanvas.Title>
              </Offcanvas.Header>
              {/* <hr /> */}
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">                  
                  <Nav.Link href="/">
                    <BsMenuButtonWide style={{color: "green"}} />{' '}
                    Диаграмма ганнта (CorpTech)
                  </Nav.Link>                      
                </Nav>                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
  );
}
