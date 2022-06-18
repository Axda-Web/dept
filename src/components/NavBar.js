import StyledNavBar from './styles/NavBar.styled'
import { useState } from 'react';

//import logo from '../assets/img/dept-logo-2022-black.svg'



const NavBar = () => {

    const [ showMenu, setShowMenu ] = useState(false)

    const handleClick = () => {

    }

  return (
    <StyledNavBar>
      <img src={'./assets/img/dept-logo-2022-black.svg'} alt="Dept logo" />
      <button onClick={handleClick}>MENU</button>
    </StyledNavBar>
  );
}

export default NavBar;