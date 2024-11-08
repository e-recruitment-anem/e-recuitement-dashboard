import { FormControl, Button } from "@chakra-ui/react";

const Resetpass = () => {
  return (
    <div className="auth-container">
      <div className="auth_side-left">
        <img
          className="auth_heading-illustration"
          src="/img/welcome.jpg"
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
        <h2 className="auth_header">Reset password</h2>
        <form action="post" className="auth_form">
          <FormControl className="auth_form-group">
            <label htmlFor="password" className="auth_form-label">
              Enter your Password
            </label>

            <input id="password" type="password" className="auth_form-input" />
            <span className="auth_form-helper">
              We'll never share your password.
            </span>
          </FormControl>
          <FormControl className="auth_form-group">
            <label htmlFor="password" className="auth_form-label">
              Confirm your password
            </label>
            <input id="password" type="password" className="auth_form-input" />
            <span className="auth_form-helper">
              We'll never share your password.
            </span>
          </FormControl>
          <Button className="auth_form-button">Confirm</Button>
        </form>
        <br />
        <br />
        <div className="auth_footer ">
          <span className="auth_footer-text">Already have an account ?</span>{" "}
          <span className="auth_footer-cta"> back to login</span>
        </div>
      </div>
    </div>
  );
};

export default Resetpass;
