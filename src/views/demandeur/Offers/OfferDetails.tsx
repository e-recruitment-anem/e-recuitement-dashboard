import { FC } from "react";
import { v4 as uuidv4 } from "uuid";
import SimilarOffers from "../../../components/JobSeeker/SimilarOffers/SimilarOffers";
import NavBar from "../../../components/NavBar";
import "../../../styles/_components.scss";
import OfferDetailsCard from "../../../components/OfferDetailsCard";

const OfferDetails: FC = () => {
  const summaryBoxItems = [
    { title: "Experience", content: "Minimum 3 ans" },
    { title: "Type de travail", content: "À distance" },
    { title: "Type de contrat", content: "CDI / CDD" },
    { title: "Salaire annuel", content: "230.000 DA" },
    { title: "Durée", content: "18 mois" },
  ];

  const similarOffers = [
    {
      role: "UI/UX Design",
      description:
        "Nisi turpis duis quisque est leo at et fermentum. Pretium nulla libero integer volutpat et odio eu ac neque. Non dolor et aliquet fringilla. Non lacinia commodo quam sed nullam gravida",
      agence: "Yassir Algérie",
      deadline: "Il y a 8 jours: ",
      applicants: "12 applicant",
      agenceImage: "img/demandeur/agencelogo.png",
      cover: "img/demandeur/agencelogo.png",
    },
    {
      role: "UI/UX Design",
      description:
        "Nisi turpis duis quisque est leo at et fermentum. Pretium nulla libero integer volutpat et odio eu ac neque. Non dolor et aliquet fringilla. Non lacinia commodo quam sed nullam gravida",
      agence: "Yassir Algérie",
      deadline: "Il y a 8 jours: ",
      applicants: "12 applicant",
      agenceImage: "img/demandeur/agencelogo.png",
      cover: "img/demandeur/agencelogo.png",
    },
    {
      role: "UI/UX Design",
      description:
        "Nisi turpis duis quisque est leo at et fermentum. Pretium nulla libero integer volutpat et odio eu ac neque. Non dolor et aliquet fringilla. Non lacinia commodo quam sed nullam gravida",
      agence: "Yassir Algérie",
      deadline: "Il y a 8 jours: ",
      applicants: "12 applicant",
      agenceImage: "img/demandeur/agencelogo.png",
      cover: "img/demandeur/agencelogo.png",
    },
  ];

  const skills = [
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
      <NavBar />
      <div className="offerdetails">
        <OfferDetailsCard
          skills={skills}
          summaryBoxItems={summaryBoxItems}
          actionButton="Apply for the job"
          additionalStyle="Card-size3"
        />
        <div className="offerdetails__similaroffers">
          <h1>Offres similaires</h1>
          {similarOffers.map(
            ({
              role,
              description,
              agence,
              deadline,
              applicants,
              agenceImage,
              cover,
            }) => (
              <SimilarOffers
                key={uuidv4()}
                role={role}
                description={description}
                agence={agence}
                deadline={deadline}
                applicants={applicants}
                agenceImage={agenceImage}
                cover={cover}
              />
            )
          )}
        </div>
      </div>
    </>
  );
};

export default OfferDetails;
