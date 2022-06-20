import styled from 'styled-components'

const StyledNavBar = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2em;
    background-color: #FFF;

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

    .mobile-menu {
        transform: scale(1);
        transition: transform .2s;

        &:hover {
            transform: scale(1.1);
            text-decoration: underline;
            text-underline-offset: 3px;
        }
    }

    .desktop-nav {
        display: none;
        justify-content: flex-end;
        align-items: center;
        column-gap: 100px;
        color: #FFF;
        font-size: 1.125rem;

        .logo-desktop {
            display: none;
        }

        ul {
            display: flex;
            column-gap: 2.5em;
        }

        li {
            list-style: none;
            transform: scale(1);
            transition: transform .3s;

            &:hover {
                transform: scale(1.1);
            }

            a, a:visited, a:active {
                color: #FFF;

                &:hover {
                    text-decoration: underline;
                    text-underline-offset: 3px;
                }
            }
        }

        .menu-icon {
            display: block;
            text-decoration: none;
            cursor: pointer;
            transform: scale(1);
            transition: transform .3s;

            &:hover {
                transform: scale(1.1);
            }
        
        }
    }

    @media (min-width: 992px) {
        background-color: #000;
        padding: 2.5em;

        .logo-desktop {
            display: block;
            max-width: 85px;
            height: auto;
        }

        .logo-mobile {
            display: none;
        }

        button {
            display: none;
        }

        .desktop-nav {
            display: flex;
        }
    }
`

export default StyledNavBar