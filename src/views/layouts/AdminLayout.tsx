import React, { FC, PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  page?: string;
}

const Layout: FC<PropsWithChildren<Props>> = ({ children }) => {
  // ===========================================================================
  // Dispatch
  // ==========================================================================

  return (
    <div className="content">
      <nav className="sidebar">
        <div className="sidebar__logo">
          <Link to="/">
            <h2>E-RECRUTEMENT</h2>
          </Link>
        </div>
        <ul className="side-nav">
          <li className="side-nav__item side-nav__item--active">
            <Link to="/dashboard" className="side-nav__link">
              <span>Dashboard</span>
            </Link>
          </li>

          <li className="side-nav__item">
            <Link to="/users_management" className="side-nav__link">
              <span>Agences</span>
            </Link>
          </li>

          <li className="side-nav__item">
            <Link to="/appointments" className="side-nav__link">
              <span>Utilisateurs</span>
            </Link>
          </li>

          <li className="side-nav__item">
            <Link to="/examinations" className="side-nav__link">
              <span>Offres d'emploi</span>
            </Link>
          </li>

          <li className="side-nav__item">
            <Link to="/chat" className="side-nav__link">
              <span>Paraméters</span>
            </Link>
          </li>
        </ul>
      </nav>
      <main className="main-view">{children}</main>
    </div>
  );
};

export default Layout;
