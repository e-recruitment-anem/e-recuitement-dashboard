import { FC } from "react";
import EmployerNavbar from "../../components/Employer/EmployerNavbar";
import "../../styles/_components.scss";
import InterviewBox from "../../components/Employer/InterviewBox/InterviewBox";
import { useNavigate } from "react-router-dom";

const Interviews: FC = () => {
  const navigate = useNavigate();
  const openInNewTab = (url) => {
    navigate(url);
  };

  const interviewsList = [
    {
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
    },
    {
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
    },
    {
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
    },
  ];
  return (
    <>
      <EmployerNavbar />
      <div className="myoffers">
        <h1>My interviews</h1>

        <div className="myoffers__list">
          {interviewsList.map((el) => (
            <InterviewBox
              name={el.name}
              biography={el.biography}
              information={el.information}
              skills={el.skills}
              onClick={() => openInNewTab("/employer/interview/details")}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Interviews;
