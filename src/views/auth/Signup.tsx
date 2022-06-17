import React, { useState } from 'react';
import { FormControl, Button, Alert } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { getAuth } from '../../store/selectors';
import {
  ReactChangeEvent,
  ReactSubmitEvent,
  signupData,
} from '../../helpers/types';
import { signup, signupError } from '../../store/slices/auth';
import { Link } from 'react-router-dom';

const Signup = () => {
  // ===========================================================================
  // Selectors
  // ===========================================================================
  const { currentUser, error, success, msg, loading } = useSelector(getAuth);

  // ===========================================================================
  // Dispatch
  // ==========================================================================
  const dispatch = useDispatch();

  const _signup = (payload: signupData) => {
    dispatch(signup(payload));
  };

  const _signupError = (payload: string) => {
    dispatch(signupError(payload));
  };

  // ===========================================================================
  // State
  // ===========================================================================
  const [user, setUser] = useState({
    email: '',
    password: '',
    firstname: '',
    lastname: '',
  });

  // ===========================================================================
  // Handlers
  // ===========================================================================
  const handleChange = (event: ReactChangeEvent) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: ReactSubmitEvent): void => {
    event.preventDefault();

    const payload = {
      email: user.email.trim(),
      password: user.password,
      firstname: user.firstname,
      lastname: user.lastname,
      agencyId: 5,
      phoneNumber: '0771726347',
    };

    if (
      payload.email &&
      payload.password &&
      payload.firstname &&
      payload.lastname
    ) {
      _signup(payload);
    } else {
      _signupError('Please fill all the fields !');
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
        <h2 className="auth_header">Sign up.</h2>

        {error && <Alert className="auth_alert-error">{msg}</Alert>}

        {success && <Alert className="auth_alert-error">{msg}</Alert>}

        <form action="post" className="auth_form" onSubmit={handleSubmit}>
          <div className="auth_form-collection">
            <FormControl className="auth_form-group">
              <label htmlFor="firstname" className="auth_form-label">
                Enter your firstname
              </label>

              <input
                id="firstname"
                type="text"
                name='firstname'
                className="auth_form-input"
                defaultValue={currentUser.firstname}
                onChange={handleChange}
                required
              />
              <span className="auth_form-helper">
                We'll never share your name.
              </span>
            </FormControl>
            <FormControl className="auth_form-group">
              <label htmlFor="lastname" className="auth_form-label">
                Enter your lastname
              </label>

              <input
                id="lastname"
                name="lastname"
                type="text"
                className="auth_form-input"
                defaultValue={currentUser.lastname}
                onChange={handleChange}
                required
              />
              <span className="auth_form-helper">
                We'll never share your name.
              </span>
            </FormControl>
          </div>
          <FormControl className="auth_form-group">
            <label htmlFor="email" className="auth_form-label">
              Enter your email address
            </label>
            <input
              id="email"
              name='email'
              type="email"
              className="auth_form-input"
              defaultValue={currentUser.email}
              onChange={handleChange}
              required
            />
            <span className="auth_form-helper">
              We'll never share your email.
            </span>
          </FormControl>
          <FormControl className="auth_form-group">
            <label htmlFor="password" className="auth_form-label">
              Enter your Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className="auth_form-input"
              defaultValue={currentUser.password}
              onChange={handleChange}
              required
            />
            <span className="auth_form-helper">
              We'll never share your password.
            </span>
          </FormControl>
          <Button className="auth_form-button" type="submit" disabled={loading}>
            Confirm
          </Button>
        </form>
        <br />
        <div className=" auth_footer ">
          <span className="auth_footer-text">Already have an account ?</span>{' '}
          <Link to="/login">
            <span className="auth_footer-cta"> back to login</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
