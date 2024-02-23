import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
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
    footer: "#2b4f2f",
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
  const [buttonClicked, setButtonClicked] = useState(false);
  const location = useLocation();

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchRecipe(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setButtonClicked(true);
  };

  const endpoint = "https://api.edamam.com/api/recipes/v2";

  // const APP_ID = "id";
  // const APP_KEY = "key";

  const APP_ID = "8e975439";
  const APP_KEY = "3c385f8e84abc2c5df56cf2125a98c4a";

  useEffect(() => {
    async function getRecipes() {
      const response = await fetch(
        `${endpoint}?type=public&q=${searchRecipe}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = await response.json();
      const recipes = data.hits.map((hit) => hit.recipe);
      if (searchRecipe) {
        console.log("Recipes:", recipes);
        setRecipes(recipes);
        setSearchRecipe("");
        setButtonClicked(false);
      } else {
        console.log("No recipes found");
      }
    }
    if (buttonClicked) {
      getRecipes();
    }
  }, [searchRecipe, buttonClicked]);

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <GreenShape />
        <PinkShape />
        <Header />
        <Outlet />
        {location.pathname === "/" && (
          <MainContent
            recipes={recipes}
            searchRecipe={searchRecipe}
            onSearchSubmit={handleSearchSubmit}
            onSearchInput={handleSearchInput}
          />
        )}

        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
