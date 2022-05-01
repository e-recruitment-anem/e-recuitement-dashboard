import { Box } from "@chakra-ui/react";
import { FC } from "react";
import "./SummaryBox.scss";

interface Props {
  content?: String;
}

const divider = (
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

const SummaryBox: FC<Props> = ({ content }) => {
  return (
    <>
      <Box className="Summarybox">
        <div className="Summarybox-item">
          <h1>Experience</h1>
          <p>Minimum 3 ans</p>
        </div>
        {divider}
        <div className="Summarybox-item">
          <h1>Type de travail:</h1>
          <p>À distance</p>
        </div>
        {divider}
        <div className="Summarybox-item">
          <h1>Type de contrat:</h1>
          <p>CDI / CDD</p>
        </div>
        {divider}
        <div className="Summarybox-item">
          <h1>Salaire annuel:</h1>
          <p>230.000 DA</p>
        </div>{" "}
        {divider}
        <div className="Summarybox-item">
          <h1>Durée:</h1>
          <p>18 mois</p>
        </div>
      </Box>
    </>
  );
};

export default SummaryBox;
