import styled from 'styled-components'

const StyledNavBar = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 2em;

    img {
        max-width: 70px;
        height: auto;
    }

    button {
        border: none;
        background-color: transparent;
        cursor: pointer;
        font-size: 1rem;
    }
`

export default StyledNavBar