import { FC } from "react";
import EmployerNavbar from "../../components/Employer/EmployerNavbar";
import "../../styles/_components.scss";
import InterviewBox from "../../components/Employer/InterviewBox/InterviewBox";
import InterviewDetailsBox from "../../components/JobSeeker/InterviewDetailsBox";

const InterviewDetails: FC = () => {
  const interviewer = {
    name: "Cameron Williamson",
    biography:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat et eu imperdiet ipsum elementum ultrices fringilla vitae varius. Est eu egestas aenean tellus metus phasellus. Neque, commodo placerat vitae fermentum. Tempor non volutpa",
    information: [
      { title: "Gender", content: "Man" },
      { title: "Situation", content: "Signle" },
      { title: "Age", content: "22" },
      { title: "Phone:", content: "0560000000" },
    ],
    skills: ["Adobe Xd", "Figma", "Agile"],
  };

  return (
    <>
      <EmployerNavbar />
      <div className="emplInterviewDetails">
        <h1>Interview details</h1>
        <InterviewDetailsBox />
        <h2>Applicant details</h2>
        <InterviewBox
          name={interviewer.name}
          biography={interviewer.biography}
          information={interviewer.information}
          skills={interviewer.skills}
        />
      </div>
    </>
  );
};

export default InterviewDetails;
