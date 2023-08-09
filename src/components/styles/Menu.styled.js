import styled from "styled-components";

const StyledMenu = styled.section`
  position: fixed;
  inset: 0;
  background-color: #000;
  color: #fff;
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
    border-bottom: 1px solid #a3a3a3;
    padding-top: 0.3em;

    a,
    a:visited,
    a:active {
      color: inherit;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      transition: transform 0.3s;

      &:hover {
        transform: translate(-30px);
      }
    }
  }

  .country-nav {
    z-index: 100;
    display: none;
    position: absolute;
    background-color: #000;
    padding: 1em 3em;
    top: 80px;
    left: 0px;

    .heading {
      color: rgba(255, 255, 255, 0.5);
    }

    li {
      list-style: none;
      padding-top: 0.3em;
      transition: transform 0.3s;

      &:hover {
        transform: translate(10px);
      }

      a,
      a:visited,
      a:active {
        color: inherit;
        display: flex;
        align-items: center;
      }
    }
  }

  @media (min-width: 992px) {
    .country-nav {
      display: block;
    }
  }

  @media (min-width: 1200px) {
    .main-nav li {
      font-size: 3.75rem;
    }
  }
`;

export default StyledMenu;
