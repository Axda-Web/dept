import StyledNavBar from './styles/NavBar.styled'
import { useState } from 'react';

//import logo from '../assets/img/dept-logo-2022-black.svg'



const NavBar = ({ handleMenuBtnClick }) => {

  return (
    <StyledNavBar>
      <img src={'./assets/img/dept-logo-2022-black.svg'} alt="Dept logo" />
      <button onClick={handleMenuBtnClick}>MENU</button>
    </StyledNavBar>
  );
}

export default NavBar;