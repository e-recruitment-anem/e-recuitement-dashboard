import { FC } from "react";
import "./SkillTag.scss";

interface Props {
  content?: String;
}

const SkillTag: FC<Props> = ({ content }) => {
  return (
    <>
      <div className="tag">
        <span>{content}</span>
      </div>
    </>
  );
};

export default SkillTag;
