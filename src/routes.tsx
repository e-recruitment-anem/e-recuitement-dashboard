import React from "react";
// import AuthGuard from './components/guards/AuthGuard';

// Hello components
import Hello from "./components/Hello";
import Home from "./views/demandeur/Home";
import SignIn from "./views/auth/SignIn";
import Dashboard from "./views/dashboard/Dashboard";
import OfferDetails from "./views/demandeur/Offers/OfferDetails";
import Profile from "./views/demandeur/Profile";
import Agence from "./views/dashboard/Agence";
import OfferApplication from "./views/demandeur/Offers/OfferApplication";
import OfferApplicationReview from "./views/demandeur/Offers/OfferApplicationReview";
import MyApplications from "./views/demandeur/Offers/MyApplications";

const routes = [
  {
    path: "/",
    element: <Hello />,
  },
  {
    path: "/login",
    element: <SignIn />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/agences",
    element: <Agence />,
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
    path: "/applications",
    element: <MyApplications />,
  },
  {
    path: "/myprofile",
    element: <Profile />,
  },
  {
    path: "/offerapplication",
    element: <OfferApplication />,
  },
  {
    path: "/offerapplicationreview",
    element: <OfferApplicationReview />,
  },
];

export default routes;
