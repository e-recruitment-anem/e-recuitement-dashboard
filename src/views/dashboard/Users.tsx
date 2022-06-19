import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Input } from "@chakra-ui/react";

import AdminLayout from "../layouts/AdminLayout";
import UserNav from "../../components/UserNav";
import TableNav from "../../components/Tables/TableNav";

import { getManageEmployer, getManageSeeker } from "../../store/selectors";
import UsersTable from "../../components/Tables/UsersTable";
import { fetchSeekers } from "../../store/slices/seeker";
import { fetchEmployers } from "../../store/slices/employer";

const Agence: FC = () => {
  // ===========================================================================
  // Selectors
  // ===========================================================================
  const { employers } = useSelector(getManageEmployer);

  // ===========================================================================
  // Dispatch
  // ==========================================================================
  const dispatch = useDispatch();

  const _fetchEmployers = () => {
    dispatch(fetchEmployers());
  };

  const testEmployers = () => {
    console.log("-----------");
    console.log(employers);
    console.log("-----------");
  };

  // ===========================================================================
  // State
  // ===========================================================================

  // ===========================================================================
  // Hooks
  // ===========================================================================
  useEffect(() => {
    _fetchEmployers();
    // eslint-disable-next-line
  }, []);

  return (
    <AdminLayout>
      <div className="main-nav">
        <div className="main-nav__search">
          <Input
            type="text"
            placeholder="Rechercher..."
            onClick={testEmployers}
          />
        </div>
        <UserNav />
      </div>
      <TableNav title={"Employers"} cta="Employer" />
      <UsersTable employers={employers} />
    </AdminLayout>
  );
};

export default Agence;
