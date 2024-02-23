import { useOutletContext } from "react-router-dom";
import { Recipe } from "../App";
import InputField from "./InputField";
import { MainContentStyled } from "./styles/MainContentStyled";
import {
  ImgStyled,
  RecipeCard,
  RecipesGridStyled,
} from "./styles/RecipesGridStyled";

interface MainContentProps {
  recipes: Recipe[];
  searchRecipe: string;
  onSearchSubmit: () => void;
  onSearchInput: () => void;
}

export default function MainContent() {
  const { recipes, searchRecipe, onSearchSubmit, onSearchInput } =
    useOutletContext<MainContentProps>();
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
        {recipes.map((recipe, index) => (
          // <motion.div
          //   initial={{ opacity: 0 }}
          //   animate={{ opacity: 1 }}
          //   transition={{ duration: 1 }}
          //   whileHover={{ scale: 1.1 }}
          // >
          <RecipeCard key={index}>
            <ImgStyled>
              <img src={recipe.image} alt={recipe.label} />
            </ImgStyled>
            <h3>{recipe.label}</h3>
            <p className='ingredients'>{recipe.ingredientLines}</p>
            <p>
              <a href={recipe.url} target='_blank' rel='noreferrer'>
                {recipe.source}
              </a>
            </p>
          </RecipeCard>
          // </motion.div>
        ))}
      </RecipesGridStyled>
      <img className='homePageImg' src='/public/homePage-img.png' alt='' />
    </MainContentStyled>
  );
}
