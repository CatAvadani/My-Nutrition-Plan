import InputField from "./InputField";
import { MainContentStyled } from "./styles/MainContentStyled";
import {
  ImgStyled,
  RecipeCard,
  RecipesGridStyled,
} from "./styles/RecipesGridStyled";

export default function MainContent({
  recipes,
  searchRecipe,
  onSearchSubmit,
  onSearchInput,
}) {
  return (
    <MainContentStyled>
      <h1>Explore New Tastes from Home</h1>
      <h3>
        Your Flavor Story – Recipes That Suit Your Life and Likes. Experience
        the joy of food that's truly yours.
      </h3>
      <InputField
        searchRecipe={searchRecipe}
        onSearchSubmit={onSearchSubmit}
        onSearchInput={onSearchInput}
      />
      <RecipesGridStyled>
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.label}>
            <ImgStyled>
              <img src={recipe.image} alt={recipe.label} />
            </ImgStyled>
            <h3>{recipe.label}</h3>
            {/* <p>{recipe.ingredientLines}</p> */}
            <p>
              <a href={recipe.url} target='_blank' rel='noreferrer'>
                {recipe.source}
              </a>
            </p>
          </RecipeCard>
        ))}
      </RecipesGridStyled>
      <img className='homePageImg' src='/public/homePage-img.png' alt='' />
    </MainContentStyled>
  );
}
