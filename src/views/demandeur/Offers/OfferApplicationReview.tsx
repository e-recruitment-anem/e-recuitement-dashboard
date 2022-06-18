import { FC } from "react";
import { Box } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import SimilarOffers from "../../../components/JobSeeker/SimilarOffers/SimilarOffers";
import NavBar from "../../../components/NavBar";
import "../../../styles/_components.scss";
import PrimaryButton from "../../../components/PrimaryButton";
import SummaryBox from "../../../components/JobSeeker/SummaryBox/SummaryBox";
import { useNavigate } from "react-router-dom";
import InterviewDetailsBox from "../../../components/JobSeeker/InterviewDetailsBox";

const OfferApplicationReview: FC = () => {
  const navigate = useNavigate();
  const openInNewTab = (url) => {
    navigate(url);
  };

  const applicationDetails = [
    { title: "Title", content: "UI/UX Designer" },
    { title: "Fullname", content: "Mahdaoui Abdelouadoud" },
    { title: "Email", content: "a.mahdaoui@esi-sba.dz" },
    { title: "Phone number", content: "0560000000" },
    { title: "Application date", content: "27 septembre 2022" },
    { title: "Interview date", content: "31 septembre 2022" },
  ];

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
      agenceImage: "/img/demandeur/agencelogo.png",
      cover: "/img/demandeur/agencelogo.png",
    },
    {
      role: "UI/UX Design",
      description:
        "Nisi turpis duis quisque est leo at et fermentum. Pretium nulla libero integer volutpat et odio eu ac neque. Non dolor et aliquet fringilla. Non lacinia commodo quam sed nullam gravida",
      agence: "Yassir Algérie",
      deadline: "Il y a 8 jours: ",
      applicants: "12 applicant",
      agenceImage: "/img/demandeur/agencelogo.png",
      cover: "/img/demandeur/agencelogo.png",
    },
    {
      role: "UI/UX Design",
      description:
        "Nisi turpis duis quisque est leo at et fermentum. Pretium nulla libero integer volutpat et odio eu ac neque. Non dolor et aliquet fringilla. Non lacinia commodo quam sed nullam gravida",
      agence: "Yassir Algérie",
      deadline: "Il y a 8 jours: ",
      applicants: "12 applicant",
      agenceImage: "/img/demandeur/agencelogo.png",
      cover: "/img/demandeur/agencelogo.png",
    },
  ];

  const paragraphs = {
    biography:
      "Nisi turpis duis quisque est leo at et fermentum. Pretium nulla libero integer volutpat et odio eu ac neque. Non dolor et aliquet fringilla. Non lacinia commodo quam sed nullam gravida viverra. Vel tellus gravida vitae vestibulum. Sem dignissim purus ipsum dui sed nulla sed praesent. Senectus ut risus sed venenatis proin. Venenatis eget at diam egestas id tortor erat. Sem dui parturient.",
    motivationLetter:
      "Aliquam eu mi sit elit enim amet tellus. Velit amet eu orci, consectetur volutpat. Vitae, donec scelerisque nibh neque proin arcu aliquam. Cursus nec tempus, commodo pharetra habitant elit dignissim. Dui porttitor euismod eget nunc faucibus eget mi. Duis lacinia id ac blandit iaculis. Porta iaculis morbi sed amet, magna quis pharetra. Gravida dolor, nisl sapien eget sed lobortis egestas. Sit dictum sed nam tellus. Vitae nam est mauris, sed eget.",
  };
  return (
    <>
      <NavBar />
      <div className="interviewdetails__header">
        <h1>Interview details</h1>
        <InterviewDetailsBox></InterviewDetailsBox>
      </div>
      <div className="offerdetails">
        <Box className="offerdetails__bigcard Card-size3">
          <img
            src="/img/demandeur/agence_cover.png"
            alt=""
            className="offerdetails__bigcard--cover"
          />

          <div className="offerdetails__bigcard-content">
            <img
              src="/img/demandeur/agencelogo.png"
              alt=""
              className="offerdetails__bigcard--profilepic"
            />

            <div className="offerdetails__bigcard--heading jobapplication__heading">
              <div>
                <h1>UI/UX Designer</h1>
                <h2>Yassier algérie</h2>
              </div>
              <div className="offerdetails__bigcard--heading-right">
                <div className="offerdetails__bigcard--heading-right-buttons">
                  <PrimaryButton
                    color="primaryColor"
                    content="Offer page"
                    onClick={() => openInNewTab("/offerdetails")}
                  />
                  <PrimaryButton
                    color="primaryColor"
                    content="Edit application"
                    onClick={() => openInNewTab("/offerapplication")}
                  />
                </div>
              </div>
            </div>
            <SummaryBox items={summaryBoxItems} />

            {/* APPLICATION DETAILS */}
            <h1 className="offerAppReview__detailstitle">
              Application details
            </h1>

            <div className="offerAppReview__details">
              {applicationDetails.map((el) => (
                <div className="offerAppReview__details-item">
                  <h1>{el.title} : </h1>
                  <p>{el.content}</p>
                </div>
              ))}
            </div>

            {/* BIOGRAPHY */}
            <div className="offerdetails__bigcard--description">
              <h1>Biography</h1>
              <p>{paragraphs.biography}</p>
            </div>

            {/* MOTIVATION LETTER */}
            <div className="offerdetails__bigcard--description">
              <h1>Motivation letter</h1>
              <p>{paragraphs.motivationLetter}</p>
            </div>

            {/* CV */}
            <div className="offerapplication__cv">
              <label htmlFor="cv">CV (Curriculum vitæ)</label>
              <div className="offerapplication__cv-content">
                <img
                  src="https://img.freepik.com/vecteurs-libre/modele-cv-minimaliste_23-2148899951.jpg?w=2000"
                  alt=""
                />
              </div>
            </div>
          </div>
        </Box>

        {/* SIMILAR OFFERS */}
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

export default OfferApplicationReview;
