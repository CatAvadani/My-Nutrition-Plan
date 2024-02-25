import { useState } from "react";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { GlobalStyles } from "./components/styles/Global";
import { GreenShape } from "./components/styles/GreenShape.styled";
import { PinkShape } from "./components/styles/PinkShape.styled";

// Create a theme object

const theme = {
  colors: {
    header: "rgba(236,253,245,0.8)",
    // footer: "#2b4f2f",
    footer: "#27472a",
    navItem: "#6ACC01",
    text: "#000",
  },
};

// Create types for the API response
interface ApiResponse {
  hits: Array<{
    recipe: Recipe;
  }>;
}

// Create a type for the recipe object
export interface Recipe {
  label: string;
  image: string;
  ingredientLines: string[];
  url: string;
  source: string;
}

const endpoint = "https://api.edamam.com/api/recipes/v2";

function App() {
  const APP_ID = "8e975439";
  const APP_KEY = "3c385f8e84abc2c5df56cf2125a98c4a";

  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [searchRecipe, setSearchRecipe] = useState("");

  // Handle the input field

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchRecipe(e.target.value);
  };

  // Fetch recipes from the API

  const handleSearchSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch(
      `${endpoint}?type=public&q=${searchRecipe}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data: ApiResponse = await response.json();
    const recipes = data.hits.map((hit) => hit.recipe);
    if (searchRecipe) {
      console.log("Recipes:", recipes);
      setRecipes(recipes);
      setSearchRecipe("");
    } else {
      console.log("No recipes found");
    }
  };

  // Render the app components with the theme provider

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <GreenShape />
        <PinkShape />
        <Header />
        <Outlet
          context={{
            recipes: recipes,
            searchRecipe: searchRecipe,
            onSearchSubmit: handleSearchSubmit,
            onSearchInput: handleSearchInput,
          }}
        />

        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
