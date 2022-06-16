import React from "react";
import { FormControl, Button } from "@chakra-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";

const SignIn = () => {
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
        <h2 className="auth_header">Login</h2>
        <form action="post" className="auth_form">
          <FormControl className="auth_form-group">
            <label htmlFor="email" className="auth_form-label">
              Email address
            </label>
            <input id="email" type="email" className="auth_form-input" />
            <span className="auth_form-helper">
              We'll never share your email.
            </span>
          </FormControl>
          <FormControl className="auth_form-group">
            <label htmlFor="password" className="auth_form-label">
              Password
            </label>
            <input id="password" type="password" className="auth_form-input" />
            <span className="auth_form-helper">
              We'll never share your email.
            </span>
          </FormControl>
          <Button className="auth_form-button">Log In</Button>
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
          <span className="auth_footer-text">Vous n’avez pas de compte?</span>{" "}
          <span className="auth_footer-cta">s’inscrire</span>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
