import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { getAuth } from '../../store/selectors';
// import { verify } from "../../store/slices/auth";

interface AuthGuardType {
  children: React.ReactNode;
}

// For routes that can only be accessed by authenticated users
function SeekerGuard({ children }: AuthGuardType) {
  // ===========================================================================
  // Selectors
  // ===========================================================================
  const { isAuthenticated, user } = useSelector(getAuth);

  // ===========================================================================
  // Dispatch
  //==========================================================================

//   const dispatch = useDispatch();

//   const _verify = () => {
//     dispatch(verify());
//   };

//   useEffect(() => {
//     if (!synched) {
//       _verify();
//     }
//     // eslint-disable-next-line
//   }, []);

  if (!isAuthenticated && user.role !== 'JOB_SEKER') {
    return <Navigate to="/login" />;
  }

  return <React.Fragment>{children}</React.Fragment>;
}

export default SeekerGuard;
