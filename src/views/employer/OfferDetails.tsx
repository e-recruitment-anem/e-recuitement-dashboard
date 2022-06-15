import { FC } from "react";
import EmployerNavbar from "../../components/Employer/EmployerNavbar";
import "../../styles/_components.scss";
import OfferDetailsCard from "../../components/OfferDetailsCard";
import ApplicantBox from "../../components/Employer/ApplicantBox";
import { Box } from "@chakra-ui/react";
import SkillTag from "../../components/JobSeeker/SkillTag/SkillTag";
import PrimaryButton from "../../components/PrimaryButton";
import SimilarProfileBox from "../../components/Employer/SimilarProfileBox";

const EmplOfferDetails: FC = () => {
  const applicantList = [
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
    },
  ];

  const summaryBoxItems = [
    { title: "Experience", content: "Minimum 3 ans" },
    { title: "Type de travail", content: "À distance" },
    { title: "Type de contrat", content: "CDI / CDD" },
    { title: "Salaire annuel", content: "230.000 DA" },
    { title: "Durée", content: "18 mois" },
  ];

  const similarProfiles = [
    {
      name: "UI/UX Design",
      biography:
        "Nisi turpis duis quisque est leo at et fermentum. Pretium nulla libero integer volutpat et odio eu ac neque. Non dolor et aliquet fringilla. Non lacinia commodo quam sed nullam gravida",
      skills: ["UI/UX design", "Adobe Xd", "Agile"],
    },
    {
      name: "UI/UX Design",
      biography:
        "Nisi turpis duis quisque est leo at et fermentum. Pretium nulla libero integer volutpat et odio eu ac neque. Non dolor et aliquet fringilla. Non lacinia commodo quam sed nullam gravida",
      skills: ["UI/UX design", "Adobe Xd", "Agile"],
    },
    {
      name: "UI/UX Design",
      biography:
        "Nisi turpis duis quisque est leo at et fermentum. Pretium nulla libero integer volutpat et odio eu ac neque. Non dolor et aliquet fringilla. Non lacinia commodo quam sed nullam gravida",
      skills: ["UI/UX design", "Adobe Xd", "Agile"],
    },
  ];

  const offerSkills = [
    "Figma",
    "ReactJs",
    "Adobe Xd",
    "ReactJs",
    "Figma",
    "ReactJs",
    "Figma",
    "ReactJs",
    "Figma",
    "ReactJs",
    "Figma",
    "ReactJs",
  ];

  return (
    <>
      <EmployerNavbar />
      <div className="emplOfferDetails">
        <div className="emplOfferDetails__left">
          <OfferDetailsCard
            summaryBoxItems={summaryBoxItems}
            skills={offerSkills}
            actionButton="Edit job offer"
          />
          <div className="emplOfferDetails__left--list">
            <h1>List of applicants</h1>
            {applicantList.map((el) => (
              <ApplicantBox
                name={el.name}
                biography={el.biography}
                information={el.information}
              />
            ))}
          </div>
        </div>
        <div className="similarProfiles">
          <h1>Best profiles</h1>
          {similarProfiles.map((el) => (
            <SimilarProfileBox
              name={el.name}
              biography={el.biography}
              skills={el.skills}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default EmplOfferDetails;
