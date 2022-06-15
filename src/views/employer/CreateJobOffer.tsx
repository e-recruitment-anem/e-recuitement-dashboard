import { Box, FormControl } from "@chakra-ui/react";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { FC } from "react";
import EmployerNavbar from "../../components/Employer/EmployerNavbar";
import AddSkillModal from "../../components/JobSeeker/Profile/Modals/AddSkillModal";
import SkillTag from "../../components/JobSeeker/SkillTag/SkillTag";
import PrimaryButton from "../../components/PrimaryButton";
import "../../styles/_components.scss";

const CreateJobOffer: FC = () => {
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

  // DETAIL INPUT
  const detailsInputsIncrement = () => {
    detailsInputs.push("detail");
    console.log(detailsInputs);
  };

  const detailsInputs = ["detail", "detail"];
  const offerSkills = [
    "UI/UX design",
    "UI/UX design",
    "UI/UX design",
    "UI/UX design",
    "UI/UX design",
    "UI/UX design",
    "UI/UX design",
    "UI/UX design",
    "UI/UX design",
    "UI/UX design",
  ];
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
            <FormControl className="createOffer__input size3">
              <label htmlFor="min-age">Minimum age</label>
              <input type="number" id="min-age" placeholder="min age" />
            </FormControl>
            <FormControl className="createOffer__input size3">
              <label htmlFor="max-age">Maximum age</label>
              <input type="number" id="max-age" placeholder="max age" />
            </FormControl>
            <FormControl className="createOffer__input size3">
              <label htmlFor="military">Military situation</label>
              <select name="" id="military">
                <option value="Yes">Necessary</option>
                <option value="No">Not necessary</option>
              </select>
            </FormControl>
          </div>
        </div>
        {divider}
        <div className="createOffer__exigences">
          <div className="createOffer__exigences-heading">
            <h1>Exigences</h1>
            <div
              className="jsprofile__box--action createOffer__exigences-action"
              onClick={() => onToggle()}
            >
              <FontAwesomeIcon
                className="jsprofile__box--action-icon"
                icon={faAdd}
              />
              <span>Add a skill</span>
            </div>
          </div>
          <div className="createOffer__exigences-list">
            {offerSkills.map((el) => (
              <SkillTag content={el} size="xl" />
            ))}
          </div>
        </div>
        {divider}
        <div className="createOffer__specInfo">
          <h1>Specific information</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida
            commodo id ac quis ornare amet. Ut tempor sed tellus, pulvinar
            pellentesque mauris. Massa orci etiam eget vitae, egestas volutpat
            dignissim vestibulum malesuada. Mattis urna imperdiet id ut
            consectetur. Consectetur nunc aliquam ornare tincid.
          </p>
          <div className="createOffer__specInfo-bottom">
            <div className="createOffer__specInfo-inputs">
              <FormControl className="createOffer__input">
                <label htmlFor="title">Description</label>
                <textarea id="title" placeholder="Offer description..." />
              </FormControl>
              {detailsInputs.map((el, index) => (
                <FormControl className="createOffer__input size2">
                  <label htmlFor="title">Detail {index + 1}</label>
                  <input type="text" id="title" placeholder="Enter a title" />
                </FormControl>
              ))}
            </div>
            <PrimaryButton
              content="Add detail"
              color="primaryColor"
              onClick={() => detailsInputsIncrement()}
            ></PrimaryButton>
          </div>
        </div>
        <AddSkillModal open={open} onToggle={onToggle} className="modal" />
      </Box>
    </>
  );
};

export default CreateJobOffer;
