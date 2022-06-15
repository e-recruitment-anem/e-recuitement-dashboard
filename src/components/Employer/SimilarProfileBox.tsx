import { Box } from "@chakra-ui/react";
import { FC } from "react";
import SkillTag from "../JobSeeker/SkillTag/SkillTag";
import PrimaryButton from "../PrimaryButton";

interface Props {
  name?: string;
  biography?: string;
  skills: string[];
}

const SimilarProfileBox: FC<Props> = ({ name, biography, skills }) => {
  return (
    <Box className="similarProfiles__item">
      <div className="similarProfiles__item-heading">
        <img src="/img/avatar.png" alt="" />
        <div>
          <h1>{name}</h1>
          <p>{biography}</p>
        </div>
      </div>
      <div className="similarProfiles__item-skills">
        {skills.map((el) => (
          <SkillTag content={el} size="small" />
        ))}
      </div>
      <div className="similarProfiles__item-actions">
        <PrimaryButton content="See profile" color="Gray-5" />
        <PrimaryButton content="Invite for interview" color="primaryColor" />
      </div>
    </Box>
  );
};

export default SimilarProfileBox;
