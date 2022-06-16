import { Box, InputProps } from "@chakra-ui/react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../PrimaryButton";
import SkillTag from "../SkillTag/SkillTag";
import "./OfferResultItem.scss";

interface Props extends InputProps {
  role?: string;
  description?: string;
  agence?: string;
  agenceImage?: string;
  detailsURL: string;
  applicationURL: string;
}

const OfferResultItem: FC<Props> = ({
  role,
  description,
  agence,
  agenceImage,
  detailsURL,
  applicationURL,
}) => {
  const navigate = useNavigate();
  const openInNewTab = (url) => {
    navigate(url);
  };

  return (
    <Box className="home__resultItem">
      <div className="home__resultItem--heading">
        <img src={agenceImage} alt="" />
        <h1>{role}</h1>
        <span>{agence}</span>
      </div>
      <p className="home__resultItem--description">{description}</p>
      <div className="home__resultItem--skills">
        <SkillTag content="Figma" size="small" />
        <SkillTag content="Adobe Xd" size="small" />
        <SkillTag content="+3" size="small" />
      </div>
      <div className="home__resultItem--buttons">
        <PrimaryButton
          content="Details"
          color="Gray-5"
          onClick={() => openInNewTab(detailsURL)}
        />
        <PrimaryButton
          content="Apply"
          color="primaryColor"
          onClick={() => openInNewTab(applicationURL)}
        />
      </div>
    </Box>
  );
};

export default OfferResultItem;
