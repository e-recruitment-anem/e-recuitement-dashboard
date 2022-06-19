import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Input } from "@chakra-ui/react";

import AdminLayout from "../layouts/AdminLayout";
import UserNav from "../../components/UserNav";
import TableNav from "../../components/Tables/TableNav";

import { getManageSeeker } from "../../store/selectors";
import UsersTable from "../../components/Tables/UsersTable";
import { fetchSeekers } from "../../store/slices/seeker";

const Agence: FC = () => {
  // ===========================================================================
  // Selectors
  // ===========================================================================
  const { seekers } = useSelector(getManageSeeker);

  // ===========================================================================
  // Dispatch
  // ==========================================================================
  const dispatch = useDispatch();

  const _fetchSeekers = () => {
    dispatch(fetchSeekers());
  };

  // ===========================================================================
  // State
  // ===========================================================================

  // ===========================================================================
  // Hooks
  // ===========================================================================
  useEffect(() => {
    _fetchSeekers();
    // eslint-disable-next-line
  }, []);

  return (
    <AdminLayout>
      <div className="main-nav">
        <div className="main-nav__search">
          <Input type="text" placeholder="Rechercher..." />
        </div>
        <UserNav />
      </div>
      <TableNav title={"Job Seekers"} />
      <UsersTable seekers={seekers} />
    </AdminLayout>
  );
};

export default Agence;
