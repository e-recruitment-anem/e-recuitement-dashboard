import { Box } from "@chakra-ui/react";
import React from "react";
import { FC } from "react";
import SkillTag from "../JobSeeker/SkillTag/SkillTag";
import PrimaryButton from "../PrimaryButton";
import InterviewModal from "./InterviewModal";

interface Props {
  name?: string;
  biography?: string;
  skills: string[];
}

const SimilarProfileBox: FC<Props> = ({ name, biography, skills }) => {
  const [open, setOpen] = React.useState(false);

  const onToggle = () => {
    setOpen(!open);
  };

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
        <PrimaryButton
          content="Invite for interview"
          color="primaryColor"
          onClick={() => onToggle()}
        />
      </div>
      <InterviewModal
        open={open}
        onToggle={onToggle}
        className="modal"
        actionButton="Create interview"
      />
    </Box>
  );
};

export default SimilarProfileBox;
