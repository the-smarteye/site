import React from 'react';
import styled from 'styled-components';
import Burger from './Burguer';

const Nav = styled.nav`
  width: 100%;
  height: 10vh;
  border-bottom: 2px solid #f1f1f1;
  display: flex;
  justify-content: space-between;
`

const Navbar = () => {
  return (
    <Nav>
      <Burger />
    </Nav>
  )
}

export default Navbar;
