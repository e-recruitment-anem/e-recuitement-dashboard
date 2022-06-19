import { FC } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/_components.scss";

const NavBar: FC = () => {
  const navigate = useNavigate();
  const openInNewTab = (url) => {
    // const newWindow = window.open(url, "noopener,noreferrer");
    // if (newWindow) newWindow.opener = null;
    navigate(url);
  };

  return (
    <div className="navbar">
      <img
        src="/img/demandeur/logo.svg"
        alt=""
        className="navbar-logo"
        onClick={() => openInNewTab("/offers")}
      />
      <div className="navbar-center">
        <span onClick={() => openInNewTab("/offers")}>Job Offers</span>
        <span onClick={() => openInNewTab("/seeker/applications")}>
          My applications
        </span>
        <span onClick={() => openInNewTab("/offers")}>Alerts</span>
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
          onClick={() => openInNewTab("/seeker/profile")}
        />
      </div>
    </div>
  );
};

export default NavBar;
