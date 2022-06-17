import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Input } from "@chakra-ui/react";

import AdminLayout from "../layouts/AdminLayout";
import UserNav from "../../components/UserNav";
import TableNav from "../../components/Tables/TableNav";

import { getManageAccounts } from "../../store/selectors";
import { fetchAdmins } from "../../store/slices/manageAccounts";
import AgencyAgentTable from "../../components/Tables/AgencyAgentTable";

const AgencyAgents: FC = () => {
  // ===========================================================================
  // Selectors
  // ===========================================================================
  const { admins } = useSelector(getManageAccounts);

  // ===========================================================================
  // Dispatch
  // ==========================================================================
  const dispatch = useDispatch();

  const _fetchAgencyAgents = () => {
    dispatch(fetchAdmins());
  };

  // ===========================================================================
  // State
  // ===========================================================================

  // ===========================================================================
  // Hooks
  // ===========================================================================
  useEffect(() => {
    _fetchAgencyAgents();
    // eslint-disable-next-line
  }, []);

  const showAgent = () => {
    console.log(admins);
  };

  return (
    <AdminLayout>
      <div className="main-nav">
        <div className="main-nav__search">
          <Input type="text" placeholder="Rechercher..." onClick={showAgent} />
        </div>
        <UserNav />
      </div>
      <TableNav title={"Agents"} cta={"Agency admin"} cta2={"Agency"} />
      <AgencyAgentTable agents={admins} />
    </AdminLayout>
  );
};

export default AgencyAgents;
