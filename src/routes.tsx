import React from "react";

// Hello components
import Hello from "./components/Hello";
import Home from "./views/demandeur/Home";
import MyOffers from "./views/demandeur/MyOffers";
import SignIn from "./views/auth/SignIn";
import Dashboard from "./views/dashboard/Dashboard";
import OfferDetails from "./views/demandeur/OfferDetails";

const routes = [
  {
    path: "/",
    element: <Hello />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/offerdetails",
    element: <OfferDetails />,
  },
  {
    path: "/offers",
    element: <Home />,
  },
  {
    path: "/myoffers",
    element: <MyOffers />,
  },
];

export default routes;
