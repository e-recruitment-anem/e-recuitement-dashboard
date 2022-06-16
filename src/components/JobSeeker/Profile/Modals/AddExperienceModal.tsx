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
} from "@chakra-ui/react";
import { DatePicker } from "chakra-ui-date-input";

import { FC } from "react";
import "./Modals.scss";

interface Props extends InputProps {
  open: boolean;
  onToggle?: () => void;
  actionButton: string;
}

const AddExperienceModal: FC<Props> = ({ open, onToggle, actionButton }) => {
  return (
    <Modal size="4xl" isOpen={open} onClose={() => onToggle}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit biography</ModalHeader>
        <ModalCloseButton onClick={onToggle} />
        <ModalBody pb={6}>
          <div className="personalInfoModal_inputs">
            <FormControl>
              <FormLabel htmlFor="title">
                Professional experience title
              </FormLabel>
              <Input id="title" placeholder="Enter a title" />
            </FormControl>
            <FormControl className="personalInfoModal_inputs-item">
              <FormLabel htmlFor="start-date">Starting date</FormLabel>
              <DatePicker
                placeholder="Select a date"
                name="start-date"
                onChange={(date: string) => console.log(date)}
              />
            </FormControl>
            <FormControl className="personalInfoModal_inputs-item">
              <FormLabel htmlFor="end-date">Ending date</FormLabel>
              <DatePicker
                placeholder="Select a date"
                name="end-date"
                onChange={(date: string) => console.log(date)}
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
          >
            Close
          </Button>
          <Button variant="ghost" color={"white"} background="#0061FF">
            {actionButton}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddExperienceModal;
