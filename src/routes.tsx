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
import EmployerDashboard from "./views/employer/Dashboard";
import CreateJobOffer from "./views/employer/CreateJobOffer";
import EmplOfferDetails from "./views/employer/OfferDetails";
import Offers from "./views/employer/Offers";
import Interviews from "./views/employer/Interviews";
import InterviewDetails from "./views/employer/InterviewDetails";
import Forgetpass from './views/auth/Forgetpass';
import Signup from './views/auth/Signup';
import Resetpass from './views/auth/Resetpass';

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
    path: '/SignUp',
    element: <Signup />,
  },
  {
    path: '/Resetpass',
    element: <Resetpass/>,
  },
  {
    path: '/Forgetpass',
    element: <Forgetpass/>,
  },
  {
    path: "/dashboard",
    element: <Dashboard title="Dashboard" cta="agency admin" />,
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
  {
    path: "/employer/dashboard",
    element: <EmployerDashboard />,
  },
  {
    path: "/employer/offers/create",
    element: <CreateJobOffer />,
  },
  {
    path: "/employer/offer/details",
    element: <EmplOfferDetails />,
  },
  {
    path: "/employer/offers",
    element: <Offers />,
  },
  {
    path: "/employer/interviews",
    element: <Interviews />,
  },
  {
    path: "/employer/interview/details",
    element: <InterviewDetails />,
  },
];

export default routes;
