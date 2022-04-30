import React from "react";

// Hello components
import Hello from "./components/Hello";
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
];

export default routes;
