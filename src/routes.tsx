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
import Forgetpass from "./views/auth/Forgetpass";
import Signup from "./views/auth/Signup";
import Resetpass from "./views/auth/Resetpass";
import AdminGuard from "./components/guards/AdminGuard";
import SeekerGuard from "./components/guards/SeekerGuard";
import GuestGuard from "./components/guards/GuestGuard";
import AgencyAgents from "./views/dashboard/AgencyAgents";
import Users from "./views/dashboard/Users";

const routes = [
  {
    path: "/",
    element: <Hello />,
  },
  {
    path: "/login",
    element: (
      <GuestGuard>
        <SignIn />
      </GuestGuard>
    ),
  },
  {
    path: "/SignUp",
    element: <Signup />,
  },
  {
    path: "/Resetpass",
    element: <Resetpass />,
  },
  {
    path: "/Forgetpass",
    element: <Forgetpass />,
  },
  {
    path: "/dashboard",
    element: (
      <AdminGuard>
        <Dashboard title="Dashboard" cta="agency admin" />
      </AdminGuard>
    ),
  },
  {
    path: "/agences",
    element: (
      <AdminGuard>
        <Agence />
      </AdminGuard>
    ),
  },
  {
    path: "/agents",
    element: (
      <AdminGuard>
        <AgencyAgents />
      </AdminGuard>
    ),
  },
  {
    path: "/seekers",
    element: (
      <AdminGuard>
        <Users />
      </AdminGuard>
    ),
  },
  // Offers
  {
    path: "/offers",
    element: (
      <SeekerGuard>
        <Home />
      </SeekerGuard>
    ),
  },
  {
    path: "/offers/detail",
    element: (
      <SeekerGuard>
        <OfferDetails />
      </SeekerGuard>
    ),
  },
  {
    path: "/offers/apply",
    element: (
      <SeekerGuard>
        <OfferApplication />
      </SeekerGuard>
    ),
  },
  {
    path: "/offers/application",
    element: <OfferApplicationReview />,
  },

  {
    path: "/seeker/profile",
    element: (
      <SeekerGuard>
        <Profile />
      </SeekerGuard>
    ),
  },
  {
    path: "/seeker/applications",
    element: (
      <SeekerGuard>
        <MyApplications />
      </SeekerGuard>
    ),
  },

  // Employer
  {
    path: "/employer",
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
