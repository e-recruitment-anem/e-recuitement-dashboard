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
    <Modal size="4xl" isOpen={open} onClose={() => onToggle}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit biography</ModalHeader>
        <ModalCloseButton onClick={onToggle} />
        <ModalBody pb={6}>
          <div className="personalInfoModal_inputs">
            <FormControl className="personalInfoModal_inputs-item">
              <FormLabel htmlFor="full-name">Fullname</FormLabel>
              <Input id="full-name" placeholder="Full name" />
            </FormControl>
            <FormControl className="personalInfoModal_inputs-item">
              <FormLabel htmlFor="address">Address</FormLabel>
              <Input id="address" placeholder="Address" />
            </FormControl>
            <FormControl className="personalInfoModal_inputs-item">
              <FormLabel htmlFor="birthday">Birthday</FormLabel>
              <DatePicker
                placeholder="Select a date"
                name="birthday"
                onChange={(date: string) => console.log(date)}
              />
            </FormControl>
            <FormControl className="personalInfoModal_inputs-item">
              <FormLabel htmlFor="familial-situation">Sexe</FormLabel>
              <Select id="familial-situation">
                {sexe.map((el) => (
                  <option>{el}</option>
                ))}
              </Select>
            </FormControl>
            <FormControl className="personalInfoModal_inputs-item">
              <FormLabel htmlFor="familial-situation">Country</FormLabel>
              <Select id="familial-situation">
                {countries.map((el) => (
                  <option>{el}</option>
                ))}
              </Select>
            </FormControl>
            <FormControl className="personalInfoModal_inputs-item">
              <FormLabel htmlFor="postal-code">Postal code</FormLabel>
              <NumberInput>
                <NumberInputField id="postal-code" />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
            <FormControl className="personalInfoModal_inputs-item">
              <FormLabel htmlFor="familial-situation">
                Familial Situation
              </FormLabel>
              <Select id="familial-situation">
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
          >
            Close
          </Button>
          <Button variant="ghost" color={"white"} background="#0061FF">
            Save changes
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default PersonalInformationModal;
