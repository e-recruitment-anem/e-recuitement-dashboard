import React, { FC, useState } from "react";
import { Button } from "@chakra-ui/react";
import AddAgency from "../Dashboard/AddAgency";

interface Props {
  title: string;
  cta: string;
  cta2?: string;
}

const TableNav: FC<Props> = ({ title, cta, cta2 }) => {
  // ADD MODAL STATE
  const [open, setOpen] = React.useState(false);

  const onToggle = () => {
    setOpen(!open);
  };

  const [active, setActive] = useState("Entreprise");
  const toggleActive = (payload) => {
    setActive(payload);
  };

  return (
    <div>
      <div className="dataTable_nav">
        <div className="dataTable_nav-left">
          <h3 className="dataTable_nav-title">{title}</h3>
          <div className="dataTable_nav-group">
            <Button
              className={`dataTable_nav-group--btn ${
                active === "Employeur" ? "dataTable_nav-group--active" : ""
              }`}
              onClick={() => toggleActive("Employeur")}
            >
              Employeur
            </Button>
            <Button
              className={`dataTable_nav-group--btn ${
                active === "Entreprise" ? "dataTable_nav-group--active" : ""
              }`}
              onClick={() => toggleActive("Entreprise")}
            >
              Enterprises
            </Button>
          </div>
        </div>
        {title === "Agences" && (
          <div className="dataTable_nav-actions">
            <Button className="dataTable_nav-cta" onClick={() => onToggle()}>
              + Créer {cta}
            </Button>
            <Button className="dataTable_nav-cta" onClick={() => onToggle()}>
              + Créer {cta2}
            </Button>
          </div>
        )}
        {}
      </div>
      {/* <AddAdminAgency open={open} onToggle={onToggle} className="modal" /> */}
      <AddAgency open={open} onToggle={onToggle} className="modal" />
    </div>
  );
};

export default TableNav;
