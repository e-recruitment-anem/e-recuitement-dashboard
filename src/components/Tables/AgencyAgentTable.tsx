import React, { FC, useEffect } from "react";
import { Table, Thead, Tbody, Tr, Td } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faCaretUp,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Agence, User } from "../../helpers/types";
import moment from "moment";

interface Props {
  agents: User[];
  agencies?: Agence[];
}

const AgenceTable: FC<Props> = ({ agents, agencies }) => {
  // TETSING
  const showAgent = () => {
    console.log(agents);
  };

  const showAgencies = () => {
    console.log(agencies);
  };

  const calculateDiff = (adminDate) => {
    const difference = moment(adminDate).fromNow(true);
    return difference;
  };

  return (
    <>
      <Table className="dataTable">
        <Thead className="dataTable_head">
          <Tr className="dataTable_row">
            <Td className="dataTable_header dataTable_header-id">
              <FontAwesomeIcon
                className="dataTbale_header-icon"
                icon={faCaretDown}
              />
            </Td>
            <Td className="dataTable_header">PM</Td>
            <Td className="dataTable_header dataTable_header-sortable">
              Agent
              <FontAwesomeIcon
                className="dataTbale_header-icon"
                icon={faCaretUp}
              />
            </Td>
            <Td className="dataTable_header dataTable_header-sortable">
              Agency
              <FontAwesomeIcon
                className="dataTbale_header-icon"
                icon={faCaretDown}
              />
            </Td>
            <Td className="dataTable_header">Email</Td>
            <Td className="dataTable_header">Telephone</Td>
            <Td className="dataTable_header">Age</Td>
            <Td className="dataTable_header">Status</Td>
          </Tr>
        </Thead>
        <Tbody className="dataTable_body">
          {agents.map((agent) => (
            <Tr className="dataTable_row">
              <Td className="dataTable_item dataTable_item-id">
                {agent.admin.accountId}
              </Td>
              <Td className="dataTable_item">Img</Td>
              <Td className="dataTable_item dataTable_item-bold">
                {agent.admin.firstname + " " + agent.admin.lastname}
              </Td>
              {agencies?.map(
                (agency) =>
                  agency.id === agent.agencyId && (
                    <Td className="dataTable_item">{agency.name}</Td>
                  )
              )}
              <Td className="dataTable_item">{agent.email}</Td>
              <Td className="dataTable_item">
                (213) {agent.admin.phoneNumber}
              </Td>
              <Td className="dataTable_item">
                {calculateDiff(agent.admin.birthDate)}
              </Td>
              <Td className="dataTable_item">
                <div className="dataTable_item-status">
                  <FontAwesomeIcon
                    className="dataTable_item-status--icon"
                    icon={faCircle}
                  />
                  On Track
                </div>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
};

export default AgenceTable;
