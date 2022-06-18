import StyledNavBar from './styles/NavBar.styled'
import Logo from '../assets/img/dept-logo-2022-black.svg'

import { useState } from 'react';


const NavBar = () => {

    const [ showMenu, setShowMenu ] = useState(false)

    const handleClick = () => {

    }

  return (
    <StyledNavBar>
      <img src={Logo} alt="Dept logo" />
      <button onClick={handleClick}>MENU</button>
    </StyledNavBar>
  );
}

export default NavBar;