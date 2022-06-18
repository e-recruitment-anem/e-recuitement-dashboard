import { Box, Tab, TabList, Tabs } from "@chakra-ui/react";
import { FC, useEffect } from "react";
import SimilarOffers from "../../components/JobSeeker/SimilarOffers/SimilarOffers";
import NavBar from "../../components/NavBar";
import "../../styles/_components.scss";
import { v4 as uuidv4 } from "uuid";
import PrimaryButton from "../../components/PrimaryButton";
import Biography from "../../components/JobSeeker/Profile/Biography";
import PersonalInformation from "../../components/JobSeeker/Profile/PersonalInformation";
import Languages from "../../components/JobSeeker/Profile/Languages";
import Education from "../../components/JobSeeker/Profile/Education";
import ProfessionalExperience from "../../components/JobSeeker/Profile/ProfessionalExperience";
import Certificates from "../../components/JobSeeker/Profile/Certificates";
import ProfileSkills from "../../components/JobSeeker/Profile/ProfileSkills";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getManageSeeker } from "../../store/selectors";
import { fetchSeeker } from "../../store/slices/seeker";
import { useToast } from "@chakra-ui/react";

const Profile: FC = () => {
  // ===========================================================================
  // Selectors
  // ===========================================================================
  const { msg, error } = useSelector(getManageSeeker);
  const toast = useToast();

  // ===========================================================================
  // Dispatch
  // ==========================================================================
  const dispatch = useDispatch();

  const _fetchSeeker = () => {
    dispatch(fetchSeeker());
  };

  // ===========================================================================
  // State
  // ===========================================================================

  // ===========================================================================
  // Hooks
  // ===========================================================================
  useEffect(() => {
    _fetchSeeker();
    // eslint-disable-next-line
  }, []);

  if (error) {
    toast({
      position: "bottom-left",
      render: () => (
        <Box color="white" p={3} bg="red.500">
          {msg}
        </Box>
      ),
    });
  }
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

  const [visible, setVisible] = React.useState("general");

  return (
    <>
      <NavBar />
      <div className="jsprofile">
        <div className="jsprofile__left">
          <h1>My profile</h1>

          {/**PROFILE HEADER */}
          <Box className="jsprofile__heading">
            <img src="/img/demandeur/agence_cover.png" alt="" />
            <div className="jsprofile__heading--actions">
              <img src="/img/profileDefault.png" alt="" />
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
                onClick={() => setVisible("general")}
              >
                General
              </Tab>
              <Tab
                className="jsprofile__tabs-item"
                fontSize={"2xl"}
                onClick={() => setVisible("experience")}
              >
                Exeprience
              </Tab>
              <Tab
                className="jsprofile__tabs-item"
                fontSize={"2xl"}
                onClick={() => setVisible("settings")}
              >
                Settings
              </Tab>
              <Tab
                className="jsprofile__tabs-item"
                fontSize={"2xl"}
                onClick={() => setVisible("cv")}
              >
                Generated CV
              </Tab>
            </TabList>
          </Tabs>

          {/**PROFILE SECTIONS */}

          {visible === "general" && (
            <div>
              <Box className="jsprofile__box">
                <PersonalInformation></PersonalInformation>
              </Box>
              <Box className="jsprofile__box">
                <Biography />
              </Box>
              <Box className="jsprofile__box">
                <ProfileSkills />
              </Box>
              <Box className="jsprofile__box">
                <Languages></Languages>
              </Box>
            </div>
          )}

          {visible === "experience" && (
            <div>
              <Box className="jsprofile__box">
                <Education></Education>
              </Box>

              <Box className="jsprofile__box">
                <Certificates></Certificates>
              </Box>

              <Box className="jsprofile__box">
                <ProfessionalExperience></ProfessionalExperience>
              </Box>
            </div>
          )}

          {visible === "cv" && (
            <div>
              <Box className="jsprofile__box-cv">
                <Biography></Biography>
                <PersonalInformation></PersonalInformation>
                <ProfileSkills></ProfileSkills>
                <Languages></Languages>
                <Education></Education>
                <ProfessionalExperience></ProfessionalExperience>
                <Certificates></Certificates>
              </Box>
            </div>
          )}
        </div>

        {/** SIMILAR OFFERS */}
        <div className="offerdetails__similaroffers">
          <h1>Offers you may like</h1>
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
