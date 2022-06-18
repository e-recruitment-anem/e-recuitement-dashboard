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

import { FC, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  User,
  ReactChangeEvent,
  ReactClickEvent,
} from "../../../../helpers/types";
import { getManageSeeker } from "../../../../store/selectors";

import {
  updateSeeker,
  updateSeekerError,
} from "../../../../store/slices/seeker";
import "./Modals.scss";

interface Props extends InputProps {
  open: boolean;
  onToggle?: () => void;
}

const PersonalInformationModal: FC<Props> = ({ open, onToggle }) => {
  const familialSituation = [
    { content: "Single", value: 0 },
    { content: "Married", value: 1 },
    { content: "Divorced", value: 2 },
    { content: "Widower", value: 3 },
  ];
  const countries = ["Algeria", "Egypt", "Tunisia"];
  const gender = [
    { content: "Man", value: 0 },
    { content: "Woman", value: 1 },
  ];

  const milltarySituation = [
    { content: "ACCOMPLISHED", value: 0 },
    { content: "EXEMPT", value: 1 },
    { content: "FIT_INCORPORATED", value: 2 },
    { content: "DEFERRAL", value: 3 },
    { content: "UNFIT", value: 4 },
    { content: "WAITING", value: 5 },
  ];

  // ===========================================================================
  // Selectors
  // ===========================================================================
  const { error, msg } = useSelector(getManageSeeker);

  // ===========================================================================
  // Dispatch
  // ==========================================================================
  const dispatch = useDispatch();

  const _updateSeeker = (payload: User) => {
    dispatch(updateSeeker(payload));
  };

  const _updateSeekerError = (payload: string) => {
    dispatch(updateSeekerError(payload));
  };

  // ===========================================================================
  // State
  // ===========================================================================
  const [jobSeeker, updateJobSeeker] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    birthDate: "",
    gender: "",
    birthPlace: "",
    nationality: "",
    postalCode: "",
    familySituation: "",
    milltarySituation: "",
    identityCardNumber: "",
  });

  // ===========================================================================
  // Handlers
  // ===========================================================================
  const handleChange = (event: ReactChangeEvent) => {
    updateJobSeeker({
      ...jobSeeker,
      [event.target.name]: event.target.value,
    });
  };

  const handleSexeSelect = (value: string) => {
    updateJobSeeker({
      ...jobSeeker,
      gender: value,
    });
  };

  const handleCountrySelect = (value: string) => {
    updateJobSeeker({
      ...jobSeeker,
      nationality: value,
    });
  };

  const handleFamilialSituationSelect = (value: string) => {
    updateJobSeeker({
      ...jobSeeker,
      familySituation: value,
    });
  };

  const handleMilitarySituationSelect = (value: string) => {
    updateJobSeeker({
      ...jobSeeker,
      milltarySituation: value,
    });
  };

  const handleSubmit = (event: ReactClickEvent): void => {
    event.preventDefault();

    const payload = {
      firstName: jobSeeker.firstName,
      lastName: jobSeeker.lastName,
      address: jobSeeker.address,
      birthDate: moment(jobSeeker.birthDate).toISOString(),
      gender: parseInt(jobSeeker.gender),
      birthPlace: jobSeeker.birthPlace,
      nationality: jobSeeker.nationality,
      postalCode: jobSeeker.postalCode,
      familySituation: parseInt(jobSeeker.familySituation),
      milltarySituation: parseInt(jobSeeker.milltarySituation),
      identityCardNumber: jobSeeker.identityCardNumber,
    };

    if (
      payload.firstName &&
      payload.lastName &&
      payload.address &&
      payload.birthDate &&
      payload.gender &&
      payload.birthPlace &&
      payload.nationality &&
      payload.postalCode &&
      payload.familySituation &&
      payload.milltarySituation &&
      payload.identityCardNumber
    ) {
      _updateSeeker(payload);
    } else {
      _updateSeekerError("Please, make sure all inputs are filled correctly");
    }
  };

  return (
    <Modal size="6xl" isOpen={open} onClose={() => onToggle}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader className="personalInfoModal_inputs-item--title">
          Edit biography
        </ModalHeader>
        <ModalCloseButton onClick={onToggle} />
        <ModalBody pb={6}>
          {error && <Alert className="auth_alert-error">{msg}</Alert>}
          {/* {success && <Alert className="auth_alert-success">{msg}</Alert>} */}
          <div className="personalInfoModal_inputs">
            <FormControl className="personalInfoModal_inputs-item">
              <FormLabel
                htmlFor="full-name"
                className="personalInfoModal_inputs-item--label"
              >
                Firstname
              </FormLabel>
              <Input
                onChange={handleChange}
                type="text"
                id="full-name"
                name="firstName"
                placeholder="Full name"
                className="personalInfoModal_inputs-item--input"
              />
            </FormControl>
            <FormControl className="personalInfoModal_inputs-item">
              <FormLabel
                htmlFor="full-name"
                className="personalInfoModal_inputs-item--label"
              >
                Lastname
              </FormLabel>
              <Input
                onChange={handleChange}
                name="lastName"
                type="text"
                id="full-name"
                placeholder="Full name"
                className="personalInfoModal_inputs-item--input"
              />
            </FormControl>
            <FormControl className="personalInfoModal_inputs-item">
              <FormLabel
                htmlFor="address"
                className="personalInfoModal_inputs-item--label"
              >
                Address
              </FormLabel>
              <Input
                onChange={handleChange}
                name="address"
                type="text"
                id="address"
                placeholder="Address"
                className="personalInfoModal_inputs-item--input"
              />
            </FormControl>
            <FormControl className="personalInfoModal_inputs-item">
              <FormLabel
                htmlFor="birthday"
                className="personalInfoModal_inputs-item--label"
              >
                Birthday
              </FormLabel>
              <Input
                onChange={handleChange}
                name="birthDate"
                type="date"
                className="personalInfoModal_inputs-item--input"
                placeholder="Select a date"
              />
            </FormControl>
            <FormControl className="personalInfoModal_inputs-item">
              <FormLabel
                htmlFor="familial-situation"
                className="personalInfoModal_inputs-item--label"
              >
                Gender
              </FormLabel>
              <Select
                onChange={(e) => handleSexeSelect(e.target.value)}
                name="gender"
                id="familial-situation"
                className="personalInfoModal_inputs-item--input"
              >
                {gender.map((el) => (
                  <option value={el.value}>{el.content}</option>
                ))}
              </Select>
            </FormControl>
            <FormControl className="personalInfoModal_inputs-item">
              <FormLabel
                htmlFor="address"
                className="personalInfoModal_inputs-item--label"
              >
                Birth Place
              </FormLabel>
              <Input
                onChange={handleChange}
                name="birthPlace"
                type="text"
                id="address"
                placeholder="Address"
                className="personalInfoModal_inputs-item--input"
              />
            </FormControl>
            <FormControl className="personalInfoModal_inputs-item">
              <FormLabel
                htmlFor="familial-situation"
                className="personalInfoModal_inputs-item--label"
              >
                Nationality
              </FormLabel>
              <Select
                onChange={(e) => handleCountrySelect(e.target.value)}
                name="nationality"
                id="familial-situation"
                className="personalInfoModal_inputs-item--input"
              >
                {countries.map((el) => (
                  <option value={el}>{el}</option>
                ))}
              </Select>
            </FormControl>
            <FormControl className="personalInfoModal_inputs-item">
              <FormLabel
                htmlFor="postal-code"
                className="personalInfoModal_inputs-item--label"
              >
                Postal code
              </FormLabel>
              <Input
                onChange={handleChange}
                name="postalCode"
                className="personalInfoModal_inputs-item--input"
                id="postal-code"
                type="number"
              />
            </FormControl>
            <FormControl className="personalInfoModal_inputs-item">
              <FormLabel
                htmlFor="familial-situation"
                className="personalInfoModal_inputs-item--label"
              >
                Familial Situation
              </FormLabel>
              <Select
                onChange={(e) => handleFamilialSituationSelect(e.target.value)}
                name="familySituation"
                id="familial-situation"
                className="personalInfoModal_inputs-item--input"
              >
                {familialSituation.map((el) => (
                  <option value={el.value}>{el.content}</option>
                ))}
              </Select>
            </FormControl>
            <FormControl className="personalInfoModal_inputs-item">
              <FormLabel
                htmlFor="familial-situation"
                className="personalInfoModal_inputs-item--label"
              >
                Military Situation
              </FormLabel>
              <Select
                onChange={(e) => handleMilitarySituationSelect(e.target.value)}
                name="milltarySituation"
                id="familial-situation"
                className="personalInfoModal_inputs-item--input"
              >
                {milltarySituation.map((el) => (
                  <option value={el.value}>{el.content}</option>
                ))}
              </Select>
            </FormControl>
            <FormControl className="personalInfoModal_inputs-item">
              <FormLabel
                htmlFor="postal-code"
                className="personalInfoModal_inputs-item--label"
              >
                Identity Card Number
              </FormLabel>
              <Input
                onChange={handleChange}
                name="identityCardNumber"
                className="personalInfoModal_inputs-item--input"
                id="postal-code"
                type="number"
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
            Save changes
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default PersonalInformationModal;
