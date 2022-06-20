import styled from 'styled-components'

const StyledHeroSection = styled.section`
    height: 600px;
    padding: 1em;
    max-width: 100%;
    background:linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./assets/img/hero-bg-img.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    .hero-text {
        margin-top: 300px;
        color: #fff;
        width: 100%;
        max-width: 700px;

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