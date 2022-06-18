import StyledNavBar from './styles/NavBar.styled'

import { useState } from 'react';


const NavBar = () => {

    const [ showMenu, setShowMenu ] = useState(false)

    const handleClick = () => {

    }

  return (
    <StyledNavBar>
      <img src="/src/assets/img/dept-logo-2022-black.png" alt="Dept logo" />
      <button onClick={handleClick}>MENU</button>
    </StyledNavBar>
  );
}

export default NavBar;