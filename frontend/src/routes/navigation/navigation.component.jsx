import { useEffect } from 'react';
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
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id='offcanvasNavbarLabel-expand'>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className='justify-content-end flex-grow-1 pe-3'>
                {/* <NavDropdown
                  title='WHO WE SERVE'
                  id='offcanvasNavbarDropdown-expand'
                >
                  <LinkContainer to='/veteran-owned-business-website'>
                    <NavDropdown.Item>
                      Veteran Owned Businesses
                    </NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Divider />
                  <LinkContainer to='/church-website'>
                    <NavDropdown.Item>Churches</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Divider />
                  <LinkContainer to='/small-to-large-business-website'>
                    <NavDropdown.Item>
                      Small to Large Businesses
                    </NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown> */}
                <LinkContainer to='/about'>
                  <Nav.Link>ABOUT US</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/portfolio'>
                  <Nav.Link>PORTFOLIO</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/services'>
                  <Nav.Link>SERVICES</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/blog'>
                  <Nav.Link>BLOG</Nav.Link>
                </LinkContainer>
                <Nav.Link href='/contact'>CONTACT US</Nav.Link>
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
