import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: #F3F4F6; // bg-gray-50 equivalent
    color: #1A202C; // text-gray-950 equivalent
    margin: 0;
    padding-top: 28px; // pt-28 equivalent
    position: relative;
    height: 5000px; // Example height, adjust as needed
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
