import styled from 'styled-components'

const StyledClientCard = styled.article`
    height: 500px;
    padding: 1.5em;
    max-width: 100%;
    background:linear-gradient(0deg, rgba(0, 0, 0, .4), rgba(0, 0, 0, .4)), url(${ ({backgroundImg}) => backgroundImg });
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    .card-text {
        color: #fff;

        .card__brand {
            font-size: 1rem;
            margin-bottom: 1em;
            font-weight: 300;
        }

        .card__title {
            font-size: 2rem;
            font-weight: 300;
            line-height: 1.2;
            word-spacing: 5px;
        }

        .card__link {
            display: none;
        }
    }

    @media screen and ( min-width: 768px ){
        .card__link {
            display: block;
        }
    }
`

export default StyledClientCard