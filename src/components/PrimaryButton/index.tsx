import { FC } from "react";
import "./PrimaryButton.scss";

interface Props {
  content?: String;
  color?: String;
  shape?: string;
}

const PrimaryButton: FC<Props> = ({ content, color, shape }) => {
  shape = "PrimaryButton " + color;
  return <span className={shape}>{content}</span>;
};

export default PrimaryButton;
