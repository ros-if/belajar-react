import { useState, useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

import { navLinks } from '../index';
import { NavLink } from 'react-router-dom';

const NavbarComponent = () => {
  const [changeColor, setChangeColor] = useState(false);

  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    changeBackgroundColor();

    window.addEventListener('scroll', changeBackgroundColor);
  });

  return (
    <div>
      <Navbar
        className={changeColor ? 'color-active' : ''}
        expand="lg"
      >
        <Container>
          <Navbar.Brand
            className="fs-3 fw-bold"
            href="#home"
          >
            Belajar
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-center">
              {navLinks.map((link) => {
                return (
                  <div
                    className="nav-link"
                    key={link.id}
                  >
                    <NavLink
                      to={link.path}
                      className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active' : '')}
                      end
                    >
                      {link.text}
                    </NavLink>
                  </div>
                );
              })}
            </Nav>

            <div className="text-center">
              <button className="btn btn-outline-danger rounded-1">Join With Us</button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
