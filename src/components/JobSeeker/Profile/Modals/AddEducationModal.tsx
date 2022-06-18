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
import moment from "moment";

import { FC, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  User,
  ReactChangeEvent,
  ReactClickEvent,
} from "../../../../helpers/types";
import { getManageAccounts } from "../../../../store/selectors";

import {
  attachEducation,
  attachEducationError,
} from "../../../../store/slices/seeker";
import "./Modals.scss";

interface Props extends InputProps {
  open: boolean;
  onToggle?: () => void;
  actionButton: string;
}

const AddEducationModal: FC<Props> = ({ open, onToggle, actionButton }) => {
  // ===========================================================================
  // Selectors
  // ===========================================================================
  const { error, msg } = useSelector(getManageAccounts);

  // ===========================================================================
  // Dispatch
  // ==========================================================================
  const dispatch = useDispatch();

  const _addEducation = (payload: User) => {
    dispatch(attachEducation(payload));
  };

  const _addEducationError = (payload: string) => {
    dispatch(attachEducationError(payload));
  };

  // ===========================================================================
  // State
  // ===========================================================================
  const [education, setEducation] = useState({
    school: "",
    title: "",
    startDate: "",
    endDate: "",
  });

  // ===========================================================================
  // Handlers
  // ===========================================================================
  const handleChange = (event: ReactChangeEvent) => {
    setEducation({
      ...education,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: ReactClickEvent): void => {
    event.preventDefault();

    const payload = {
      school: education.school,
      title: education.title,
      startDate: moment(education.startDate).toISOString(),
      endDate: moment(education.endDate).toISOString(),
    };

    if (
      payload.school &&
      payload.title &&
      payload.startDate &&
      payload.endDate
    ) {
      _addEducation(payload);
    } else {
      _addEducationError("Please, make sure all inputs are filled correctly");
    }
  };

  return (
    <Modal size="6xl" isOpen={open} onClose={() => onToggle}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader className="personalInfoModal_inputs-item--title">
          Add Education
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
                School name
              </FormLabel>
              <Input
                onChange={handleChange}
                type="text"
                name="school"
                id="title"
                placeholder="Enter a title"
                className="personalInfoModal_inputs-item--input"
              />
            </FormControl>
            <FormControl>
              <FormLabel
                className="personalInfoModal_inputs-item--label"
                htmlFor="title"
              >
                Degree
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
            <FormControl className="personalInfoModal_inputs-item">
              <FormLabel
                htmlFor="start-date"
                className="personalInfoModal_inputs-item--label"
              >
                Starting date
              </FormLabel>
              <Input
                onChange={handleChange}
                type="date"
                name="startDate"
                className="personalInfoModal_inputs-item--input"
                placeholder="Select a date"
              />
            </FormControl>
            <FormControl className="personalInfoModal_inputs-item">
              <FormLabel
                htmlFor="end-date"
                className="personalInfoModal_inputs-item--label"
              >
                Ending date
              </FormLabel>
              <Input
                onChange={handleChange}
                type="date"
                name="endDate"
                className="personalInfoModal_inputs-item--input"
                placeholder="Select a date"
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

export default AddEducationModal;
