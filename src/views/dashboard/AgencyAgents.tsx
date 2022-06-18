import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Input } from "@chakra-ui/react";

import AdminLayout from "../layouts/AdminLayout";
import UserNav from "../../components/UserNav";
import TableNav from "../../components/Tables/TableNav";

import { getAgence, getManageAccounts } from "../../store/selectors";
import { fetchAdmins } from "../../store/slices/manageAccounts";
import AgencyAgentTable from "../../components/Tables/AgencyAgentTable";
import { fetchAgences } from "../../store/slices/agence";

const AgencyAgents: FC = () => {
  // ===========================================================================
  // Selectors
  // ===========================================================================
  const { admins } = useSelector(getManageAccounts);
  const { agences } = useSelector(getAgence);

  // ===========================================================================
  // Dispatch
  // ==========================================================================
  const dispatch = useDispatch();

  const _fetchAgencyAgents = () => {
    dispatch(fetchAdmins());
  };

  const _fetchAgences = () => {
    dispatch(fetchAgences());
  };

  // ===========================================================================
  // State
  // ===========================================================================

  // ===========================================================================
  // Hooks
  // ===========================================================================
  useEffect(() => {
    _fetchAgencyAgents();
    _fetchAgences();
    // eslint-disable-next-line
  }, []);

  const showAgent = () => {
    console.log(agences);
  };

  return (
    <AdminLayout>
      <div className="main-nav">
        <div className="main-nav__search">
          <Input type="text" placeholder="Rechercher..." />
        </div>
        <UserNav />
      </div>
      <TableNav title={"Agents"} cta={"Agency admin"} />
      <AgencyAgentTable agents={admins} agencies={agences} />
    </AdminLayout>
  );
};

export default AgencyAgents;
