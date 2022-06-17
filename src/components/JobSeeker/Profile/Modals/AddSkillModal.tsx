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
  const skills = ["Adobe Xd", "Figma", "UI Design", "UX Design"];

  return (
    <Modal size="2xl" isOpen={open} onClose={() => onToggle}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader className="personalInfoModal_inputs-item--title">
          Add new skill
        </ModalHeader>
        <ModalCloseButton onClick={onToggle} />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel
              htmlFor="familial-situation"
              className="personalInfoModal_inputs-item--label"
            >
              Skill
            </FormLabel>
            <Select
              id="familial-situation"
              className="personalInfoModal_inputs-item--input"
            >
              {skills.map((el) => (
                <option>{el}</option>
              ))}
            </Select>
          </FormControl>
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
