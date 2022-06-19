import styled from 'styled-components'

const StyledFooter = styled.footer`
    padding: 3em 2.25em;
    background-color: #000;
    color: #fff;

    a, a:visited, a:active {
            color: inherit;
        }

    .links-container {
        display: flex;
        justify-content: space-between;
        padding-bottom: 2em;
        border-bottom: 1px solid #3E3E3E;

        li {
            list-style: none;
        }

        .nav-container {
            font-size: 1.125rem;

            li {
                margin-bottom: 2.5em;
            }
        }

        .socials-container {
            font-size: 1.875rem;

            li {
                margin-bottom: 1em;
            }
        }
    }

    .legal-container {
        color: #808080;
        font-family: Arial, Helvetica, sans-serif;
        font-size: .8125rem;

        .information {
            margin: 4em 0 2em;
        }
    }
`

export default StyledFooter