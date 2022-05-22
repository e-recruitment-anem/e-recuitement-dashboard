import React from 'react';
// import AuthGuard from './components/guards/AuthGuard';

// Hello components
import Hello from './components/Hello';
import SignIn from './views/auth/SignIn';
import Dashboard from './views/dashboard/Dashboard';
import Home from './views/demandeur/Home';
import OfferDetails from './views/demandeur/OfferDetails';

const routes = [
  {
    path: '/',
    element: <Hello />,
  },
  {
    path: '/login',
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
    path: '/offers',
    element: <Home />,
  },
];

export default routes;
