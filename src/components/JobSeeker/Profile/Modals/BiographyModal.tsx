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
  Textarea,
} from "@chakra-ui/react";
import { FC } from "react";

interface Props extends InputProps {
  open: boolean;
  onToggle?: () => void;
  biography?: string;
}

const Biography: FC<Props> = ({ open, onToggle, biography }) => {
  return (
    <Modal size="4xl" isOpen={open} onClose={() => onToggle}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader className="personalInfoModal_inputs-item--title">
          Edit biography
        </ModalHeader>
        <ModalCloseButton onClick={onToggle} />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel className="personalInfoModal_inputs-item--label">
              Biography
            </FormLabel>
            <Textarea placeholder="Biography...">{biography}</Textarea>
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

export default Biography;
