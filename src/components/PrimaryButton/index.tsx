import { FC, MouseEventHandler } from "react";
import "./PrimaryButton.scss";

interface Props {
  content?: String;
  color?: String;
  shape?: string;
  additionalStyle?: string;
  onClick?: MouseEventHandler<HTMLSpanElement>;
}

const PrimaryButton: FC<Props> = ({
  content,
  color,
  shape,
  additionalStyle,
  onClick,
}) => {
  shape = "PrimaryButton " + color + " " + additionalStyle;
  return (
    <span className={shape} onClick={onClick}>
      {content}
    </span>
  );
};

export default PrimaryButton;
