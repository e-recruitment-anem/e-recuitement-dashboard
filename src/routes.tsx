import React from 'react';

// Hello components
import Hello from './components/Hello';
import SignIn from './views/auth/SignIn';
import Dashboard from './views/dashboard/Dashboard';
import OfferDetails from './views/demandeur/OfferDetails';

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
];

export default routes;
