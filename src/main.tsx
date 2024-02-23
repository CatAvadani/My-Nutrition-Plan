import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App.tsx";

import About from "./About.tsx";
import Explore from "./Explore.tsx";
import MainContent from "./components/MainContent.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' Component={App}>
      <Route index Component={MainContent} />
      <Route path='/about' Component={About} />
      <Route path='/explore' Component={Explore} />
      <Route path='*' element={<span>404</span>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
