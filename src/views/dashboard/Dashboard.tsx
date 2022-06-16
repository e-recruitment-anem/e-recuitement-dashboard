import React, { FC } from "react";
// import { Avatar } from "@chakra-ui/react";

import AdminLayout from "../layouts/AdminLayout";
import DataTable from "../../components/Tables/DataTable";
// import ReusableTable from "../../components/ReusableTable";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCircle } from "@fortawesome/free-solid-svg-icons";
// import TableMenu from "../../components/TableMenu";
import TableNav from "../../components/Tables/TableNav";

interface Props {
  title: string;
  cta: string;
}

const Dashboard: FC<Props> = ({ title, cta }) => {
  // const data = React.useMemo(
  //   () => [
  //     {
  //       col1: "Hello",
  //       col2: "World",
  //       col3: "Hello",
  //       col4: "World",
  //       col5: "Hello",
  //       col6: "World",
  //     },
  //     {
  //       col1: "react-table",
  //       col2: "rocks",
  //       col3: "react-table",
  //       col4: "rocks",
  //       col5: "react-table",
  //       col6: "rocks",
  //     },
  //     {
  //       col1: "whatever whatever you ant",
  //       col2: "you want",
  //       col3: "whatever whatever you ant",
  //       col4: "you want",
  //       col5: "whatever whatever you ant",
  //       col6: "you want",
  //     },
  //     {
  //       col1: "Hello",
  //       col2: "World",
  //       col3: "Hello",
  //       col4: "World",
  //       col5: "Hello",
  //       col6: "World",
  //     },
  //     {
  //       col1: "react-table",
  //       col2: "rocks",
  //       col3: "react-table",
  //       col4: "rocks",
  //       col5: "react-table",
  //       col6: "rocks",
  //     },
  //     {
  //       col1: "whatever whatever you ant",
  //       col2: "you want",
  //       col3: "whatever whatever you ant",
  //       col4: "you want",
  //       col5: "whatever whatever you ant",
  //       col6: "you want",
  //     },
  //     {
  //       col1: "Hello",
  //       col2: "World",
  //       col3: "Hello",
  //       col4: "World",
  //       col5: "Hello",
  //       col6: "World",
  //     },
  //     {
  //       col1: "react-table",
  //       col2: "rocks",
  //       col3: "react-table",
  //       col4: "rocks",
  //       col5: "react-table",
  //       col6: "rocks",
  //     },
  //     {
  //       col1: "whatever whatever you ant",
  //       col2: "you want",
  //       col3: "whatever whatever you ant",
  //       col4: "you want",
  //       col5: "whatever whatever you ant",
  //       col6: "you want",
  //     },
  //     {
  //       col1: "Hello",
  //       col2: "World",
  //       col3: "Hello",
  //       col4: "World",
  //       col5: "Hello",
  //       col6: "World",
  //     },
  //     {
  //       col1: "react-table",
  //       col2: "rocks",
  //       col3: "react-table",
  //       col4: "rocks",
  //       col5: "react-table",
  //       col6: "rocks",
  //     },
  //     {
  //       col1: "whatever whatever you ant",
  //       col2: "you want",
  //       col3: "whatever whatever you ant",
  //       col4: "you want",
  //       col5: "whatever whatever you ant",
  //       col6: "you want",
  //     },
  //   ],
  //   []
  // );
  // const columns = React.useMemo(
  //   () => [
  //     {
  //       Header: "PM",
  //       accessor: "col1", // accessor is the "key" in the data
  //       Cell: ({ row: { original } }) => {
  //         return (
  //           <>
  //             <Avatar
  //               rounded={"lg"}
  //               name="Dan Abrahmov"
  //               src="https://bit.ly/dan-abramov"
  //             />
  //             <span className="dataTable_item-bold">Allosaurus web app</span>
  //           </>
  //         );
  //       },
  //     },
  //     {
  //       Header: "ENTREPRISE",
  //       accessor: "col2",
  //     },
  //     {
  //       Header: "EMAIL",
  //       accessor: "col3", // accessor is the "key" in the data
  //     },
  //     {
  //       Header: "TELEPHONE",
  //       accessor: "col4", // accessor is the "key" in the data
  //     },
  //     {
  //       Header: "OFFRES",
  //       accessor: "col6",
  //       Cell: ({ row: { original } }) => {
  //         return <span className="dataTable_item-box">3</span>;
  //       },
  //     },

  //     {
  //       Header: "STATUS",
  //       accessor: "col5",
  //       Cell: ({ row: { original } }) => {
  //         return (
  //           <div className="dataTable_item-status">
  //             <FontAwesomeIcon
  //               className="dataTable_item-status--icon"
  //               icon={faCircle}
  //             />{" "}
  //             On Track
  //           </div>
  //         );
  //       }, // accessor is the "key" in the data
  //     },
  //     {
  //       Header: "",
  //       accessor: "col7",
  //       Cell: ({ row: { original } }) => {
  //         return (
  //           <TableMenu
  //             items={[
  //               { content: "content", handleClick: () => {} },
  //               { content: "content", handleClick: () => {} },
  //               { content: "content", handleClick: () => {} },
  //               { content: "content", handleClick: () => {} },
  //             ]}
  //           />
  //         );
  //       },
  //     },
  //   ],
  //   []
  // );

  return (
    <AdminLayout>
      <div className="main-nav">
        {/* <div className="main-nav__search">
          <Input type="text" placeholder="Rechercher..." />
        </div>
        <UserNav /> */}
        {/* <ReusableTable
          data={data}
          columns={columns}
          handlePagination={() => {}}
        /> */}
      </div>
      <TableNav title={title} cta={cta} />
      <DataTable title={"Utilisateurs"} cta={"utilisateur"} />
    </AdminLayout>
  );
};

export default Dashboard;
