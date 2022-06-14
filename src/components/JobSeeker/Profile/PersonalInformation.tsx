import { InputProps } from "@chakra-ui/react";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { FC } from "react";
import PersonalInformationModal from "./Modals/PersonalInformationModal";

interface Props extends InputProps {
  paragraph?: string;
}

const PersonalInformation: FC<Props> = ({ paragraph }) => {
  const [open, setOpen] = React.useState(false);

  const onToggle = () => {
    setOpen(!open);
  };

  const personalInformation = [
    { title: "Fullname", content: "Mahdaoui Abdelouadoud" },
    { title: "Email", content: "example@gmail.com" },
    { title: "Phone number", content: "+213 559321737" },
    { title: "Address", content: "City 70 LGT, B05 N12, Zabana, Blida" },
    { title: "Birthday", content: "08/02/2001" },
    { title: "Sexe", content: "Man" },
    { title: "Country", content: "Algeria" },
    { title: "Postal Code", content: "209230" },
    { title: "Familial situation", content: "Signle" },
  ];
  return (
    <div>
      <div className="jsprofile__box--header">
        <h1>Personal information</h1>
        <div className="jsprofile__box--action" onClick={() => onToggle()}>
          <FontAwesomeIcon
            className="jsprofile__box--action-icon"
            icon={faPen}
          />
          <span>Edit</span>
        </div>
      </div>
      <div className="jsprofile__languages">
        {personalInformation.map(({ title, content }) => (
          <div className="jsprofile__languages--item">
            <h1>{title}</h1>
            <p>{content}</p>
            <hr />
          </div>
        ))}
      </div>
      <PersonalInformationModal
        open={open}
        onToggle={onToggle}
        className="modal"
      />
    </div>
  );
};

export default PersonalInformation;
