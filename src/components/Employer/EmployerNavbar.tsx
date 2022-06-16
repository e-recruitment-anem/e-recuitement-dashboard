import { FC } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/_components.scss";

const EmployerNavbar: FC = () => {
  const navigate = useNavigate();
  const openInNewTab = (url) => {
    navigate(url);
  };

  return (
    <div className="navbar">
      <img
        src="/img/demandeur/logo.svg"
        alt=""
        className="navbar-logo"
        onClick={() => openInNewTab("/employer/dashboard")}
      />
      <div className="navbar-center">
        <span onClick={() => openInNewTab("/employer/dashboard")}>
          Dashboard
        </span>
        <span onClick={() => openInNewTab("/employer/offers")}>My offers</span>
        <span onClick={() => openInNewTab("/myinterviews")}>Interviews</span>
        <span onClick={() => openInNewTab("/favorite")}>Favorite</span>
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

export default EmployerNavbar;
