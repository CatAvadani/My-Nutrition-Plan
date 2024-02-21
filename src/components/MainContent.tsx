import InputField from "./InputField";
import { MainContentStyled } from "./styles/MainContentStyled";

export default function MainContent() {
  return (
    <MainContentStyled>
      <h1>Explore New Tastes from Home</h1>
      <h3>
        Your Flavor Story – Recipes That Suit Your Life and Likes. Experience
        the joy of food that's truly yours.
      </h3>
      <InputField />
      <img className='homePageImg' src='/public/homePage-img.png' alt='' />
    </MainContentStyled>
  );
}
