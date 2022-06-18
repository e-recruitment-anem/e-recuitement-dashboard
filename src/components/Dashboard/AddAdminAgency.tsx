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
  Select,
} from "@chakra-ui/react";
import moment from "moment";

import { FC, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ReactChangeEvent, ReactClickEvent, User } from "../../helpers/types";
import { getAgence, getManageAccounts } from "../../store/selectors";
import { fetchAgences } from "../../store/slices/agence";
import {
  createAdmin,
  createAdminError,
} from "../../store/slices/manageAccounts";

interface Props extends InputProps {
  open: boolean;
  onToggle?: () => void;
}

const AddAdminAgency: FC<Props> = ({ open, onToggle }) => {
  // ===========================================================================
  // Selectors
  // ===========================================================================
  const { error, msg } = useSelector(getManageAccounts);
  const { agences } = useSelector(getAgence);

  // ===========================================================================
  // Dispatch
  // ==========================================================================
  const dispatch = useDispatch();

  const _createAgencyAdmin = (payload: User) => {
    dispatch(createAdmin(payload));
  };

  const _createAgencyAdminError = (payload: string) => {
    dispatch(createAdminError(payload));
  };

  const _fetchAgences = () => {
    dispatch(fetchAgences());
  };

  // ===========================================================================
  // State
  // ===========================================================================
  const [agencyAdmin, setAgencyAdmin] = useState({
    firstname: "",
    lastname: "",
    email: "",
    birthday: "",
    phoneNumber: "",
    agency: "",
  });

  // ===========================================================================
  // Handlers
  // ===========================================================================
  const handleChange = (event: ReactChangeEvent) => {
    setAgencyAdmin({
      ...agencyAdmin,
      [event.target.name]: event.target.value,
    });
  };

  const handleSelect = (value: string) => {
    setAgencyAdmin({
      ...agencyAdmin,
      agency: value,
    });
  };

  const handleSubmit = (event: ReactClickEvent): void => {
    event.preventDefault();

    const payload = {
      firstname: agencyAdmin.firstname,
      lastname: agencyAdmin.lastname,
      email: agencyAdmin.email.trim(),
      birthday: moment(agencyAdmin.birthday).toISOString(),
      phoneNumber: agencyAdmin.phoneNumber,
      agency: agencyAdmin.agency,
    };

    if (
      payload.firstname &&
      payload.lastname &&
      payload.email &&
      payload.phoneNumber &&
      payload.birthday
      // && payload.agency
    ) {
      _createAgencyAdmin(payload);
    } else {
      _createAgencyAdminError(
        "Please, make sure all inputs are filled correctly"
      );
    }
  };

  // ===========================================================================
  // Hooks
  // ===========================================================================
  useEffect(() => {
    _fetchAgences();
    // eslint-disable-next-line
  }, []);

  return (
    <Modal size="6xl" isOpen={open} onClose={() => onToggle}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader className="personalInfoModal_inputs-item--title">
          Add agency admin
        </ModalHeader>
        <ModalCloseButton onClick={onToggle} />
        <ModalBody pb={6}>
          {error && <Alert className="auth_alert-error">{msg}</Alert>}
          {/* {success && <Alert className="auth_alert-success">{msg}</Alert>} */}
          <div className="personalInfoModal_inputs">
            <FormControl className="personalInfoModal_inputs-item">
              <FormLabel
                htmlFor="first-name"
                className="personalInfoModal_inputs-item--label"
              >
                Firstname
              </FormLabel>
              <Input
                onChange={handleChange}
                name="firstname"
                type="text"
                id="first-name"
                placeholder="ex. John"
                className="personalInfoModal_inputs-item--input"
              />
            </FormControl>
            <FormControl className="personalInfoModal_inputs-item">
              <FormLabel
                htmlFor="last-name"
                className="personalInfoModal_inputs-item--label"
              >
                Lastname
              </FormLabel>
              <Input
                onChange={handleChange}
                name="lastname"
                type="text"
                id="last"
                placeholder="ex. Smith"
                className="personalInfoModal_inputs-item--input"
              />
            </FormControl>
            <FormControl className="personalInfoModal_inputs-item">
              <FormLabel
                htmlFor="email"
                className="personalInfoModal_inputs-item--label"
              >
                Email
              </FormLabel>
              <Input
                onChange={handleChange}
                name="email"
                type="email"
                id="email"
                placeholder="ex. example@gmail.com"
                className="personalInfoModal_inputs-item--input"
              />
            </FormControl>
            <FormControl className="personalInfoModal_inputs-item">
              <FormLabel
                htmlFor="agency"
                className="personalInfoModal_inputs-item--label"
              >
                Agency
              </FormLabel>
              <Select
                onChange={(e) => handleSelect(e.target.value)}
                name="agency"
                id="agency"
                className="personalInfoModal_inputs-item--input"
              >
                {agences.map((el) => (
                  <option value={el.id}>{el.name}</option>
                ))}
              </Select>
            </FormControl>
            <FormControl className="personalInfoModal_inputs-item">
              <FormLabel
                htmlFor="birthdate"
                className="personalInfoModal_inputs-item--label"
              >
                Birthdate
              </FormLabel>
              <Input
                onChange={handleChange}
                name="birthday"
                type="date"
                className="personalInfoModal_inputs-item--input"
                placeholder="Select a date"
              />
            </FormControl>
            <FormControl className="personalInfoModal_inputs-item">
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
          >
            Create agency admin
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddAdminAgency;
