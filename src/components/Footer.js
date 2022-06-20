import StyledFooter from "./styles/Footer.styled"

import { FaFacebookF, FaTwitter } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'

const Footer = () => {

    return (
        <StyledFooter>
            <div className="footer-container">
                <div className="links-container">

                    <a className="logo" href="https://www.deptagency.com/">
                        <img  src="./assets/img/dept-logo-2022-white.svg" alt="Dept logo" />
                    </a>

                    <ul className="nav-container">
                        <li><a href="">WORK</a></li>
                        <li><a href="">SERVICES</a></li>
                        <li><a href="">STORIES</a></li>
                        <li><a href="">ABOUT</a></li>
                        <li><a href="">CAREERS</a></li>
                        <li><a href="">CONTACT</a></li>
                    </ul>

                    <ul className="socials-container">
                        <li><a href="https://www.facebook.com/DeptAgency/"><FaFacebookF /></a></li>
                        <li><a href="https://twitter.com/DeptAgency?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><FaTwitter /></a></li>
                        <li><a href="https://www.instagram.com/deptagency/?hl=en"><AiFillInstagram /></a></li>
                    </ul>

                </div>
                <div className="legal-container">
                    <div className="information">
                        <p>Chamber of Commerce: 63464101</p>
                        <p>VAT: NL 8552.47.502.B01</p>
                        <p><a href="">Terms and conditions</a></p>
                    </div>
                    <p className="copyright">&copy; 2022 Dept Agency</p>
                </div>
            </div>
            <div className="arrow-top-container">
                <a href="#navbar">
                    <img src="./assets/img/arrow-up.svg" alt="" />
                </a>
                <p>TOP</p>
            </div>
            
        </StyledFooter>
    )
}

export default Footer