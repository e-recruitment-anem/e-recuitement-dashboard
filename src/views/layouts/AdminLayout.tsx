import React, { FC, PropsWithChildren, useState } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBuilding,
  faCog,
  faFileLines,
  faHouse,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

interface Props {
  page?: string;
}

const Layout: FC<PropsWithChildren<Props>> = ({ children }) => {
  const [active, setActive] = useState('dashboard');

  const updateActive = (section: string) => {
    setActive(section);
  };
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
          <li className={`side-nav__item ${active === 'dashboard' ? 'side-nav__item--active' : ''}`} onClick={() => updateActive('dashboard')}>
            <Link to="/dashboard" className="side-nav__link">
              <FontAwesomeIcon className="side-nav__icon" icon={faHouse} />
              <span>Dashboard</span>
            </Link>
          </li>

          <li className={`side-nav__item ${active === 'agence' ? 'side-nav__item--active' : ''}`} onClick={() => updateActive('agence')}>
            <Link to="/agences" className="side-nav__link">
              <FontAwesomeIcon className="side-nav__icon" icon={faBuilding} />
              <span>Agences</span>
            </Link>
          </li>

          <li className={`side-nav__item ${active === 'users' ? 'side-nav__item--active' : ''}`} onClick={() => updateActive('users')}>
            <Link to="/agents" className="side-nav__link">
              <FontAwesomeIcon className="side-nav__icon" icon={faUser} />
              <span>Utilisateurs</span>
            </Link>
          </li>

          <li className={`side-nav__item ${active === 'offers' ? 'side-nav__item--active' : ''}`} onClick={() => updateActive('offers')}>
            <Link to="/offres" className="side-nav__link">
              <FontAwesomeIcon className="side-nav__icon" icon={faFileLines} />
              <span>Offres d'emploi</span>
            </Link>
          </li>

          <li className="side-nav__item">
            <Link to="/settings" className="side-nav__link">
              <FontAwesomeIcon className="side-nav__icon" icon={faCog} />
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
