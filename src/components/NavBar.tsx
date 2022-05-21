import { FC } from "react";
import { Link } from "react-router-dom";
import "../styles/_components.scss";

const NavBar: FC = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <img src="/img/demandeur/logo.svg" alt="" className="navbar-logo" />
      </Link>
      <div className="navbar-center">
        <Link to="/offers" className="navbar-center--link">
          <span>Job Offers</span>
        </Link>
        <Link to="/myoffers" className="navbar-center--link">
          <span>My applications</span>
        </Link>
        <Link to="" className="navbar-center--link">
          <span>Alerts</span>
        </Link>
      </div>
      <div className="navbar-right">
        <img
          src="/img/demandeur/notification.svg"
          alt=""
          className="navbar-right--notification"
        />
        <img
          src="/img/demandeur/profile.png"
          alt=""
          className="navbar-right--profile"
        />
      </div>
    </div>
  );
};

export default NavBar;
