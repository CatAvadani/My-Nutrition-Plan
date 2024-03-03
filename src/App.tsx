import { MoonIcon, SunIcon } from "@heroicons/react/16/solid";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { GlobalStyles } from "./components/styles/Global";
import { GreenShape } from "./components/styles/GreenShape.styled";
import { PinkShape } from "./components/styles/PinkShape.styled";
import { ThemeButton } from "./components/styles/ThemeButton";

const lightTheme = {
  body: "#F3F4F6",
  colors: {
    header: "rgba(236,253,245,0.8)",
    navBackground: "rgba(255, 255, 255, 0.8)",
    backgroundCard: "#f9fafb",
    footer: "#27472a",
    navItem: "#6ACC01",
    hoverText: "#6ACC01",
    text: "#000",
    buttonHover: "#4d9901",
    altText: "black",
    altBtn: " rgba(106, 204, 1, 0.3)",
  },
};

const darkTheme = {
  body: "#1A202C",
  colors: {
    header: "rgba(236,253,245,0.8)",
    navBackground: "rgba(231, 231, 232, 0.6)",
    backgroundCard: "#2d3748",
    footer: "transparent",
    navItem: "#6ACC01",
    hoverText: "#6ACC01",
    buttonHover: "#4d9901",
    cardText: "#fff",
    text: "black",
    altText: "white",
    altBtn: "rgba(255, 255, 255, 0.3)",
  },

  text: "#fff",
};

type Theme = "light" | "dark";

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

  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    const localMode = window.localStorage.getItem("theme") as Theme | null;
    if (localMode) {
      setTheme(localMode);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }
  }, []);

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
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
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
        <ThemeButton onClick={toggleTheme}>
          {theme === "light" ? <SunIcon /> : <MoonIcon />}
        </ThemeButton>
      </>
    </ThemeProvider>
  );
}

export default App;
