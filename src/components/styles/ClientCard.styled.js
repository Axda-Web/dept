import styled from 'styled-components'

const StyledClientCard = styled.article`
    min-height: 500px;
    max-height: 800px;
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
            font-size: 1.625rem;
            font-weight: 300;
            line-height: 1.2;
            word-spacing: 5px;
            max-width: 80%;
        }

        .card__link {
            display: none;
            margin-top: 1em;
            font-size: 1rem;

            img {
                transform: scale(1);
                transition: transform .1s;
            }
            
            &:hover img {
                transform: scale(1.1);
            }

            a, a:visited, a:active {
                color: inherit;
                margin-left: .5em;
            }
        }
    }

    @media (min-width: 768px) {
        .card__link {
            display: block !important;
        }
        .card__title {
            font-size: 2.125rem;
        }
    }

    @media (min-width: 1200px){

        min-height: 600px;

        .card__brand {
            font-size: 1rem;
        }

        .card__title {
            font-size: 3rem !important;
        }

        .card__link {
        }
    }
`

export default StyledClientCard