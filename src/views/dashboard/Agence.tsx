import React, { FC } from 'react';
import { Input } from '@chakra-ui/react';

import AdminLayout from '../layouts/AdminLayout';
import UserNav from '../../components/UserNav';
import DataTable from '../../components/Tables/DataTable';

const Agence: FC = () => {
  return (
    <AdminLayout>
      <div className="main-nav">
        <div className="main-nav__search">
          <Input type="text" placeholder="Rechercher..." />
        </div>
        <UserNav />
      </div>
      <DataTable title={'Agences'} cta={'agence'} />
    </AdminLayout>
  );
};

export default Agence;
