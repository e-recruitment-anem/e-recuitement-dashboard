import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const TableMenu = ({ items }) => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        variant={"link"}
        cursor={"pointer"}
        minW={0}
        _focus={{ outline: "none" }}
      >
        <FontAwesomeIcon icon={faEllipsisH} />
      </MenuButton>

      <MenuList>
        {items.map(({ content, handleClick }) => (
          <MenuItem onClick={handleClick}>{content} </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default TableMenu;
