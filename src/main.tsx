import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App.tsx";
import About from "./pages/About.tsx";
import Explore from "./pages/Explore.tsx";
import MainContent from "./pages/MainContent.tsx";
import { SavedRecipesComponent } from "./pages/SavedRecipes.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' Component={App}>
      <Route index Component={MainContent} />
      <Route path='/about' Component={About} />
      <Route path='/explore' Component={Explore} />
      <Route path='/savedRecipes' Component={SavedRecipesComponent} />

      <Route path='*' element={<span>404</span>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
