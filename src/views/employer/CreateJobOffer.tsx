import { Box, FormControl } from "@chakra-ui/react";
import { FC } from "react";
import EmployerNavbar from "../../components/Employer/EmployerNavbar";
import PrimaryButton from "../../components/PrimaryButton";
import "../../styles/_components.scss";

const CreateJobOffer: FC = () => {
  const divider = "";
  return (
    <>
      <EmployerNavbar />
      <Box className="createOffer">
        <div className="createOffer__heading">
          <h1>Create a new customized job offer</h1>
          <PrimaryButton
            content="Post your new job"
            color="primaryColor"
          ></PrimaryButton>
        </div>
        {divider}
        <div className="createOffer__general">
          <h1>General information</h1>
          <div className="createOffer__general-inputs">
            <FormControl className="createOffer__input size3">
              <label htmlFor="title">Title</label>
              <input type="text" id="title" placeholder="Enter a title" />
            </FormControl>
            <FormControl className="createOffer__input size3">
              <label htmlFor="title">Experience</label>
              <input
                type="number"
                id="title"
                placeholder="Enter a minimum years experience"
              />
            </FormControl>
            <FormControl className="createOffer__input size3">
              <label htmlFor="job-type">Job type</label>
              <select name="" id="job-type">
                <option value="Office">Office</option>
                <option value="Remote">Remote</option>
              </select>
            </FormControl>
            <FormControl className="createOffer__input size3">
              <label htmlFor="contract-type">Contract type</label>
              <select name="" id="contract-type">
                <option value="CDD">CDD</option>
                <option value="CDI">CDI</option>
              </select>
            </FormControl>
            <FormControl className="createOffer__input size3">
              <label htmlFor="title">Duration</label>
              <input
                type="number"
                id="title"
                placeholder="Enter a duration in months"
              />
            </FormControl>
            <FormControl className="createOffer__input size3">
              <label htmlFor="title">Salary</label>
              <input type="number" id="title" placeholder="Enter a salary" />
            </FormControl>
          </div>
        </div>
        <div className="createOffer__exigences">
          <h1>Exigences</h1>
        </div>
      </Box>
    </>
  );
};

export default CreateJobOffer;
