import { Box, InputProps } from "@chakra-ui/react";
import { FC } from "react";
import PrimaryButton from "../../PrimaryButton";
import SkillTag from "../SkillTag/SkillTag";
import "./OfferResultItem.scss";

interface Props extends InputProps {
  role?: string;
  description?: string;
  agence?: string;
  deadline?: string;
  cover?: string;
  agenceImage?: string;
  applicants?: string;
}

const OfferResultItem: FC<Props> = ({
  role,
  description,
  agence,
  deadline,
  applicants,
  cover,
  agenceImage,
}) => {
  return (
    <Box className="home__resultItem">
      <div className="home__resultItem--heading">
        <img src="img/demandeur/agencelogo.png" alt="" />
        <h1>UI/UX Designer</h1>
        <span>Yassir algérie</span>
      </div>
      <p className="home__resultItem--description">
        Auctor pharetra gravida turpis volutpat porttitor nec commodo laoreet
        est. Eu feugiat eget suscipit vitae. Ac sit sit ullamcorper sed faucibus
        facilisi at pulvinar. Sed imperdiet mattis blandit nisl bibendum amet
        adipiscing. Diam in scelerisque amet, ut turpis ante diam odio. Vitae in
        augue.
      </p>
      <div className="home__resultItem--skills">
        <SkillTag content="Figma" size="small" />
        <SkillTag content="Adobe Xd" size="small" />
        <SkillTag content="+3" size="small" />
      </div>
      <div className="home__resultItem--buttons">
        <PrimaryButton content="Details" color="Gray-5" />
        <PrimaryButton content="Apply" color="primaryColor" />
      </div>
    </Box>
  );
};

export default OfferResultItem;
