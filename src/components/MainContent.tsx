import InputField from "./InputField";
import { MainContentStyled } from "./styles/MainContentStyled";

export default function MainContent() {
  return (
    <MainContentStyled>
      <h1>Explore New Tastes from Home</h1>
      <h3>
        Customize Your Culinary Journey — Recipes for Every Diet and Preference
      </h3>
      <InputField />
      <img className='homePageImg' src='/public/homePage-img.png' alt='' />
    </MainContentStyled>
  );
}
