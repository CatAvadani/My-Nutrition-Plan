import { ExploreStyled } from "./components/styles/Explore.styled";

export default function Explore() {
  return (
    <ExploreStyled>
      <h1>Explore</h1>
      <h2>
        This is the Explore page. Here you can find new recipes and explore
        different cuisines.
      </h2>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        malesuada, libero nec fermentum luctus, odio libero ultricies libero,
        vitae fermentum libero libero sit amet libero. Sed sed libero libero.
        Sed libero libero libero libero libero libero libero libero libero
      </p>
      <img className='homePageImg' src='/public/homePage-img.png' alt='' />
    </ExploreStyled>
  );
}
