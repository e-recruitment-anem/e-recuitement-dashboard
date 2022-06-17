import {
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
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
} from "@chakra-ui/react";
import { DatePicker } from "chakra-ui-date-input";

import { FC } from "react";
import "./Modals.scss";

interface Props extends InputProps {
  open: boolean;
  onToggle?: () => void;
}

const PersonalInformationModal: FC<Props> = ({ open, onToggle }) => {
  const familialSituation = ["Single", "Divorced", "Married"];
  const countries = ["Algeria", "Egypt", "Tunisia"];
  const sexe = ["Man", "Woman"];

  return (
    <Modal size="6xl" isOpen={open} onClose={() => onToggle}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader className="personalInfoModal_inputs-item--title">
          Edit biography
        </ModalHeader>
        <ModalCloseButton onClick={onToggle} />
        <ModalBody pb={6}>
          <div className="personalInfoModal_inputs">
            <FormControl className="personalInfoModal_inputs-item">
              <FormLabel
                htmlFor="full-name"
                className="personalInfoModal_inputs-item--label"
              >
                Fullname
              </FormLabel>
              <Input
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
              <DatePicker
                className="personalInfoModal_inputs-item--input"
                placeholder="Select a date"
                name="birthday"
                onChange={(date: string) => console.log(date)}
              />
            </FormControl>
            <FormControl className="personalInfoModal_inputs-item">
              <FormLabel
                htmlFor="familial-situation"
                className="personalInfoModal_inputs-item--label"
              >
                Sexe
              </FormLabel>
              <Select
                id="familial-situation"
                className="personalInfoModal_inputs-item--input"
              >
                {sexe.map((el) => (
                  <option>{el}</option>
                ))}
              </Select>
            </FormControl>
            <FormControl className="personalInfoModal_inputs-item">
              <FormLabel
                htmlFor="familial-situation"
                className="personalInfoModal_inputs-item--label"
              >
                Country
              </FormLabel>
              <Select
                id="familial-situation"
                className="personalInfoModal_inputs-item--input"
              >
                {countries.map((el) => (
                  <option>{el}</option>
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
              <NumberInput className="personalInfoModal_inputs-item--input">
                <NumberInputField
                  className="personalInfoModal_inputs-item--input"
                  id="postal-code"
                />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
            <FormControl className="personalInfoModal_inputs-item">
              <FormLabel
                htmlFor="familial-situation"
                className="personalInfoModal_inputs-item--label"
              >
                Familial Situation
              </FormLabel>
              <Select
                id="familial-situation"
                className="personalInfoModal_inputs-item--input"
              >
                {familialSituation.map((el) => (
                  <option>{el}</option>
                ))}
              </Select>
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
          >
            Save changes
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default PersonalInformationModal;
