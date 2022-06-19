import styled from 'styled-components'

const StyledForm = styled.section`
    background-color: #fff;
    color: #000;
    padding: 3em 2.25em;

    .form-heading {
        font-weight: 300;
        font-size: 1.625rem;
    }

    input, textarea {
        display: block;
        width: 100%;
        border: none;
        border-bottom: 1px solid #DDD;
        resize: none;
    }

    label {
        display: block;
        margin: 2.375em 0 1em;
    }

    input, textarea {
        font-size: 1.125rem;
        font-family: 'Lato', sans-serif;
    }

    .form__btn {
        margin-top: 2.375em;
        font-size: 1.125rem;
        background-color: inherit;
        border: 1px solid black;
        padding: 1em 1.5em;
        border-radius: 50px;
        transition: background-color .3s;

        &:hover {
            color: #fff;
            background-color: #000;
        }
    }

`

export default StyledForm