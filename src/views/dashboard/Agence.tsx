import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Input } from '@chakra-ui/react';

import AdminLayout from '../layouts/AdminLayout';
import UserNav from '../../components/UserNav';
import DataTable from '../../components/Tables/DataTable';
import TableNav from '../../components/Tables/TableNav';

// import { getAgence } from '../../store/selectors';
import { fetchAgences } from '../../store/slices/agence';

const Agence: FC = () => {
  // ===========================================================================
  // Selectors
  // ===========================================================================
  // const { agences } = useSelector(getAgence);

  // ===========================================================================
  // Dispatch
  // ==========================================================================
  const dispatch = useDispatch();

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
    _fetchAgences();
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
      <TableNav title={'Agences'} cta={'agence'} />
      <DataTable title={'Agences'} cta={'agence'} />
    </AdminLayout>
  );
};

export default Agence;
