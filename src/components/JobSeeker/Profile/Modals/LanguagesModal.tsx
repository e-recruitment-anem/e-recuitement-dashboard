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
    <Modal size="6xl" isOpen={open} onClose={() => onToggle}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader className="personalInfoModal_inputs-item--title">
          Edit biography
        </ModalHeader>
        <ModalCloseButton onClick={onToggle} />
        <ModalBody pb={6}>
          <div className="personalInfoModal_inputs">
            {languages.map((language) => (
              <FormControl className="personalInfoModal_inputs-item">
                <FormLabel
                  htmlFor="familial-situation"
                  className="personalInfoModal_inputs-item--label"
                >
                  {language}
                </FormLabel>
                <Select
                  id="familial-situation"
                  className="personalInfoModal_inputs-item--input"
                >
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
