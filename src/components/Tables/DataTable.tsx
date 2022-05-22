import React, { useState } from 'react';
import { Button } from '@chakra-ui/react';

const DataTable = () => {
  const [active, setActive] = useState('Entreprise');
  const toggleActive = (payload) => {
    setActive(payload);
  };
  return (
    <div>
      <div className="dataTable_nav">
        <div className="dataTable_nav-left">
          <h3 className="dataTable_nav-title">Utilisateurs</h3>
          <div className="dataTable_nav-group">
            <Button
              className={`dataTable_nav-group--btn ${
                active === 'Employeur' ? 'dataTable_nav-group--active' : ''
              }`}
              onClick={() => toggleActive('Employeur')}
            >
              Employeur
            </Button>
            <Button
              className={`dataTable_nav-group--btn ${
                active === 'Entreprise' ? 'dataTable_nav-group--active' : ''
              }`}
              onClick={() => toggleActive('Entreprise')}
            >
              Enterprises
            </Button>
          </div>
        </div>
        <Button className="dataTable_nav-cta">Créer agence</Button>
      </div>
    </div>
  );
};

export default DataTable;
