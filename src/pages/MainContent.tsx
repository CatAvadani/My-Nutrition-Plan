import { useOutletContext } from "react-router-dom";
import { Recipe } from "../App";
import InputField from "../components/InputField";
import { ButtonSimple } from "../components/styles/ButtonSimple.styled";
import { MainContentStyled } from "../components/styles/MainContent.styled";
import {
  ImgStyled,
  RecipeCard,
  RecipesGridStyled,
} from "../components/styles/RecipesGrid.styled";

// Create a type for the props  of the MainContent component
export interface MainContentProps {
  recipes: Recipe[];
  searchRecipe: string;
  onSearchSubmit: () => void;
  onSearchInput: () => void;
}

export default function MainContent() {
  const { recipes, searchRecipe, onSearchSubmit, onSearchInput } =
    useOutletContext<MainContentProps>();

  const saveRecipeToLocalStorage = (recipeToSave: Recipe) => {
    const savedRecipes = JSON.parse(
      localStorage.getItem("savedRecipes") || "[]"
    );

    const isSaved = savedRecipes.some(
      (savedRecipe: Recipe) => savedRecipe.label === recipeToSave.label
    );
    if (!isSaved) {
      const updatedSavedRecipes = [...savedRecipes, recipeToSave];
      localStorage.setItem("savedRecipes", JSON.stringify(updatedSavedRecipes));
    }
  };

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
            <ButtonSimple onClick={() => saveRecipeToLocalStorage(recipe)}>
              Save
            </ButtonSimple>
          </RecipeCard>
        ))}
      </RecipesGridStyled>
      <img className='homePageImg' src='/homePage-img.png' alt='food-img' />
    </MainContentStyled>
  );
}
