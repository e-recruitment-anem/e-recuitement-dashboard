import { Box, InputProps } from "@chakra-ui/react";
import { FC } from "react";
import SkillTag from "../SkillTag/SkillTag";
import "./SimilarOffers.scss";

interface Props extends InputProps {
  role?: string;
  description?: string;
  agence?: string;
  deadline?: string;
  cover?: string;
  agenceImage?: string;
  applicants?: string;
}

const SimilarOffers: FC<Props> = ({
  role,
  description,
  agence,
  deadline,
  applicants,
  cover,
  agenceImage,
}) => {
  return (
    <Box className="similaroffers">
      <div className="similaroffers--heading">
        <img src={cover} alt="" className="similaroffers--heading-cover" />
        <div className="similaroffers--heading-text">
          <h1>{role}</h1>
          <p>{description}</p>
        </div>
      </div>
      <div className="similaroffers--middle">
        <SkillTag content="Figma" size="medium" />
        <SkillTag content="React Js" size="medium" />
        <SkillTag content="Adobe Xd" size="medium" />
        <SkillTag content="+2" size="medium" />
      </div>
      <div className="similaroffers--bottom">
        <div className="similaroffers--bottom-agence">
          <img src={agenceImage} alt="" />
          <span>{agence}</span>
        </div>
        <div className="similaroffers--bottom-applicants">
          <span>{deadline}</span>
          <span>{applicants}</span>
        </div>
      </div>
    </Box>
  );
};

export default SimilarOffers;
