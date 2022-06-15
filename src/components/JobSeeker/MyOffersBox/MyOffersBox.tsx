import { Box } from "@chakra-ui/react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../PrimaryButton";
import StateTag from "../../StateTag";
import SkillTag from "../SkillTag/SkillTag";
import "./MyOffersBox.scss";

interface Props {
  agence?: string;
  job?: string;
  PublicationDate?: string;
  description?: string;
  JobState?: string;
  applicationURL: string;
  role: number;
}

const MyOffersBox: FC<Props> = ({
  agence,
  job,
  PublicationDate,
  description,
  JobState,
  applicationURL,
  role,
}) => {
  const navigate = useNavigate();
  const openInNewTab = (url) => {
    navigate(url);
  };
  return (
    <Box className="myoffers__box">
      <div className="myoffers__left">
        <img src="img/demandeur/agencelogo.png" alt="" />
        <div className="myoffers__content">
          <div className="myoffers__content--header">
            <div className="myoffers__content--header-group">
              <h1>{agence}</h1>
              <div className="myoffers__content--header-titles">
                <span>{job}</span>
                <span>{PublicationDate}</span>
              </div>
            </div>
            <StateTag content={JobState} state="pending"></StateTag>
          </div>
          <p>{description}</p>
          <div className="myoffers__content--bottom">
            <div className="myoffers__content--skills">
              <SkillTag content="Figma" size="medium"></SkillTag>
              <SkillTag content="Adobe Xd" size="medium"></SkillTag>
              <SkillTag content="Sketch" size="medium"></SkillTag>
              <SkillTag content="InVision" size="medium"></SkillTag>
            </div>
            {role === 0 && (
              <div className="">
                <PrimaryButton
                  content="Offer details"
                  color="Gray-5"
                  additionalStyle="myoffers__content--bottom-button"
                  onClick={() => openInNewTab(applicationURL)}
                ></PrimaryButton>
                <PrimaryButton
                  content="See my application"
                  color="primaryColor"
                  additionalStyle="myoffers__content--bottom-button"
                  onClick={() => openInNewTab(applicationURL)}
                ></PrimaryButton>
              </div>
            )}
            {role === 1 && (
              <PrimaryButton
                content="Offer details"
                color="primaryColor"
                additionalStyle="myoffers__content--bottom-button"
                onClick={() => openInNewTab(applicationURL)}
              ></PrimaryButton>
            )}
          </div>
        </div>
      </div>
    </Box>
  );
};

export default MyOffersBox;
