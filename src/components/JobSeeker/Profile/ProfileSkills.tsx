import { InputProps } from "@chakra-ui/react";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import SkillTag from "../SkillTag/SkillTag";
import { v4 as uuidv4 } from "uuid";
import React from "react";
import AddSkillModal from "./Modals/AddSkillModal";

interface Props extends InputProps {
  paragraph?: string;
}

const ProfileSkills: FC<Props> = ({ paragraph }) => {
  const [open, setOpen] = React.useState(false);

  const onToggle = () => {
    setOpen(!open);
  };

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
    <div>
      <div className="jsprofile__box--header">
        <h1>Skills</h1>
        <div className="jsprofile__box--action" onClick={() => onToggle()}>
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
      <AddSkillModal open={open} onToggle={onToggle} className="modal" />
    </div>
  );
};

export default ProfileSkills;
