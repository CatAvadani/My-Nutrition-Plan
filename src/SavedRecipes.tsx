import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Recipe } from "./App";
import { FontAwesomeIcon } from "./components/styles/FooterStyled";
import {
  CenterDiv,
  SavedRecipeCard,
  SavedRecipesStyled,
} from "./components/styles/SavedRecipesStyled ";

export const SavedRecipesComponent = () => {
  const [savedRecipes, setSavedRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const recipes = JSON.parse(localStorage.getItem("savedRecipes") || "[]");
    setSavedRecipes(recipes);
  }, []);

  const deleteRecipe = (recipeLabel: string) => {
    const updatedSavedRecipes = savedRecipes.filter(
      (recipe) => recipe.label !== recipeLabel
    );
    setSavedRecipes(updatedSavedRecipes);
    localStorage.setItem("savedRecipes", JSON.stringify(updatedSavedRecipes));
  };

  return (
    <CenterDiv>
      <h1 className='saved-recipes'>Your Favorite Recipes</h1>
      <SavedRecipesStyled>
        {savedRecipes.map(
          (recipe, index) => (
            console.log("recipe in savedRecipes: ", recipe.label),
            (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                whileHover={{ scale: 1.1 }}
              >
                <SavedRecipeCard className='savedRecipe' key={index}>
                  <FontAwesomeIcon
                    className='fa-solid fa-trash-can delete'
                    onClick={() => deleteRecipe(recipe.label)}
                  />
                  <img src={recipe.image} alt={recipe.label} />
                  <div className='centerCard'>
                    <p>{recipe.label}</p>
                    <a href={recipe.url} target='_blank'>
                      View Recipe
                    </a>
                  </div>
                </SavedRecipeCard>
              </motion.div>
            )
          )
        )}
      </SavedRecipesStyled>
    </CenterDiv>
  );
};
