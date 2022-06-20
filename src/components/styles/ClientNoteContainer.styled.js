import styled from 'styled-components'

const StyledClientNoteContainer = styled.section`
    padding: 2em;
    background-color: #000;
    color: #fff;
    font-size: 1.125rem;

    article {

        &:first-child {
            border-bottom: 1px solid #646464;
        }

        &:last-of-type {
            display: none;
        }

        &:last-of-type .note__title {
            margin-bottom: 0;
        }

        &:not(:first-of-type) .note__brand {
            margin-top: 2rem;
        }

        @media (min-width: 992px) {

            padding-bottom: 2em;
        
            &:last-of-type {
                display: block;
                padding-bottom: 2em;
            }

            &:not(:last-of-type) {
                border-bottom: 1px solid #646464;
            }
        }
    }

`

export default StyledClientNoteContainer