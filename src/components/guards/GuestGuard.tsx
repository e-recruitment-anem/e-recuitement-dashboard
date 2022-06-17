import * as React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { getAuth } from '../../store/selectors';

interface GuestGuardType {
  children: React.ReactNode;
}

// For routes that can only be accessed by unauthenticated users
function GuestGuard({ children }: GuestGuardType) {
  // ===========================================================================
  // Selectors
  // ===========================================================================
  const { isAuthenticated, user } = useSelector(getAuth);

  if (user.role === 'ADMIN' && isAuthenticated) {
    return <Navigate to="/dashboard" />;
  } else if (user.role === 'JOB_SEKER' && isAuthenticated) {
    return <Navigate to="/offers" />;
  } else if (user.role === 'EMPLOYER' && isAuthenticated) {
    return <Navigate to="/employer/dashboard" />;
  }

  return <React.Fragment>{children}</React.Fragment>;
}

export default GuestGuard;
