import { Box, FormControl } from "@chakra-ui/react";
import React from "react";
import { FC } from "react";
import AddSkillModal from "../../../components/JobSeeker/Profile/Modals/AddSkillModal";
import NavBar from "../../../components/NavBar";
import PrimaryButton from "../../../components/PrimaryButton";
import "../../../styles/_components.scss";

const CreateJobRequest: FC = () => {
  const divider = (
    <svg
      width="1250"
      height="2"
      viewBox="0 0 1312 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="1312" height="1" fill="#D9D9D9" />
    </svg>
  );

  //MODAL STATE
  const [open, setOpen] = React.useState(false);

  const onToggle = () => {
    setOpen(!open);
  };

  const agencies = ["Yassir", "FoodBeeper", "Algerie Telecom"];
  const admins = ["Admin 01", "Admin 02", "Admin 03", "Admin 04"];

  return (
    <>
      <NavBar />
      <Box className="createOffer">
        <div className="createOffer__heading">
          <h1>Create a new customized job request</h1>
          <PrimaryButton
            content="Send job request"
            color="primaryColor"
          ></PrimaryButton>
        </div>
        {divider}
        <div className="createOffer__specInfo">
          <h1>General information</h1>
          <div className="createOffer__specInfo-bottom">
            <div className="createOffer__specInfo-inputs">
              <FormControl className="createOffer__input size3">
                <label htmlFor="title">Agency</label>
                <select name="agency" id="agency">
                  {agencies.map((agency) => (
                    <option value="Office">{agency}</option>
                  ))}
                </select>
              </FormControl>
              <FormControl className="createOffer__input size3">
                <label htmlFor="title">Agency</label>
                <select name="agency" id="agency">
                  {admins.map((admin) => (
                    <option value="Office">{admin}</option>
                  ))}
                </select>
              </FormControl>
              <FormControl className="createOffer__input size3">
                <label htmlFor="title">Begin date</label>
                <input type="date" id="beginDate" placeholder="Select a date" />
              </FormControl>
            </div>
          </div>
        </div>
        <div className="createOffer__general">
          <h1>Job request information</h1>
          <div className="createOffer__general-inputs">
            <FormControl className="createOffer__input size3">
              <label htmlFor="title">Device Eligibility</label>
              <select name="deviceEligibility" id="deviceEligibility">
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </FormControl>
            <FormControl className="createOffer__input size3">
              <label htmlFor="title">Training</label>
              <select name="training" id="training">
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </FormControl>
            <FormControl className="createOffer__input size3">
              <label htmlFor="title">Learning</label>
              <select name="learning" id="learning">
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </FormControl>
            <FormControl className="createOffer__input size3">
              <label htmlFor="title">Night Work</label>
              <select name="nightWork" id="nightWork">
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </FormControl>
            <FormControl className="createOffer__input size3">
              <label htmlFor="title">Team Work</label>
              <select name="teamWork" id="teamWork">
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </FormControl>
            <FormControl className="createOffer__input size3">
              <label htmlFor="title">Availability</label>
              <select name="avalibility" id="avalibility">
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </FormControl>
            <FormControl className="createOffer__input">
              <label htmlFor="title">Motivation</label>
              <textarea
                id="title"
                name="reason"
                placeholder="Your motivations..."
              />
            </FormControl>
          </div>
        </div>

        <AddSkillModal open={open} onToggle={onToggle} className="modal" />
      </Box>
    </>
  );
};

export default CreateJobRequest;
