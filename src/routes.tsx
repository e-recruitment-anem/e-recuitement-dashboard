<<<<<<< HEAD
import React from 'react';
// import AuthGuard from './components/guards/AuthGuard';
=======
import React from "react";
>>>>>>> 2d1d2bdc9f5a8fb6b66d0510deeedab8d54da85c

// Hello components
import Hello from "./components/Hello";
import Home from "./views/demandeur/Home";
import MyOffers from "./views/demandeur/MyOffers";
import SignIn from "./views/auth/SignIn";
import Dashboard from "./views/dashboard/Dashboard";
import OfferDetails from "./views/demandeur/OfferDetails";
import Profile from "./views/demandeur/Profile";

const routes = [
  {
    path: "/",
    element: <Hello />,
  },
  {
<<<<<<< HEAD
    path: '/login',
=======
    path: "/signin",
>>>>>>> 2d1d2bdc9f5a8fb6b66d0510deeedab8d54da85c
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
    path: '/offers',
    element: <Home />,
  },
  {
    path: "/myoffers",
    element: <MyOffers />,
  },
  {
    path: "/myprofile",
    element: <Profile />,
  },
];

export default routes;
