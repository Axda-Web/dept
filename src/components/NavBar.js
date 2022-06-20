import StyledNavBar from './styles/NavBar.styled'
import { useState } from 'react';


const NavBar = ({ handleMenuBtnClick }) => {

  return (
    <StyledNavBar id='navbar'>
      <a href="https://www.deptagency.com/">
          <img  className='logo-mobile' src="./assets/img/dept-logo-2022-black.svg" alt="Dept logo" />
          <img  className='logo-desktop' src="./assets/img/dept-logo-2022-white.svg" alt="Dept logo" />
      </a>
      <div className="desktop-nav">
        <nav>
          <ul>
            <li><a href="">WORK</a></li>
            <li><a href="">CULTURE</a></li>
            <li><a href="">SERVICES</a></li>
            <li><a href="">INSIGHTS</a></li>
            <li><a href="">CAREERS</a></li>
            <li><a href="">CONTACT</a></li>
          </ul>
        </nav>
        <button onClick={handleMenuBtnClick} className="menu-icon">
          <img src="./assets/img/menu-icon.svg" alt="" />
        </button>
      </div>
      <button className='mobile-menu' onClick={handleMenuBtnClick}>MENU</button>
    </StyledNavBar>
  );
}

export default NavBar;