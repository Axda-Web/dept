import styled from 'styled-components'


const StyledSubHeroSection = styled.section`
    padding: 1.5em;
    background-color: #000;
    color: #646464;
    display: flex;
    justify-content: space-between;

    p {
        padding: 1em 0;
    }

    a, a:active, a:visited {
        color: #fff;
    }

    @media (min-width: 992px) {
        background-color: #fff;

        p {
            font-size: 1.125rem;
            padding: 0.3em;
        }

        a {
            transform: scale(1);
        }

        a, a:active, a:visited {
            color: #000;
            text-decoration: underline;
            text-underline-offset: 2px;
        }

        .second-paragraph {
            order: 1;
        }

        .first-paragraph {
            order: 2;
        }
    }

    @media (min-width: 1200px) {
        p {
            font-size: 1.625rem;
            padding: 0.3em;
        }
    }
`

export default StyledSubHeroSection