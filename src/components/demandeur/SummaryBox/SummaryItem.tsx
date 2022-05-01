import { FC } from "react";
import { ISummaryItem } from "../../../helpers/types";

const Divider: FC = () => (
  <svg
    width="1"
    height="90"
    viewBox="0 0 1 79"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="1" height="79" fill="#E0E0E0" />
  </svg>
);
const SummaryItem: FC<ISummaryItem> = ({ title, content }) => (
  <>
    <div className="Summarybox-item">
      <h1>{title} : </h1>
      <p>{content}</p>
    </div>
    <Divider />
  </>
);

export default SummaryItem;
