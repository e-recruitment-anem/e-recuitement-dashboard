import { Box } from "@chakra-ui/react";
import { FC, MouseEventHandler } from "react";
import "../../styles/_components.scss";

interface Information {
  title: string;
  content: string;
}
interface Props {
  name?: String;
  biography?: String;
  information: Information[];
  onClick?: MouseEventHandler<HTMLSpanElement>;
}

const ApplicantBox: FC<Props> = ({ name, biography, information, onClick }) => {
  return (
    <Box className="emplOfferDetails__left--list-item">
      <img src="/img/avatar.png" alt="" />
      <div className="emplOfferDetails__left--list-itemContent">
        <div className="emplOfferDetails__left--list-itemHeading">
          <p>{name}</p>
          <img src="/img/options.svg" alt="" />
        </div>
        <p>{biography}</p>
        <div className="emplOfferDetails__left--list-itemTrailing">
          {information.map((info) => (
            <div>
              <span>{info.title} :</span>
              <span>{info.content}</span>
            </div>
          ))}
        </div>
      </div>
    </Box>
  );
};

export default ApplicantBox;
