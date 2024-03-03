import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    margin: 0 ;
    padding-top: 28px; 
    position: relative;
    height: 100%;
    color: ${({ theme }) => theme.colors.text};
    font-family: "Roboto", sans-serif;
    transition: all 0.50s linear;


    @media (min-width: 640px) { 
        padding-top: 32px;
}
    
    @media (min-width: 768px) { 
        padding-top: 36px; 
      }

 }

 #root {
  //height: 100%;
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
