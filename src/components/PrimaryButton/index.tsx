import { FC } from "react";
import "./PrimaryButton.scss";

interface Props {
  content?: String;
  color?: String;
  shape?: string;
  additionalStyle?: string;
}

const PrimaryButton: FC<Props> = ({
  content,
  color,
  shape,
  additionalStyle,
}) => {
  shape = "PrimaryButton " + color + " " + additionalStyle;
  return <span className={shape}>{content}</span>;
};

export default PrimaryButton;
