import { Box } from "@chakra-ui/react";
import { FC, MouseEventHandler } from "react";
import SkillTag from "./JobSeeker/SkillTag/SkillTag";
import SummaryBox from "./JobSeeker/SummaryBox/SummaryBox";
import { v4 as uuidv4 } from "uuid";
import "./PrimaryButton/PrimaryButton.scss";
import PrimaryButton from "./PrimaryButton";

interface summaryBox {
  title: string;
  content: string;
}

interface Props {
  summaryBoxItems: summaryBox[];
  skills: string[];
  onClick?: MouseEventHandler<HTMLSpanElement>;
  additionalStyle?: string;
  role: number;
}

const OfferDetailsCard: FC<Props> = ({
  skills,
  summaryBoxItems,
  additionalStyle,
  role,
  onClick,
}) => {
  const circle = (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="10" cy="10.5" r="8.7" stroke="#0061FF" stroke-width="2.6" />
    </svg>
  );
  const style = "offerdetails__bigcard " + additionalStyle;

  return (
    <Box className={style}>
      <img
        src="/img/demandeur/agence_cover.png"
        alt=""
        className="offerdetails__bigcard--cover"
      />

      <div className="offerdetails__bigcard-content">
        <img
          src="/img/demandeur/agencelogo.png"
          alt=""
          className="offerdetails__bigcard--profilepic"
        />
        <div className="offerdetails__bigcard--heading">
          <div>
            <h1>UI/UX Designer</h1>
            <h2>Yassier algérie</h2>
          </div>
          <div className="offerdetails__bigcard--heading-right">
            {role === 1 && (
              <div className="offerdetails__bigcard--heading-right-buttons">
                <PrimaryButton color="primaryColor" content="Edit job offer " />
                <PrimaryButton color="delete" content="Close offer" />
              </div>
            )}
            {role === 0 && (
              <div className="offerdetails__bigcard--heading-right-buttons">
                <PrimaryButton color="primaryColor" content="Apply for job" />{" "}
              </div>
            )}
            <div className="offerdetails__bigcard--heading-right-span">
              <span>Il y a 8 jours: </span>
              <span>12 applicant</span>
            </div>
          </div>
        </div>

        <SummaryBox items={summaryBoxItems} />
        <div>
          <h1>Exigences</h1>
          <div className="offerdetails__bigcard--exigences">
            {skills.map((skill) => (
              <SkillTag key={uuidv4()} content={skill} size="large" />
            ))}
          </div>
        </div>
        <div className="offerdetails__bigcard--description">
          <h1>Description</h1>
          <p>
            Nisi turpis duis quisque est leo at et fermentum. Pretium nulla
            libero integer volutpat et odio eu ac neque. Non dolor et aliquet
            fringilla. Non lacinia commodo quam sed nullam gravida viverra. Vel
            tellus gravida vitae vestibulum. Sem dignissim purus ipsum dui sed
            nulla sed praesent. Senectus ut risus sed venenatis proin. Venenatis
            eget at diam egestas id tortor erat. Sem dui parturient ultrices a.
            Tincidunt nibh magna amet pellentesque venenatis convallis congue
            egesta. Nisl ipsum eu amet, et urna, morbi faucibus iaculis. Feugiat
            feugiat tincidunt integer ac mi nibh facilisis sed sit. Pretium, et
            turpis cras tellus quis facilisis vel nulla proin. Accumsan
            fringilla quis nec risus, quisque tristique amet viverra mauris.
            Vitae a, mattis commodo blandit euismod. Odio in pharetra eu est.
            Vitae leo et, dui proin dolor justo aliquet eget duis. Sit in varius
            fusce lorem proin. Duis egestas sit lobortis elit sit platea. Sit
            cras urna ut laoreet dapibus condimentum elit in. Non eget amet at
            facilisis etiam nulla eu nulla felis. Tellus eu vulputate cursus
            arcu. At lacus aenean morbi felis curabitur.
          </p>
        </div>
        <div className="offerdetails__bigcard--detailspoints">
          <h1>Details de l'offre</h1>
          <div className="offerdetails__bigcard--detailspoints-list">
            <div className="offerdetails__bigcard--detailspoints-item">
              {circle}
              <p>
                In sit felis, felis felis mattis tempus. Nulla quis feugiat
                cursus nunc, tellus, in facilisis.
              </p>
            </div>
            <div className="offerdetails__bigcard--detailspoints-item">
              {circle}
              <p>
                In sit felis, felis felis mattis tempus. Nulla quis feugiat
                cursus nunc, tellus, in facilisis.
              </p>
            </div>
            <div className="offerdetails__bigcard--detailspoints-item">
              {circle}
              <p>
                In sit felis, felis felis mattis tempus. Nulla quis feugiat
                cursus nunc, tellus, in facilisis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default OfferDetailsCard;
