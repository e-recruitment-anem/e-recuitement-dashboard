import React from 'react';

// Hello components
<<<<<<< HEAD
import Hello from './components/Hello';
import SignIn from './views/auth/SignIn';
import Dashboard from './views/dashboard/Dashboard';
import OfferDetails from './views/demandeur/OfferDetails';
=======
import Hello from "./components/Hello";
import Home from "./views/demandeur/Home";
import OfferDetails from "./views/demandeur/OfferDetails";
>>>>>>> 0b226bf13edc2b4920454538b08f827a9c815c65

const routes = [
  {
    path: '/',
    element: <Hello />,
  },
  {
    path: '/signin',
    element: <SignIn />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/offerdetails',
    element: <OfferDetails />,
  },
  {
    path: "/offers",
    element: <Home />,
  },
];

export default routes;
