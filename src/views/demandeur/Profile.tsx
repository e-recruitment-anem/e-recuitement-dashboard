import { Box, Tab, TabList, Tabs } from "@chakra-ui/react";
import { FC } from "react";
import SimilarOffers from "../../components/JobSeeker/SimilarOffers/SimilarOffers";
import NavBar from "../../components/NavBar";
import "../../styles/_components.scss";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import SkillTag from "../../components/JobSeeker/SkillTag/SkillTag";
import PrimaryButton from "../../components/PrimaryButton";
import Biography from "../../components/JobSeeker/Profile/Biography";
import PersonalInformation from "../../components/JobSeeker/Profile/PersonalInformation";
import Languages from "../../components/JobSeeker/Profile/Languages";
import Education from "../../components/JobSeeker/Profile/Education";
import ProfessionalExperience from "../../components/JobSeeker/Profile/ProfessionalExperience";
import Certificates from "../../components/JobSeeker/Profile/Certificates";
import ProfileSkills from "../../components/JobSeeker/Profile/ProfileSkills";

const Profile: FC = () => {
  const biographyParagraph =
    "Lorem mi eget libero, lacus adipiscing eu amet. Etiam diam vel leo habitasse risus proin. In pulvinar hac malesuada purus erat. Justo, ultrices integer eu et sed arcu sed lorem sed. Orci, sit sit tellus tristique nunc. Sem non proin posuere tellus nisi accumsan sit eros eget. Libero urna, elementum neque placerat tortor.";

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

  return (
    <>
      <NavBar />
      <div className="jsprofile">
        <div className="jsprofile__left">
          <h1>My profile</h1>

          {/**PROFILE HEADER */}
          <Box className="jsprofile__heading">
            <img src="img/demandeur/agence_cover.png" alt="" />
            <div className="jsprofile__heading--actions">
              <img src="img/profileDefault.png" alt="" />
              <div className="jsprofile__heading--actions-buttons">
                <PrimaryButton
                  content="Change cover picture"
                  color="secondaryColor"
                ></PrimaryButton>
                <PrimaryButton
                  content="Edit profile"
                  color="primaryColor"
                ></PrimaryButton>
              </div>
            </div>
            <div className="jsprofile__heading--content">
              <h1>Mahdaoui Abdelouadoud</h1>
              <p>
                4th year computer science student, UI/UX designer and front-end
                developer
              </p>
              <span>Based in Blida, Algeria</span>
            </div>
          </Box>

          {/*TABS*/}
          <Tabs isLazy className="jsprofile__tabs">
            <TabList borderBottom={"none"}>
              <Tab
                _selected={{ color: "#0061FF" }}
                className="jsprofile__tabs-item"
                fontSize={"2xl"}
              >
                General
              </Tab>
              <Tab className="jsprofile__tabs-item" fontSize={"2xl"}>
                Exeprience
              </Tab>
              <Tab className="jsprofile__tabs-item" fontSize={"2xl"}>
                Settings
              </Tab>
              <Tab className="jsprofile__tabs-item" fontSize={"2xl"}>
                Generated CV
              </Tab>
            </TabList>
          </Tabs>

          {/**PROFILE SECTIONS */}
          <Box className="jsprofile__box">
            <PersonalInformation></PersonalInformation>
          </Box>

          <Box className="jsprofile__box">
            <Biography paragraph={biographyParagraph}></Biography>
          </Box>

          <Box className="jsprofile__box">
            <ProfileSkills></ProfileSkills>
          </Box>

          <Box className="jsprofile__box">
            <Languages></Languages>
          </Box>

          <Box className="jsprofile__box">
            <Education></Education>
          </Box>

          <Box className="jsprofile__box">
            <ProfessionalExperience></ProfessionalExperience>
          </Box>

          <Box className="jsprofile__box">
            <Certificates></Certificates>
          </Box>
        </div>

        {/** SIMILAR OFFERS */}
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

export default Profile;
