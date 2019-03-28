import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { NavLink, withRouter } from 'react-router-dom';

const NavBar = props => {
  const { location: { pathname } = {} } = props;
  const logout =
    pathname === '/products' ? <NavLink to="/login">Logout</NavLink> : null;
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink to="/">Store Manager</NavLink>
        <Nav className="ml-auto">{logout}</Nav>
      </Container>
    </Navbar>
  );
};

export default withRouter(NavBar);
