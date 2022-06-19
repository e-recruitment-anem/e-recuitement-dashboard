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
  Select,
  Textarea,
} from "@chakra-ui/react";
import { DatePicker } from "chakra-ui-date-input";

import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface Props extends InputProps {
  open: boolean;
  onToggle?: () => void;
  actionButton?: string;
}

const InterviewModal: FC<Props> = ({ open, onToggle, actionButton }) => {
  const workingTime = ["08:00", "09:00", "10:00", "11:00", "12:00"];

  const navigate = useNavigate();
  const openInNewTab = (url) => {
    navigate(url);
  };

  return (
    <Modal size="4xl" isOpen={open} onClose={() => onToggle}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create interview</ModalHeader>
        <ModalCloseButton onClick={onToggle} />
        <ModalBody pb={6}>
          <div className="personalInfoModal_inputs">
            <FormControl className="personalInfoModal_inputs-item">
              <FormLabel htmlFor="min-duration">Minimum duration</FormLabel>
              <Input id="min-duration" placeholder="Enter a title" />
            </FormControl>
            <FormControl className="personalInfoModal_inputs-item">
              <FormLabel htmlFor="max-duration">Maximum duration</FormLabel>
              <Input id="max-duration" placeholder="Enter a title" />
            </FormControl>
            <FormControl className="personalInfoModal_inputs-item">
              <FormLabel htmlFor="date">Interview date</FormLabel>
              <DatePicker
                placeholder="Select a date"
                name="date"
                onChange={(date: string) => console.log(date)}
              />
            </FormControl>
            <FormControl className="personalInfoModal_inputs-item">
              <FormLabel htmlFor="time">Starting time</FormLabel>
              <Select id="time">
                {workingTime.map((el) => (
                  <option>{el}</option>
                ))}
              </Select>
            </FormControl>
            <FormControl className="personalInfoModal_inputs-item">
              <FormLabel htmlFor="place">Place</FormLabel>
              <Input id="place" placeholder="Enter a title" />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="additional-info">
                Additional information
              </FormLabel>
              <Textarea id="additional-info" placeholder="Enter a title" />
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
          <Button
            variant="ghost"
            color={"white"}
            background="#0061FF"
            onClick={() => openInNewTab("/employer/interviews")}
          >
            {actionButton}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default InterviewModal;
