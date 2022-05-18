import { FC } from "react";
import "./SkillTag.scss";

interface Props {
  content?: string;
  size?: string;
}

const SkillTag: FC<Props> = ({ content, size }) => {
  return (
    <>
      <div className={size}>
        <span>{content}</span>
      </div>
    </>
  );
};

export default SkillTag;
