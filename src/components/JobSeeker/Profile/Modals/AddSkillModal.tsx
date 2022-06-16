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
    <Modal size="lg" isOpen={open} onClose={() => onToggle}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add new skill</ModalHeader>
        <ModalCloseButton onClick={onToggle} />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel htmlFor="familial-situation">Skill</FormLabel>
            <Select id="familial-situation">
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
