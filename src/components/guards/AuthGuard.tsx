import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { getAuth } from "../../store/selectors";
// import { verify } from "../../store/slices/auth";

interface AuthGuardType {
  children: React.ReactNode;
}

// For routes that can only be accessed by authenticated users
function AuthGuard({ children }: AuthGuardType) {
  // ===========================================================================
  // Selectors
  // ===========================================================================
    const { isAuthenticated, synched } = useSelector(getAuth);

  // ===========================================================================
  // Dispatch
  // ==========================================================================

//   const dispatch = useDispatch();

//   const _verify = async () => {
//     dispatch(verify());
//   };

//   useEffect(() => {
//     _verify();
//     // eslint-disable-next-line
//   }, []);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <React.Fragment>{children}</React.Fragment>;
}

export default AuthGuard;
