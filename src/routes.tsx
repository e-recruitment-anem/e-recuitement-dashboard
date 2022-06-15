import React from 'react';
// import AuthGuard from './components/guards/AuthGuard';

// Hello components
import Hello from "./components/Hello";
import Home from "./views/demandeur/Home";
import MyOffers from "./views/demandeur/MyOffers";
import SignIn from "./views/auth/SignIn";
import Dashboard from "./views/dashboard/Dashboard";
import OfferDetails from "./views/demandeur/OfferDetails";
import Profile from "./views/demandeur/Profile";
import Agence from './views/dashboard/Agence';
import Forgetpass from './views/auth/Forgetpass';

const routes = [
  {
    path: "/",
    element: <Hello />,
  },
  {
    path: '/login',
    element: <SignIn />,
  },
  {
    path: '/Forgetpass',
    element: <Forgetpass/>,
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
