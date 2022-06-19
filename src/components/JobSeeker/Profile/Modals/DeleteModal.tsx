import {
  Button,
  InputProps,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

import { FC } from "react";

import "./Modals.scss";

interface Props extends InputProps {
  open: boolean;
  onToggle?: () => void;
  actionButton: string;
  itemTitle: string;
}

const DeleteModal: FC<Props> = ({
  open,
  onToggle,
  actionButton,
  itemTitle,
}) => {
  return (
    <Modal size="4xl" isOpen={open} onClose={() => onToggle}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader className="personalInfoModal_inputs-item--title">
          Delete {itemTitle}
        </ModalHeader>
        <ModalCloseButton onClick={onToggle} />
        <ModalBody pb={6}>
          {/* {error && <Alert className="auth_alert-error">{msg}</Alert>} */}
          <h1 className="deleteModal__body">
            Are you sure that you want to delete this {itemTitle} ?
          </h1>
        </ModalBody>

        <ModalFooter>
          <Button
            color={"white"}
            background="#828282"
            mr={3}
            onClick={onToggle}
            className="personalInfoModal_inputs-item--input"
          >
            Close
          </Button>
          <Button
            variant="ghost"
            color={"white"}
            background="red"
            className="personalInfoModal_inputs-item--input"
          >
            {actionButton}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DeleteModal;
