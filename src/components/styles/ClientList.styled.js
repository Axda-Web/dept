import styled from 'styled-components'

const StyledClientList = styled.section`
    background-color: #000;
    color: #fff;
    padding: 6em 2em 2em;

    .client-heading {
        font-weight: 300;
        font-size: 2.125rem;
        margin-bottom: 1em;
    }

    .client-text {
        font-size: 1.125rem;
    }

    .client-grid {
        margin: 4em 0;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-items: center;
        column-gap: 100px;
        row-gap: 70px;

        @media (min-width: 860px) {
            grid-template-columns: repeat(3, 1fr);
            margin: 4em;
        }

        .client-logo {
            width: 120px;
            height: auto;

            @media (min-width: 860px) {
                width: 140px;
        }
        }
    }
`

export default StyledClientList