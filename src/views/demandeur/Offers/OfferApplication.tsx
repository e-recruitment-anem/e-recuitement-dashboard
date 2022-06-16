import { FC } from "react";
import { Box } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import SkillTag from "../../../components/JobSeeker/SkillTag/SkillTag";
import NavBar from "../../../components/NavBar";
import "../../../styles/_components.scss";
import PrimaryButton from "../../../components/PrimaryButton";

const OfferApplication: FC = () => {
  const applicationDetails = {
    Title: "UI/UX Designer",
    Fullname: "Mahdaoui Abdelouadoud",
    Email: "a.mahdaoui@esi-sba.dz",
    PhoneNumber: "0560000000",
  };
  const summaryBoxItems = [
    { title: "Experience", content: "Minimum 3 ans" },
    { title: "Type de travail", content: "À distance" },
    { title: "Type de contrat", content: "CDI / CDD" },
    { title: "Salaire annuel", content: "230.000 DA" },
    { title: "Durée", content: "18 mois" },
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
        <Box className="offerdetails__bigcard jobapplication">
          <img
            src="img/demandeur/agence_cover.png"
            alt=""
            className="offerdetails__bigcard--cover"
          />

          <div className="offerdetails__bigcard-content">
            <img
              src="img/demandeur/agencelogo.png"
              alt=""
              className="offerdetails__bigcard--profilepic"
            />
            <div className="offerdetails__bigcard--heading jobapplication__heading">
              <div>
                <h1>UI/UX Designer</h1>
                <h2>Yassier algérie</h2>
              </div>
            </div>

            {/* CONTENT */}
            <div className="offerapplication__bigcard-uppersection">
              <div className="offerapplication__bigcard-uppersection--left">
                <div>
                  <h1>Exigences</h1>
                  <div className="offerdetails__bigcard--exigences">
                    {skills.map((skill) => (
                      <SkillTag key={uuidv4()} content={skill} size="large" />
                    ))}
                  </div>
                </div>
                <div className="offerdetails__bigcard--description">
                  <h1>Description</h1>
                  <p>
                    Nisi turpis duis quisque est leo at et fermentum. Pretium
                    nulla libero integer volutpat et odio eu ac neque. Non dolor
                    et aliquet fringilla. Non lacinia commodo quam sed nullam
                    gravida viverra. Vel tellus gravida vitae vestibulum. Sem
                    dignissim purus ipsum dui sed nulla sed praesent. Senectus
                    ut risus sed venenatis proin. Venenatis eget at diam egestas
                    id tortor erat. Sem dui parturient ultrices a. Tincidunt
                    nibh magna amet pellentesque venenatis convallis congue
                    egesta. Nisl ipsum eu amet, et urna, morbi faucibus iaculis.
                    Feugiat feugiat tincidunt integer ac mi nibh facilisis sed
                    sit. Pretium, et turpis cras tellus quis facilisis vel nulla
                    proin. Accumsan fringilla quis nec risus, quisque tristique
                    amet viverra mauris. Vitae a, mattis commodo blandit
                    euismod. Odio in pharetra eu est. Vitae leo et, dui proin
                    dolor justo aliquet eget duis. Sit in varius fusce lorem
                    proin. Duis egestas sit lobortis elit sit platea. Sit cras
                    urna ut laoreet dapibus condimentum elit in. Non eget amet
                    at facilisis etiam nulla eu nulla felis. Tellus eu vulputate
                    cursus arcu. At lacus aenean morbi felis curabitur.
                  </p>
                </div>
              </div>
              <div className="offerapplication__bigcard-uppersection--right">
                {summaryBoxItems.map((el) => (
                  <div>
                    <h1>{el.title} : </h1>
                    <p>{el.content}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="offerapplication__bigcard-applicationDetails">
              <h1>Application details</h1>
              <div className="offerapplication__bigcard-applicationDetails--content">
                {Object.keys(applicationDetails).map((key, index) => (
                  <div className="offerapplication__bigcard-applicationDetails--item">
                    <h1>{key}</h1>
                    <p>{applicationDetails[key]}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="offerapplication__motivationletter">
              <label htmlFor="motivation-letter">Motivation letter</label>
              <textarea
                name="motivation-letter"
                id="motivation-letter"
                placeholder="Your motivations..."
                cols={30}
                rows={6}
              ></textarea>
            </div>
            <div className="offerapplication__cv">
              <label htmlFor="cv">CV (Curriculum vitæ)</label>
              <div className="offerapplication__cv-content">
                <img
                  src="https://img.freepik.com/vecteurs-libre/modele-cv-minimaliste_23-2148899951.jpg?w=2000"
                  alt=""
                />
                <div className="offerapplication__cv-content--buttons">
                  <PrimaryButton
                    color="primaryColor"
                    content="Upload"
                  ></PrimaryButton>
                  <PrimaryButton
                    color="delete"
                    content="Delete"
                  ></PrimaryButton>
                </div>
              </div>
            </div>
            <div className="offerapplication__actions">
              <PrimaryButton color="Gray-5" content="Cancel"></PrimaryButton>
              <PrimaryButton
                color="primaryColor"
                content="Submit application"
              ></PrimaryButton>
            </div>
          </div>
        </Box>

        {/* SIMILAR OFFERS */}
        {/* <div className="offerdetails__similaroffers">
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
        </div> */}
      </div>
    </>
  );
};

export default OfferApplication;
