// API
// import axios from 'axios';

import { User } from '../types';

export const setSession = (data: User | null) => {
  if (data) {
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('id', data.id.toString());
    localStorage.setItem('email', data.email);
    localStorage.setItem('role', data.role);
    // axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    // This function below will handle when token is expired
    // const { exp } = jwtDecode(accessToken);
    // handleTokenExpired(exp);
  } else {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('id');
    localStorage.removeItem('email');
    localStorage.removeItem('role');
    // delete axios.defaults.headers.common.Authorization;
  }
};

export const getCookie = (name) => {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  if (match) return match[2];
};
