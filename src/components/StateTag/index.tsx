import { FC } from "react";
import "./StateTag.scss";

interface Props {
  content?: String;
  state?: String;
  shape?: string;
}

const StateTag: FC<Props> = ({ content, state, shape }) => {
  shape = "StateTag " + state;
  return <span className={shape}>{content}</span>;
};

export default StateTag;
