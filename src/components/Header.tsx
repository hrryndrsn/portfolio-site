import React from 'react';
import {
  Link
} from 'react-router-dom';
import styled from 'styled-components';

const NavBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const NavItem = styled.div`
  /* padding: 24px; */
`

const Header: React.FC = () => {
  return (
    <NavBar>
        <NavItem>
          <Link to="/"> Work </Link>
        </NavItem>
        <NavItem>
          <Link to="/about"> About </Link>
        </NavItem>
    </NavBar>
  )
}

export default Header;