import styled from 'styled-components'

const StyledClientNote = styled.article`
    
    .note__brand {
        font-weight: 300;
        margin-bottom: .875em;
    }

    .note__title {
        margin-bottom: 2rem;
    }

    .note__link {
        display: none;
    }

    .note__link img {
        transform: scale(1);
        transition: transform .1s;
    }

    .note__link:hover img {
        transform: scale(1.1);
    }

    @media (min-width: 768px) {

        .note__link {
            display: block;
            font-size: 1.125rem;
            margin-top: 1em;
            padding-bottom: 2em;

            a, a:visited, a:active {
                text-decoration: none;
                color: inherit;
                margin-left: .5em;
            }
        }

        .note__title {
            margin-bottom: .5em;
        }
    }

    @media (min-width: 992px) {
        .note__link {
            padding-bottom: 0;
        }
    }
`

export default StyledClientNote