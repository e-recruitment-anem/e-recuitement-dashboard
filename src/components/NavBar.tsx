import { FC } from "react";
import { Link } from "react-router-dom";
import "../styles/_components.scss"

const NavBar: FC = () => {
  return (
    <div className="navbar">
      <img src="/img/demandeur/logo.svg" alt="" className="navbar-logo" />
      <div className="navbar-center">
        <Link to="" className="navbar-center--link">
          <span>Offres d’emplois</span>
        </Link>
        <Link to="" className="navbar-center--link">
          <span>Mes candidatures</span>
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
