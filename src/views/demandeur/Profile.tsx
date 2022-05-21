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

const Profile: FC = () => {
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
  const languages = [
    { title: "Arabic", level: "Intermediate" },
    { title: "French", level: "Beginner" },
    { title: "English", level: "Professional" },
  ];
  const personalInformation = [
    { title: "Fullname", level: "Mahdaoui Abdelouadoud" },
    { title: "Email", level: "example@gmail.com" },
    { title: "Phone number", level: "+213 559321737" },
    { title: "Address", level: "City 70 LGT, B05 N12, Zabana, Blida" },
    { title: "Birthday", level: "08/02/2001" },
    { title: "Sexe", level: "Man" },
    { title: "Country", level: "Algeria" },
    { title: "Postal Code", level: "209230" },
    { title: "Familial situation", level: "Signle" },
  ];
  return (
    <>
      <NavBar />
      <div className="jsprofile">
        <div className="jsprofile__left">
          <h1>My profile</h1>

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

          {/* PERSONAL INFORMATION SECTION */}
          <Box className="jsprofile__box">
            <div className="jsprofile__box--header">
              <h1>Personal information</h1>
              <div className="jsprofile__box--action">
                <FontAwesomeIcon
                  className="jsprofile__box--action-icon"
                  icon={faPen}
                />
                <span>Edit</span>
              </div>
            </div>
            <div className="jsprofile__languages">
              {personalInformation.map(({ title, level }) => (
                <div className="jsprofile__languages--item">
                  <h1>{title}</h1>
                  <p>{level}</p>
                  <hr />
                </div>
              ))}
            </div>
          </Box>

          {/* BIOGRAPHY SECTION */}
          <Box className="jsprofile__box">
            <div className="jsprofile__box--header">
              <h1>Biography</h1>
              <div className="jsprofile__box--action">
                <FontAwesomeIcon
                  className="jsprofile__box--action-icon"
                  icon={faPen}
                />{" "}
                <span>Edit</span>
              </div>
            </div>
            <p className="jsprofile__biography--paragraph">
              Lorem mi eget libero, lacus adipiscing eu amet. Etiam diam vel leo
              habitasse risus proin. In pulvinar hac malesuada purus erat.
              Justo, ultrices integer eu et sed arcu sed lorem sed. Orci, sit
              sit tellus tristique nunc. Sem non proin posuere tellus nisi
              accumsan sit eros eget. Libero urna, elementum neque placerat
              tortor.
            </p>
          </Box>

          {/* SKILLS SECTION */}
          <Box className="jsprofile__box">
            <div className="jsprofile__box--header">
              <h1>Skills</h1>
              <div className="jsprofile__box--action">
                <FontAwesomeIcon
                  className="jsprofile__box--action-icon"
                  icon={faAdd}
                />
                <span>Add skill</span>
              </div>
            </div>
            <div className="offerdetails__bigcard--exigences jsprofile__skills">
              {skills.map((skill) => (
                <SkillTag key={uuidv4()} content={skill} size="large" />
              ))}
            </div>
          </Box>

          {/* LANGUAGES SECTION */}
          <Box className="jsprofile__box">
            <div className="jsprofile__box--header">
              <h1>Languages</h1>
              <div className="jsprofile__box--action">
                <FontAwesomeIcon
                  className="jsprofile__box--action-icon"
                  icon={faPen}
                />{" "}
                <span>Edit</span>
              </div>
            </div>
            <div className="jsprofile__languages">
              {languages.map(({ title, level }) => (
                <div className="jsprofile__languages--item">
                  <h1>{title}</h1>
                  <p>{level}</p>
                </div>
              ))}
            </div>
          </Box>

          {/* EDUCATION SECTION */}
          <Box className="jsprofile__box">
            <div className="jsprofile__box--header">
              <h1>Education</h1>
              <div className="jsprofile__box--action">
                <FontAwesomeIcon
                  className="jsprofile__box--action-icon"
                  icon={faAdd}
                />
                <span>Add education</span>
              </div>
            </div>
            <div className="jsprofile__education">
              <div className="jsprofile__education--content">
                <h1>Higher National School of Computer Science (Algeria)</h1>
                <h2>Master of Computer Science (MSCS), Computer science</h2>
                <span>2018 - 2023</span>
                <div className="jsprofile__education--content-files">
                  <img src="img/demandeur/agence_cover.png" alt="" />
                  <img src="img/demandeur/agence_cover.png" alt="" />
                </div>
              </div>
              <div className="jsprofile__education--actions">
                <FontAwesomeIcon
                  className="jsprofile__education--actions-editicon"
                  icon={faPen}
                />
                <FontAwesomeIcon
                  className="jsprofile__education--actions-deleteicon"
                  icon={faTrash}
                />
              </div>
            </div>
            <hr className="jsprofile__education--divider" />
            <div className="jsprofile__education">
              <div className="jsprofile__education--content">
                <h1>Higher National School of Computer Science (Algeria)</h1>
                <h2>Master of Computer Science (MSCS), Computer science</h2>
                <span>2018 - 2023</span>
                <div className="jsprofile__education--content-files">
                  <img src="img/demandeur/agence_cover.png" alt="" />
                  <img src="img/demandeur/agence_cover.png" alt="" />
                </div>
              </div>
              <div className="jsprofile__education--actions">
                <FontAwesomeIcon
                  className="jsprofile__education--actions-editicon"
                  icon={faPen}
                />
                <FontAwesomeIcon
                  className="jsprofile__education--actions-deleteicon"
                  icon={faTrash}
                />
              </div>
            </div>
          </Box>

          {/* PROFESSIONAL EXPERIENCE SECTION */}
          <Box className="jsprofile__box">
            <div className="jsprofile__box--header">
              <h1>Professional experience</h1>
              <div className="jsprofile__box--action">
                <FontAwesomeIcon
                  className="jsprofile__box--action-icon"
                  icon={faAdd}
                />
                <span>Add experience</span>
              </div>
            </div>
            <div className="jsprofile__education">
              <div className="jsprofile__education--content">
                <h1>Higher National School of Computer Science (Algeria)</h1>
                <span>2018 - 2023</span>
              </div>
              <div className="jsprofile__education--actions">
                <FontAwesomeIcon
                  className="jsprofile__education--actions-editicon"
                  icon={faPen}
                />
                <FontAwesomeIcon
                  className="jsprofile__education--actions-deleteicon"
                  icon={faTrash}
                />
              </div>
            </div>
            <hr className="jsprofile__education--divider" />
          </Box>

          {/* CERTIFICATE & DIPLOMAS SECTION */}
          <Box className="jsprofile__box">
            <div className="jsprofile__box--header">
              <h1>Certficates & diplomas</h1>
              <div className="jsprofile__box--action">
                <FontAwesomeIcon
                  className="jsprofile__box--action-icon"
                  icon={faAdd}
                />
                <span>Add experience</span>
              </div>
            </div>
            <div className="jsprofile__education">
              <div className="jsprofile__education--content">
                <div className="jsprofile__education--content-certificatesTitle">
                  <h1>Master in computer science</h1>
                  <span>January 2022</span>
                </div>
                <div className="jsprofile__education--content-certificatesFiles">
                  <img src="img/demandeur/agence_cover.png" alt="" />
                  <img src="img/demandeur/agence_cover.png" alt="" />
                </div>
              </div>

              <div className="jsprofile__education--actions">
                <FontAwesomeIcon
                  className="jsprofile__education--actions-editicon"
                  icon={faPen}
                />
                <FontAwesomeIcon
                  className="jsprofile__education--actions-deleteicon"
                  icon={faTrash}
                />
              </div>
            </div>
            <hr className="jsprofile__education--divider" />
          </Box>
        </div>

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
