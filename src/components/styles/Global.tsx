import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: #F3F4F6; 
    color: #1A202C; 
    margin: 0;
    padding-top: 28px; 
    position: relative;
    height: 100vh;
    color: ${({ theme }) => theme.colors.text};
    font-family: "Roboto", sans-serif;
    transition: all 0.50s linear;
    @media (min-width: 640px) { // sm: breakpoint
        padding-top: 36px; // sm:pt-36 equivalent
      }

 }

 * { 
 box-sizing: border-box;
 }

 p { 
     opacity: 0.6;
     line-height: 1.6;
}

img {
    max-width: 100%;
    height: auto;
    }

`;
