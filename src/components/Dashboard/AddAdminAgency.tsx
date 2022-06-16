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
} from "@chakra-ui/react";
import { DatePicker } from "chakra-ui-date-input";

import { FC } from "react";

interface Props extends InputProps {
  open: boolean;
  onToggle?: () => void;
}

const AddAdminAgency: FC<Props> = ({ open, onToggle }) => {
  const agencies = ["Yassir", "FoodBeeper", "SweetOclock"];
  return (
    <Modal size="4xl" isOpen={open} onClose={() => onToggle}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add agency admin</ModalHeader>
        <ModalCloseButton onClick={onToggle} />
        <ModalBody pb={6}>
          <div className="personalInfoModal_inputs">
            <FormControl>
              <FormLabel htmlFor="first-name">Firstname</FormLabel>
              <Input id="first-name" placeholder="ex. John" />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="last-name">Lastname</FormLabel>
              <Input id="last" placeholder="ex. Smith" />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input id="email" placeholder="ex. example@gmail.com" />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="agency">Agency</FormLabel>
              <Select id="agency">
                {agencies.map((el) => (
                  <option>{el}</option>
                ))}
              </Select>
            </FormControl>
            <FormControl className="personalInfoModal_inputs-item">
              <FormLabel htmlFor="birthdate">Birthdate</FormLabel>
              <DatePicker
                placeholder="Select a date"
                name="birthdate"
                onChange={(date: string) => console.log(date)}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="phone-number">Phone number</FormLabel>
              <Input id="phone-number" placeholder="ex. 0560000000" />
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
            Create agency admin
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddAdminAgency;
