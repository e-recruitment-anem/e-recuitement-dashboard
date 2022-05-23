import { FC } from "react";
import "./SkillTag.scss";

interface Props {
  content?: string;
  size?: string;
}

const SkillTag: FC<Props> = ({ content, size }) => {
  return (
    <>
      <div className={"skill-tag " + size}>
        <span>{content}</span>
      </div>
    </>
  );
};

export default SkillTag;
