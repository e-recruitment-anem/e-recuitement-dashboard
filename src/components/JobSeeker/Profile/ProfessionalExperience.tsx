import { InputProps } from "@chakra-ui/react";
import { faAdd, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { FC } from "react";
import AddExperienceModal from "./Modals/AddExperienceModal";

interface Props extends InputProps {
  paragraph?: string;
}

const ProfessionalExperience: FC<Props> = ({ paragraph }) => {
  //Modal state management
  const [open, setOpen] = React.useState(false);

  const onToggle = () => {
    setOpen(!open);
    console.log(open);
  };

  const professionalExperienceItems = [
    {
      title: "Higher National School of Computer Science (Algeria)",
      duration: "2018 - 2023",
    },
    {
      title: "Higher National School of Computer Science (Algeria)",
      duration: "2018 - 2023",
    },
  ];

  return (
    <div>
      <div className="jsprofile__box--header">
        <h1>Professional experience</h1>
        <div className="jsprofile__box--action" onClick={() => onToggle()}>
          <FontAwesomeIcon
            className="jsprofile__box--action-icon"
            icon={faAdd}
          />
          <span>Add experience</span>
        </div>
      </div>
      {professionalExperienceItems.map((data) => {
        return (
          <div>
            <div className="jsprofile__education">
              <div className="jsprofile__education--content">
                <h1>{data.title}</h1>
                <span>{data.duration}</span>
              </div>
              <div
                className="jsprofile__education--actions"
                onClick={() => onToggle()}
              >
                <FontAwesomeIcon
                  className="jsprofile__education--actions-editicon"
                  icon={faPen}
                />
                <FontAwesomeIcon
                  className="jsprofile__education--actions-deleteicon"
                  icon={faTrash}
                />
              </div>
            </div>
            <hr className="jsprofile__education--divider" />
          </div>
        );
      })}
      <AddExperienceModal
        open={open}
        onToggle={onToggle}
        className="modal"
        actionButton="Save changes"
      />
    </div>
  );
};

export default ProfessionalExperience;
