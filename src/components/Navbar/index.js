import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { MenuIcon, Nav, NavbarContainer, NavItem, NavLink, NavLogo, NavMenu, NavBtn, 
  // NavBtnLink, 
  ExternalNavBtnLink } from './NavbarElements';

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to='/' onClick={toggleHome}>
              deepdub
          </NavLogo>
            <MenuIcon onClick={toggle}>
              <FaBars />
            </MenuIcon>
            <NavMenu>
              <NavItem>
                <NavLink to='about' smooth={true} duration={500} spy={true} exact='true' offset={5} >About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='discover' smooth={true} duration={500} spy={true} exact='true' offset={5}>Product</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='services' smooth={true} duration={500} spy={true} exact='true' offset={5}>Use Cases</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='signup' smooth={true} duration={500} spy={true} exact='true' offset={5}>Demo</NavLink>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <ExternalNavBtnLink href="https://forms.gle/Tg3xaxBtHrBdLaUc9" target="_blank">Join Waitlist</ExternalNavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
