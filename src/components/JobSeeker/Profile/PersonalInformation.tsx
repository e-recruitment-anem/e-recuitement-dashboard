import { InputProps } from "@chakra-ui/react";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";

interface Props extends InputProps {
  paragraph?: string;
}

const PersonalInformation: FC<Props> = ({ paragraph }) => {
  const personalInformation = [
    { title: "Fullname", level: "Mahdaoui Abdelouadoud" },
    { title: "Email", level: "example@gmail.com" },
    { title: "Phone number", level: "+213 559321737" },
    { title: "Address", level: "City 70 LGT, B05 N12, Zabana, Blida" },
    { title: "Birthday", level: "08/02/2001" },
    { title: "Sexe", level: "Man" },
    { title: "Country", level: "Algeria" },
    { title: "Postal Code", level: "209230" },
    { title: "Familial situation", level: "Signle" },
  ];
  return (
    <div>
      <div className="jsprofile__box--header">
        <h1>Personal information</h1>
        <div className="jsprofile__box--action">
          <FontAwesomeIcon
            className="jsprofile__box--action-icon"
            icon={faPen}
          />
          <span>Edit</span>
        </div>
      </div>
      <div className="jsprofile__languages">
        {personalInformation.map(({ title, level }) => (
          <div className="jsprofile__languages--item">
            <h1>{title}</h1>
            <p>{level}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalInformation;
