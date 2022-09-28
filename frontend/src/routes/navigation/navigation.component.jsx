import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

import logo from '../../assets/RockDigitalLogo-450px.jpeg';

import './navigation.styles.scss';

const Navigation = () => {
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
          <Navbar.Brand href='#'>
            <img src={logo} alt='' className='img-fluid' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Offcanvas
            id='offcanvasNavbar-expand'
            aria-labelledby='offcanvasNavbarLabel-expand'
            placement='end'
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id='offcanvasNavbarLabel-expand'>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className='justify-content-end flex-grow-1 pe-3'>
                <NavDropdown
                  title='WHO WE SERVE'
                  id='offcanvasNavbarDropdown-expand'
                >
                  <NavDropdown.Item href='#action3'>Action</NavDropdown.Item>
                  <NavDropdown.Item href='#action4'>
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href='#action5'>
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href='#action2'>ABOUT US</Nav.Link>
                <Nav.Link href='#action3'>PORTFOLIO</Nav.Link>
                <Nav.Link href='#action3'>SERVICES</Nav.Link>
                <Nav.Link href='#action3'>BLOG</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
};

export default Navigation;
