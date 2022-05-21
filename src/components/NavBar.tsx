import { FC } from "react";
import "../styles/_components.scss";

const NavBar: FC = () => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
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
        <span onClick={() => openInNewTab("/myoffers")}>My applications</span>
        <span onClick={() => openInNewTab("/")}>Alerts</span>
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
          onClick={() => openInNewTab("/myprofile")}
        />
      </div>
    </div>
  );
};

export default NavBar;
