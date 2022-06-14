import {
  Button,
  FormControl,
  FormLabel,
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

import { FC } from "react";
import "./Modals.scss";

interface Props extends InputProps {
  open: boolean;
  onToggle?: () => void;
}

const PersonalInformationModal: FC<Props> = ({ open, onToggle }) => {
  const languages = ["English", "Arabic", "French"];
  const levels = ["Beginner", "Intermediate", "Professional"];

  return (
    <Modal size="4xl" isOpen={open} onClose={() => onToggle}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit biography</ModalHeader>
        <ModalCloseButton onClick={onToggle} />
        <ModalBody pb={6}>
          <div className="personalInfoModal_inputs">
            {languages.map((language) => (
              <FormControl className="personalInfoModal_inputs-item">
                <FormLabel htmlFor="familial-situation">{language}</FormLabel>
                <Select id="familial-situation">
                  {levels.map((el) => (
                    <option>{el}</option>
                  ))}
                </Select>
              </FormControl>
            ))}
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
