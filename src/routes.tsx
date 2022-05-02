import React from "react";

// Hello components
import Hello from "./components/Hello";
import Home from "./views/demandeur/Home";
import OfferDetails from "./views/demandeur/OfferDetails";

const routes = [
  {
    path: "/",
    element: <Hello />,
  },
  {
    path: "/offerdetails",
    element: <OfferDetails />,
  },
  {
    path: "/offers",
    element: <Home />,
  },
];

export default routes;
