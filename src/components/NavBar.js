import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink to="/">Store Manager</NavLink>
      </Container>
    </Navbar>
  );
};

export default NavBar;
