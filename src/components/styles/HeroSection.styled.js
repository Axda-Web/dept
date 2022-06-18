import styled from 'styled-components'
import heroBackgroundImg from '../../assets/img/hero-bg-img.jpg'

const StyledHeroSection = styled.section`
    height: 500px;
    padding: 1em;
    max-width: 100%;
    background:linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroBackgroundImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    .hero-text {
        margin-top: 200px;
        color: #fff;

        p {
            margin-bottom: 1.5em;
        }

        h1 {
            font-size: 2.5rem;
            font-weight: 300;
            line-height: 1.2;
            word-spacing: 5px;
        }
    }
`

export default StyledHeroSection