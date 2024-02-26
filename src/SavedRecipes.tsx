import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Recipe } from "./App";
import {
  SavedRecipeCard,
  SavedRecipesStyled,
} from "./components/styles/SavedRecipesStyled ";

export const SavedRecipesComponent = () => {
  const [savedRecipes, setSavedRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    // Load saved recipes from local storage
    const recipes = JSON.parse(localStorage.getItem("savedRecipes") || "[]");
    setSavedRecipes(recipes);
  }, []);

  return (
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
                <img src={recipe.image} alt={recipe.label} />
                <div className='centerCard'>
                  <p>{recipe.label}</p>
                  <a href={recipe.url} target='_blank' rel='noreferrer'>
                    View Recipe
                  </a>
                </div>
              </SavedRecipeCard>
            </motion.div>
          )
        )
      )}
    </SavedRecipesStyled>
  );
};
