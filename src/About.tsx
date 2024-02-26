import { AboutStyled } from "./components/styles/About.styled";

export default function About() {
  return (
    <AboutStyled>
      <h1>About Us</h1>
      <h3>
        We are a team of food enthusiasts who love to cook and share our recipes
        with the world. We believe that food is a universal language that brings
        people together and we want to share our passion with you.
      </h3>
      <img className='homePageImg' src='/homePage-img.png' alt='' />
    </AboutStyled>
  );
}
