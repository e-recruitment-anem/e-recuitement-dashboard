import React from 'react';
import { Table, Thead, Tbody, Tr, Td } from '@chakra-ui/react';
import TableNav from './TableNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCaretDown,
  faCaretUp,
  faCircle,
} from '@fortawesome/free-solid-svg-icons';

const DataTable = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <TableNav />
      <Table className="dataTable">
        <Thead className="dataTable_head">
          <Tr className="dataTable_row">
            <Td className="dataTable_header dataTable_header-id">
              #{' '}
              <FontAwesomeIcon
                className="dataTbale_header-icon"
                icon={faCaretDown}
              />
            </Td>
            <Td className="dataTable_header">PM</Td>
            <Td className="dataTable_header dataTable_header-sortable">
              Entreprise{' '}
              <FontAwesomeIcon
                className="dataTbale_header-icon"
                icon={faCaretUp}
              />
            </Td>
            <Td className="dataTable_header dataTable_header-sortable">
              Commune{' '}
              <FontAwesomeIcon
                className="dataTbale_header-icon"
                icon={faCaretDown}
              />
            </Td>
            <Td className="dataTable_header">Email</Td>
            <Td className="dataTable_header">Telephone</Td>
            <Td className="dataTable_header">Offres</Td>
            <Td className="dataTable_header">Status</Td>
          </Tr>
        </Thead>
        <Tbody className="dataTable_body">
          {data.map((el) => (
            <Tr className="dataTable_row">
              <Td className="dataTable_item dataTable_item-id">{el}</Td>
              <Td className="dataTable_item">Img</Td>
              <Td className="dataTable_item dataTable_item-bold">
                Allosaurus web app
              </Td>
              <Td className="dataTable_item">Sidi Bel Abbés</Td>
              <Td className="dataTable_item">contact@ooredoo.dz</Td>
              <Td className="dataTable_item">(213) 568493290</Td>
              <Td className="dataTable_item dataTable_item--center">
                <span className="dataTable_item-box">3</span>
              </Td>
              <Td className="dataTable_item">
                <div className="dataTable_item-status">
                  <FontAwesomeIcon className="dataTable_item-status--icon" icon={faCircle} /> On Track
                </div>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
};

export default DataTable;
