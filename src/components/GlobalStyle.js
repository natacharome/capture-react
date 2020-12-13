// In order to use Global Style
import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
// darker blue : #1e2334
// dark blue: #2c3049
// vif blue : #415eff
// green : #23d997
// gray-blue : #babbd6


*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Quicksand', sans-serif;
}

body {
    background: #1e2334;
    overflow-x: hidden;
}

button {
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #415eff;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    &:hover {
        background-color: #415eff;
        color: white;
    }
}

h2 {
    font-weight: lighter;
    font-size: 4rem;
}

h3 {
    color: white;
}

h4 {
    font-size: 2rem;
    font-weight: bold; 
}

span {
    font-weight: bold; 
    color: #415eff;
}

p {
    padding: 3rem 0rem;
    color: #babbd6;
    font-size: 1.4rem;
    line-height: 150%;
}

`;

export default GlobalStyle;