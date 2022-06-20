import styled from 'styled-components'

const StyledFooter = styled.footer`

    .footer-container {
        padding: 3em 2.25em;
        background-color: #000;
        color: #fff;
    }

    .arrow-top-container {
        display: none;
    }

    a, a:visited, a:active {
            color: inherit;
        }

    .links-container {
        display: flex;
        justify-content: space-between;
        padding-bottom: 2em;
        border-bottom: 1px solid #3E3E3E;

        .logo {
            display: none;

            img {
                width: 70px;
                height: auto;
            }
        }

        li {
            list-style: none;
        }

        .nav-container {
            font-size: 1.125rem;

            li {
                margin-bottom: 2.5em;
                transform: scale(1);
                transition: transform .1s;

                &:hover {
                    transform: scale(1.05);
                }
            }
        }

        .socials-container {
            font-size: 1.875rem;

            li {
                margin-bottom: 1em;
                transform: scale(1);
                transition: transform .1s;

                &:hover {
                    transform: scale(1.1);
                }
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

    @media (min-width: 768px) {
        .links-container {
            justify-content: flex-start;
            align-items: baseline;
            column-gap: 7em;
            padding-bottom: 0;

            .logo {
                display: block;
            }

            .nav-container {
                display: flex;
                column-gap: 1em;
            }

            .socials-container {
                display: none;
                }    
        }
    

        .legal-container {
            font-size: .8125rem;
            display: flex;
            justify-content: space-between;
            align-items: baseline;

            .information {
                display: flex;
                column-gap: 2em;
                margin-top: 3em;
            }
        }
    }

    @media (min-width: 992px) {
        display: flex;

        .footer-container {
            width: 100%;
        }

        .arrow-top-container {
            font-size: 1.125rem;
            width: 120px;
            background-color: #fff;
            color: #5115F7;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            img {
                padding: .5em 1em;
            }
        }
    }

    @media (min-width: 1200px) {
        .legal-container {
            font-size: 1rem;
        }
    }

`

export default StyledFooter