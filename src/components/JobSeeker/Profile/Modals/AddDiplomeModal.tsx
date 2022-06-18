import {
  Alert,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputProps,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

import { FC, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  ReactChangeEvent,
  ReactClickEvent,
  Diplome,
} from "../../../../helpers/types";
import { getManageAccounts } from "../../../../store/selectors";

import {
  createDiplome,
  createDiplomeError,
} from "../../../../store/slices/seeker";
import "./Modals.scss";

interface Props extends InputProps {
  open: boolean;
  onToggle?: () => void;
  actionButton: string;
}

const AddDiplomeModal: FC<Props> = ({ open, onToggle, actionButton }) => {
  // ===========================================================================
  // Selectors
  // ===========================================================================
  const { error, msg } = useSelector(getManageAccounts);

  // ===========================================================================
  // Dispatch
  // ==========================================================================
  const dispatch = useDispatch();

  const _createDiplome = (payload: Diplome) => {
    dispatch(createDiplome(payload));
  };

  const _createDiplomeError = (payload: string) => {
    dispatch(createDiplomeError(payload));
  };

  // ===========================================================================
  // State
  // ===========================================================================
  const [diplome, setDiplome] = useState({
    title: "",
    storagePath: "ss",
  });

  // ===========================================================================
  // Handlers
  // ===========================================================================
  const handleChange = (event: ReactChangeEvent) => {
    setDiplome({
      ...diplome,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: ReactClickEvent): void => {
    event.preventDefault();

    const payload = {
      title: diplome.title,
      storagePath: diplome.storagePath,
    };

    if (payload.storagePath && payload.title) {
      _createDiplome(payload);
    } else {
      _createDiplomeError("Please, make sure all inputs are filled correctly");
    }
  };

  return (
    <Modal size="4xl" isOpen={open} onClose={() => onToggle}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader className="personalInfoModal_inputs-item--title">
          Add Diplome
        </ModalHeader>
        <ModalCloseButton onClick={onToggle} />
        <ModalBody pb={6}>
          {error && <Alert className="auth_alert-error">{msg}</Alert>}
          <div className="personalInfoModal_inputs">
            <FormControl>
              <FormLabel
                className="personalInfoModal_inputs-item--label"
                htmlFor="title"
              >
                Diplome title
              </FormLabel>
              <Input
                onChange={handleChange}
                type="text"
                name="title"
                id="title"
                placeholder="Enter a title"
                className="personalInfoModal_inputs-item--input"
              />
            </FormControl>
          </div>
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
            background="#0061FF"
            className="personalInfoModal_inputs-item--input"
            onClick={handleSubmit}
          >
            {actionButton}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddDiplomeModal;
