import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
          <NavLink to='/' activeStyle>
            Home
          </NavLink>
          <NavLink to='/education' activeStyle>
            Education
          </NavLink>
          <NavLink to='/experience' activeStyle>
            Experience
          </NavLink>
          <NavLink to='/selfprojects' activeStyle>
            Self-Projects
          </NavLink>

        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;