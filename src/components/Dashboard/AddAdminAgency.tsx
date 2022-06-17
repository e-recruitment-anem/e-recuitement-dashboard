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
    <Modal size="6xl" isOpen={open} onClose={() => onToggle}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader className="personalInfoModal_inputs-item--title">
          Add agency admin
        </ModalHeader>
        <ModalCloseButton onClick={onToggle} />
        <ModalBody pb={6}>
          <div className="personalInfoModal_inputs">
            <FormControl className="personalInfoModal_inputs-item">
              <FormLabel
                htmlFor="first-name"
                className="personalInfoModal_inputs-item--label"
              >
                Firstname
              </FormLabel>
              <Input
                id="first-name"
                placeholder="ex. John"
                className="personalInfoModal_inputs-item--input"
              />
            </FormControl>
            <FormControl className="personalInfoModal_inputs-item">
              <FormLabel
                htmlFor="last-name"
                className="personalInfoModal_inputs-item--label"
              >
                Lastname
              </FormLabel>
              <Input
                id="last"
                placeholder="ex. Smith"
                className="personalInfoModal_inputs-item--input"
              />
            </FormControl>
            <FormControl className="personalInfoModal_inputs-item">
              <FormLabel
                htmlFor="email"
                className="personalInfoModal_inputs-item--label"
              >
                Email
              </FormLabel>
              <Input
                id="email"
                placeholder="ex. example@gmail.com"
                className="personalInfoModal_inputs-item--input"
              />
            </FormControl>
            <FormControl className="personalInfoModal_inputs-item">
              <FormLabel
                htmlFor="agency"
                className="personalInfoModal_inputs-item--label"
              >
                Agency
              </FormLabel>
              <Select
                id="agency"
                className="personalInfoModal_inputs-item--input"
              >
                {agencies.map((el) => (
                  <option>{el}</option>
                ))}
              </Select>
            </FormControl>
            <FormControl className="personalInfoModal_inputs-item">
              <FormLabel
                htmlFor="birthdate"
                className="personalInfoModal_inputs-item--label"
              >
                Birthdate
              </FormLabel>
              <DatePicker
                className="personalInfoModal_inputs-item--input"
                placeholder="Select a date"
                name="birthdate"
                onChange={(date: string) => console.log(date)}
              />
            </FormControl>
            <FormControl className="personalInfoModal_inputs-item">
              <FormLabel
                htmlFor="phone-number"
                className="personalInfoModal_inputs-item--label"
              >
                Phone number
              </FormLabel>
              <Input
                id="phone-number"
                placeholder="ex. 0560000000"
                className="personalInfoModal_inputs-item--input"
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
            Create agency admin
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddAdminAgency;
