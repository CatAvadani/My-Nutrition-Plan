import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import { GlobalStyles } from "./components/styles/Global";
import { GreenShape } from "./components/styles/GreenShape.styled";
import { PinkShape } from "./components/styles/PinkShape.styled";

const theme = {
  colors: {
    header: "rgba(236,253,245,0.8)",
    footer: "#454A5A",
    navItem: "#6ACC01",
    text: "#000",
  },
};

interface Recipe {
  label: string;
  image: string;
  ingredientLines: string[];
}

function App() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [searchRecipe, setSearchRecipe] = useState("");

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchRecipe(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submited:", searchRecipe);
    setSearchRecipe(searchRecipe);
  };

  const endpoint = "https://api.edamam.com/api/recipes/v2";

  const APP_ID = "id";
  const APP_KEY = "key";

  useEffect(() => {
    async function getRecipes() {
      const response = await fetch(
        `${endpoint}?type=public&q=${searchRecipe}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = await response.json();
      const recipes = data.hits.map((hit) => hit.recipe);
      if (searchRecipe === "pasta" || searchRecipe === "pizza") {
        console.log("Recipes:", recipes);
        setRecipes(recipes);
      } else {
        console.log("No recipes found");
      }
    }
    if (searchRecipe) {
      getRecipes();
    }
  }, [searchRecipe]);

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <GreenShape />
        <PinkShape />
        <Header />
        <MainContent
          recipes={recipes}
          searchRecipe={searchRecipe}
          onSearchSubmit={handleSearchSubmit}
          onSearchInput={handleSearchInput}
        />
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
