import { Box } from "@chakra-ui/react";
import { FC } from "react";
import PrimaryButton from "../../PrimaryButton";
import StateTag from "../../StateTag";
import SkillTag from "../SkillTag/SkillTag";
import "./MyOffersBox.scss";

interface Props {
  agence?: string;
  role?: string;
  PublicationDate?: string;
  description?: string;
  JobState?: string;
}

const MyOffersBox: FC<Props> = ({
  agence,
  role,
  PublicationDate,
  description,
  JobState,
}) => {
  return (
    <Box className="myoffers__box">
      <div className="myoffers__left">
        <img src="img/demandeur/agencelogo.png" alt="" />
        <div className="myoffers__content">
          <div className="myoffers__content--header">
            <div className="myoffers__content--header-group">
              <h1>{agence}</h1>
              <div className="myoffers__content--header-titles">
                <span>{role}</span>
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
            <PrimaryButton
              content="See details"
              color="primaryColor"
              additionalStyle="myoffers__content--bottom-button"
            ></PrimaryButton>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default MyOffersBox;
