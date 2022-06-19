// API
// import axios from 'axios';

import axios from 'axios';
import { User } from '../types';

export const setSession = (data: User | null) => {
    const accessToken = getCookie('Bearer')
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    // This function below will handle when token is expired
//   if (data) {
    
//   } else {
//     localStorage.removeItem('token');
//     delete axios.defaults.headers.common.Authorization;
//   }
};

export const getCookie = (name) => {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  if (match) return match[2];
};
