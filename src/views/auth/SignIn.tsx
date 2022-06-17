import React, { useState } from 'react';
import { FormControl, Button, Alert } from '@chakra-ui/react';

import { useDispatch, useSelector } from 'react-redux';
import { getAuth } from '../../store/selectors';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { login, loginError } from '../../store/slices/auth';
import { authData, ReactChangeEvent, ReactSubmitEvent } from '../../helpers/types';
import { Link } from 'react-router-dom';

const SignIn = () => {
  // ===========================================================================
  // Selectors
  // ===========================================================================
  const { currentUser, error, msg, loading } = useSelector(getAuth);

  // ===========================================================================
  // Dispatch
  // ==========================================================================
  const dispatch = useDispatch();

  const _login = (payload: authData) => {
    dispatch(login(payload));
  };

  const _loginError = (payload: string) => {
    dispatch(loginError(payload));
  };

  // ===========================================================================
  // State
  // ===========================================================================
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  // ===========================================================================
  // Handlers
  // ===========================================================================
  const handleChange = (event: ReactChangeEvent) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: ReactSubmitEvent): void => {
    event.preventDefault();

    const payload = { email: user.email.trim(), password: user.password };

    if (payload.email && payload.password) {
      _login(payload);
    } else {
      _loginError('Empty email or password !');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth_side-left">
        <img
          className="auth_heading-illustration"
          src="/img/image.jpg"
          alt="background_illustrattion"
        />
        <div className="auth_side-left--block">
          <h2 className="auth_heading-title">E-RECRUITMENT</h2>
          <div className="auth_heading-subtitle">
            <span className="auth_heading-subtitle--light">Get More Money</span>
            <div className="auth_heading-subtitle--bold">Right Now!</div>
          </div>
          <span className="auth_heading-footer">Whenever, Everywhere</span>
        </div>
      </div>
      <div className="auth_side-right">
        <h2 className="auth_header">Se connecter</h2>
        {error && (
          <Alert className="auth_alert-error">{msg}</Alert>
        )}
        <form action="post" className="auth_form" onSubmit={handleSubmit}>
          <FormControl className="auth_form-group">
            <label htmlFor="email" className="auth_form-label">
              Email address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="auth_form-input"
              defaultValue={currentUser.email}
              onChange={handleChange}
            />
            {error && (
              <span className="auth_form-helper">
                Please enter a valid email.
              </span>
            )}
          </FormControl>
          <FormControl className="auth_form-group">
            <label htmlFor="password" className="auth_form-label">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="auth_form-input"
              name="password"
              defaultValue={currentUser.password}
              onChange={handleChange}
            />
            {error && (
              <span className="auth_form-helper">
                Please enter a valid password.
              </span>
            )}
          </FormControl>
          <Button className="auth_form-button" type='submit' disabled={loading}>Log In</Button>
        </form>
        <div className="auth_other">
          <span className="auth_other-title">Ou connecter avec</span>
          <div className="auth_other-group">
            <FontAwesomeIcon
              className="auth_other-icon--fb"
              icon={faFacebook}
            />
            <FontAwesomeIcon
              className="auth_other-icon--google"
              icon={faGoogle}
            />
          </div>
        </div>
        <div className="auth_footer">
          <span className="auth_footer-text">Vous n’avez pas de compte?</span>{' '}
          <Link to="/signup">
            <span className="auth_footer-cta"> s’inscrire</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
