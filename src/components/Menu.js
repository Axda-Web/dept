import StyledMenu from './styles/Menu.styled'

import { MdOutlineClose } from 'react-icons/md'
import { BiPlay } from 'react-icons/bi'

const iconStyles = {
  color: '#FFF',
  fontSize: '2.5rem'
}

const Menu = ({handleMenuBtnClick}) => {
    return (
      <StyledMenu>
        <header>
          <img src={'./assets/img/dept-logo-2022-white.svg'} alt="Dept logo" />
          <button onClick={handleMenuBtnClick}><MdOutlineClose style={iconStyles} /></button>
        </header>
        <nav>
          <ul className='main-nav'>
            <li><a href=""><BiPlay style={iconStyles} /> HOME</a></li>
            <li><a href="">WORK</a></li>
            <li><a href="">CULTURE</a></li>
            <li><a href="">SERVICES</a></li>
            <li><a href="">PARTNERS</a></li>
            <li><a href="">STORIES</a></li>
            <li><a href="">CAREERS</a></li>
            <li><a href="">EVENTS</a></li>
            <li><a href="">CONTACT</a></li>
          </ul>

          <div className='country-nav'>
            <p className='heading'>Landen</p>
            <ul>
              <li><a href="">GLOBAL</a></li>
              <li><a href=""><BiPlay style={{color: '#FFF', fontSize: '1.3rem'}} /> NEDERLAND</a></li>
              <li><a href="">UNITED STATES</a></li>
              <li><a href="">IRELAND</a></li>
              <li><a href="">UNITED KINGDOM</a></li>
              <li><a href="">DEUTSCHLAND</a></li>
              <li><a href="">SCHWEIZ</a></li>
            </ul>
          </div>
        </nav>
      </StyledMenu>
    );
  }
  
  export default Menu;