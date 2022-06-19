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

import { FC, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ReactChangeEvent, ReactClickEvent, User } from "../../helpers/types";
import { getAgence, getManageEmployer } from "../../store/selectors";
import { fetchAgences } from "../../store/slices/agence";
import {
  createEmployer,
  createEmployerError,
} from "../../store/slices/employer";

interface Props extends InputProps {
  open: boolean;
  onToggle?: () => void;
}

const AddEmployer: FC<Props> = ({ open, onToggle }) => {
  // ===========================================================================
  // Selectors
  // ===========================================================================
  const { error, msg } = useSelector(getManageEmployer);
  const { agences } = useSelector(getAgence);

  // ===========================================================================
  // Dispatch
  // ==========================================================================
  const dispatch = useDispatch();

  const _createEmployer = (payload: User) => {
    dispatch(createEmployer(payload));
  };

  const _createEmployerError = (payload: string) => {
    dispatch(createEmployerError(payload));
  };

  const _fetchAgences = () => {
    dispatch(fetchAgences());
  };

  // ===========================================================================
  // State
  // ===========================================================================
  const [employer, setEmployer] = useState({
    email: "",
    password: "",
    agencyId: "",
    name: "",
    phoneNumber: "",
    postalCode: "",
    fax: "",
    biography: "",
    mainActivity: "",
    state: "",
  });

  // ===========================================================================
  // Handlers
  // ===========================================================================
  const handleChange = (event: ReactChangeEvent) => {
    setEmployer({
      ...employer,
      [event.target.name]: event.target.value,
    });
  };

  const handleSelect = (value: string) => {
    setEmployer({
      ...employer,
      agencyId: value,
    });
  };

  const handleSubmit = (event: ReactClickEvent): void => {
    event.preventDefault();

    const payload = {
      email: employer.email.trim(),
      password: employer.password,
      agencyId: parseInt(employer.agencyId),
      name: employer.name,
      phoneNumber: employer.phoneNumber,
      postalCode: employer.postalCode,
      fax: employer.fax,
      biography: employer.biography,
      mainActivity: employer.mainActivity,
      state: parseInt(employer.state),
    };

    if (
      payload.email &&
      payload.password &&
      payload.agencyId &&
      payload.name &&
      payload.phoneNumber &&
      payload.postalCode &&
      payload.fax &&
      payload.biography &&
      payload.mainActivity
    ) {
      _createEmployer(payload);
    } else {
      _createEmployerError("Please, make sure all inputs are filled correctly");
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
                placeholder="ex. John"
                className="personalInfoModal_inputs-item--input"
              />
            </FormControl>
            <FormControl className="personalInfoModal_inputs-item">
              <FormLabel
                htmlFor="password"
                className="personalInfoModal_inputs-item--label"
              >
                Password
              </FormLabel>
              <Input
                onChange={handleChange}
                name="password"
                type="password"
                id="password"
                placeholder="ex. Smith"
                className="personalInfoModal_inputs-item--input"
              />
            </FormControl>
            <FormControl className="personalInfoModal_inputs-item">
              <FormLabel
                htmlFor="name"
                className="personalInfoModal_inputs-item--label"
              >
                Name
              </FormLabel>
              <Input
                onChange={handleChange}
                name="name"
                type="text"
                id="name"
                placeholder="ex. example@gmail.com"
                className="personalInfoModal_inputs-item--input"
              />
            </FormControl>
            <FormControl className="personalInfoModal_inputs-item">
              <FormLabel
                htmlFor="agencyId"
                className="personalInfoModal_inputs-item--label"
              >
                Agency
              </FormLabel>
              <Select
                onChange={(e) => handleSelect(e.target.value)}
                name="agencyId"
                id="agencyId"
                className="personalInfoModal_inputs-item--input"
              >
                {agences.map((el) => (
                  <option value={el.id}>{el.name}</option>
                ))}
              </Select>
            </FormControl>
            <FormControl className="personalInfoModal_inputs-item">
              <FormLabel
                htmlFor="phoneNumber"
                className="personalInfoModal_inputs-item--label"
              >
                Phone number
              </FormLabel>
              <Input
                onChange={handleChange}
                name="phoneNumber"
                type="number"
                id="phoneNumber"
                placeholder="ex. 0560000000"
                className="personalInfoModal_inputs-item--input"
              />
            </FormControl>
            <FormControl className="personalInfoModal_inputs-item">
              <FormLabel
                htmlFor="postalCode"
                className="personalInfoModal_inputs-item--label"
              >
                Postal Code
              </FormLabel>
              <Input
                onChange={handleChange}
                name="postalCode"
                type="number"
                id="postalCode"
                placeholder="ex. 0560000000"
                className="personalInfoModal_inputs-item--input"
              />
            </FormControl>
            <FormControl className="personalInfoModal_inputs-item">
              <FormLabel
                htmlFor="fax"
                className="personalInfoModal_inputs-item--label"
              >
                Fax
              </FormLabel>
              <Input
                onChange={handleChange}
                name="fax"
                type="number"
                id="fax"
                placeholder="ex. 0560000000"
                className="personalInfoModal_inputs-item--input"
              />
            </FormControl>
            <FormControl className="personalInfoModal_inputs-item">
              <FormLabel
                htmlFor="mainActivity"
                className="personalInfoModal_inputs-item--label"
              >
                Main Activity
              </FormLabel>
              <Input
                onChange={handleChange}
                name="mainActivity"
                type="text"
                id="mainActivity"
                placeholder="enter details"
                className="personalInfoModal_inputs-item--input"
              />
            </FormControl>
            <FormControl className="personalInfoModal_inputs-item">
              <FormLabel
                htmlFor="biography"
                className="personalInfoModal_inputs-item--label"
              >
                Biography
              </FormLabel>
              <Input
                onChange={handleChange}
                name="biography"
                type="text"
                id="biography"
                placeholder="enter details"
                className="personalInfoModal_inputs-item--input"
              />
            </FormControl>
            <FormControl className="personalInfoModal_inputs-item">
              <FormLabel
                htmlFor="biography"
                className="personalInfoModal_inputs-item--label"
              >
                State
              </FormLabel>
              <Input
                onChange={handleChange}
                name="state"
                type="number"
                id="state"
                placeholder="enter details"
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

export default AddEmployer;
