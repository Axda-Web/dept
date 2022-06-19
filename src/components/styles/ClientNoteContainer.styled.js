import styled from 'styled-components'

const StyledClientNoteContainer = styled.section`
    padding: 2em;
    background-color: #000;
    color: #fff;
    font-size: 1.125rem;

    article {

        &:not(:last-of-type) {
            border-bottom: 1px solid #646464;
        }

        &:last-of-type .note__title {
            margin-bottom: 0;
        }

        &:not(:first-of-type) .note__brand {
            margin-top: 2rem;
        }
    }

`

export default StyledClientNoteContainer