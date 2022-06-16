import { Box } from "@chakra-ui/react";
import { FC, MouseEventHandler } from "react";
import SkillTag from "../../JobSeeker/SkillTag/SkillTag";
import "./InterviewBox.scss";

interface Information {
  title: string;
  content: string;
}

interface Props {
  name: string;
  biography: string;
  information: Information[];
  skills: string[];
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const InterviewBox: FC<Props> = ({
  information,
  skills,
  name,
  biography,
  onClick,
}) => {
  return (
    <Box className="myoffers__box interviewBox" onClick={onClick}>
      <img src="/img/avatar.png" alt="" />
      <div className="interviewBox__content">
        <div className="interviewBox__content-heading">
          <h1>{name}</h1>
          <span>le 04 Janvier 2022</span>
        </div>
        <p>{biography}</p>
        <div className="emplOfferDetails__left--list-itemTrailing">
          {information.map((info) => (
            <div>
              <span>{info.title} :</span>
              <span>{info.content}</span>
            </div>
          ))}
        </div>
        <div className="myoffers__content--skills interviewBox__bottom">
          {skills.map((el) => (
            <SkillTag content={el} size="large" />
          ))}
        </div>
      </div>
    </Box>
  );
};

export default InterviewBox;
