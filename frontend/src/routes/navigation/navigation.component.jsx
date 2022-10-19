import React, { useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';

import { LinkContainer } from 'react-router-bootstrap';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

import Powered from '../../components/powered foooter/powered.component';

import logo from '../../assets/RockDigitalLogo-450px.jpeg';

import './navigation.styles.css';

const Navigation = () => {
  const offCanvasRef = useRef();
  const offsetValue = -56;

  const closeOffcanvas = () => offCanvasRef.current.backdrop.click();

  useEffect(() => {
    const handleScroll = (e) => {
      if (
        document.body.scrollTop > 0 ||
        document.documentElement.scrollTop > 0
      ) {
        document.querySelector('.navbar-brand').classList.add('resize');
      } else {
        document.querySelector('.navbar-brand').classList.remove('resize');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar expand='lg' className='mb-3 sticky-top'>
        <Container fluid>
          <LinkContainer to='/'>
            <Navbar.Brand>
              <img src={logo} alt='' className='img-fluid' />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Offcanvas
            id='offcanvasNavbar-expand'
            aria-labelledby='offcanvasNavbarLabel-expand'
            placement='end'
            ref={offCanvasRef}
          >
            <Offcanvas.Header closeButton>
              <LinkContainer to='/' onClick={closeOffcanvas}>
                <Offcanvas.Title id='offcanvasNavbarLabel-expand'>
                  <img src={logo} alt='' className='img-fluid' />
                </Offcanvas.Title>
              </LinkContainer>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className='justify-content-end flex-grow-1 pe-3'>
                {/* <NavDropdown
                  title='WHO WE SERVE'
                  id='offcanvasNavbarDropdown-expand'
                >
                  <LinkContainer to='/veteran-owned-business-website' onClick={closeOffcanvas}>
                    <NavDropdown.Item>
                      Veteran Owned Businesses
                    </NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Divider />
                  <LinkContainer to='/church-website' onClick={closeOffcanvas}>
                    <NavDropdown.Item>Churches</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Divider />
                  <LinkContainer to='/small-to-large-business-website' onClick={closeOffcanvas}>
                    <NavDropdown.Item>
                      Small to Large Businesses
                    </NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown> 
                <LinkContainer to='/about' onClick={closeOffcanvas}>
                  <Nav.Link>ABOUT US</Nav.Link>
                </LinkContainer>*/}
                <LinkContainer to='/services' onClick={closeOffcanvas}>
                  <Nav.Link>SERVICES</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/portfolio' onClick={closeOffcanvas}>
                  <Nav.Link>PORTFOLIO</Nav.Link>
                </LinkContainer>
                <Nav.Link href='/contact' onClick={closeOffcanvas}>
                  CONTACT US
                </Nav.Link>
                <LinkContainer to='/blog' onClick={closeOffcanvas}>
                  <Nav.Link>BLOG</Nav.Link>
                </LinkContainer>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <Outlet />
      <Powered />
    </>
  );
};

export default Navigation;
