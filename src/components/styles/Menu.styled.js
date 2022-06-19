import styled from 'styled-components'

const StyledMenu = styled.section`
    position: fixed;
    inset: 0;
    background-color: #000;
    color: #FFF;
    padding: 2em;

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;

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
    }

    .main-nav li {
        text-align: right;
        list-style: none;
        font-size: 2.375rem;
        border-bottom: 1px solid #A3A3A3;
        padding-top: .3em;

        a, a:visited, a:active {
            color: inherit;
            display: flex;
            justify-content: flex-end;
            align-items: center;
        }
    }

    .country-nav {
        display: none;
        position: absolute;
        top: 6,375em;
        left: 3,4375em;

        .heading {
            color: rgba(255, 255, 255, .5);
        }

        li {
            list-style: none;
            padding-top: .3em;

            a, a:visited, a:active {
            color: inherit;
            display: flex;
            align-items: center;
            }
        }
    }

    
    
`

export default StyledMenu