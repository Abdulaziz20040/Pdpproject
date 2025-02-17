import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Rotlayout from "./layout/Rotlayout";
import All_brend from "./components/brend/All_brend";
import Dostavka from "./components/Dostavka";
import Korzinka from "./components/Korzinka";
import Home from "./pages/home";
import All_Novinki from "./pages/novinki/All_novinki";
import All_skidki from "./pages/skidki/All_skidki";
import Obuvie from "./pages/obuv/obuv";
import All_Koleysiya from "./pages/koleysiya/All_koleysiya";
import Koleksiya_Details from "./pages/koleysiya/Koleksiya_details";
import Novinki_details from "./pages/novinki/Novinki_details";
import Oformrovat from "./components/oformirovat/Oformrovat";
import FilterBrend from "./components/brend/FilterBrend";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rotlayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "allbrend",
        element: <All_brend />,
      },
      {
        path: "dostavka",
        element: <Oformrovat />,
      },
      {
        path: "obuv",
        element: <Obuvie />,
      },
      {
        path: "korzina",
        element: <Korzinka />,
      },
      {
        path: "allnovinki",
        element: <All_Novinki />,
      },
      {
        path: "allskidki",
        element: <All_skidki />,
      },
      {
        path: "allkoleksiya",
        element: <All_Koleysiya />,
      },
      {
        path: "oformirovat",
        element: <Oformrovat />,
      },
      {
        path: "details/:id",
        element: <Koleksiya_Details />,
      },
      {
        path: "detailsNovinki/:id",
        element: <Novinki_details />,
      },
      {
        path: "/filter-brend",
        element: <FilterBrend />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
