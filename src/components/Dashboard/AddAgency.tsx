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
import { Agence, ReactChangeEvent, ReactClickEvent } from "../../helpers/types";
import { getAgence } from "../../store/selectors";
import { createAgence, createAgenceError } from "../../store/slices/agence";

interface Props extends InputProps {
  open: boolean;
  onToggle?: () => void;
}

const AddAgency: FC<Props> = ({ open, onToggle }) => {
  // ===========================================================================
  // Selectors
  // ===========================================================================
  const { agence, error, msg, success, loading } = useSelector(getAgence);

  // ===========================================================================
  // Dispatch
  // ==========================================================================
  const dispatch = useDispatch();

  const _createAgency = (payload: Agence) => {
    dispatch(createAgence(payload));
  };

  const _createAgencyError = (payload: string) => {
    dispatch(createAgenceError(payload));
  };

  // ===========================================================================
  // State
  // ===========================================================================
  const [agency, setAgency] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  // ===========================================================================
  // Handlers
  // ===========================================================================
  const handleChange = (event: ReactChangeEvent) => {
    setAgency({
      ...agency,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: ReactClickEvent): void => {
    event.preventDefault();

    const payload = {
      name: agency.name,
      email: agency.email.trim(),
      phoneNumber: agency.phoneNumber,
    };

    if (payload.name && payload.email && payload.phoneNumber) {
      _createAgency(payload);
    } else {
      _createAgencyError("Please, make sure all inputs are filled correctly");
    }
  };

  const showSuccess = false;

  return (
    <Modal size="3xl" isOpen={open} onClose={() => onToggle}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader className="personalInfoModal_inputs-item--title">
          Add agency admin
        </ModalHeader>
        <ModalCloseButton onClick={onToggle} />
        <ModalBody pb={6}>
          {error && <Alert className="auth_alert-error">{msg}</Alert>}
          {success && <Alert className="auth_alert-success">{msg}</Alert>}
          <div className="personalInfoModal_inputs">
            <FormControl>
              <FormLabel
                htmlFor="name"
                className="personalInfoModal_inputs-item--label"
              >
                Agency name
              </FormLabel>
              <Input
                onChange={handleChange}
                type="name"
                id="name"
                name="name"
                placeholder="ex. John"
                className="personalInfoModal_inputs-item--input"
              />
            </FormControl>
            <FormControl>
              <FormLabel
                htmlFor="email"
                className="personalInfoModal_inputs-item--label"
              >
                Email
              </FormLabel>
              <Input
                onChange={handleChange}
                type="email"
                id="email"
                name="email"
                placeholder="ex. example@gmail.com"
                className="personalInfoModal_inputs-item--input"
              />
            </FormControl>
            <FormControl>
              <FormLabel
                htmlFor="phone-number"
                className="personalInfoModal_inputs-item--label"
              >
                Phone number
              </FormLabel>
              <Input
                onChange={handleChange}
                name="phoneNumber"
                type="number"
                id="phone-number"
                placeholder="ex. 0560000000"
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
            disabled={loading}
          >
            Create agency admin
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddAgency;
