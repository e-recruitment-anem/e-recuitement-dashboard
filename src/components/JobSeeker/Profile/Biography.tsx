import React from "react";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import BiographyModal from "./Modals/BiographyModal";

const Biography: FC = () => {
  const [open, setOpen] = React.useState(false);

  const onToggle = () => {
    setOpen(!open);
    console.log(open);
  };

  const biographyParagraph =
    "Lorem mi eget libero, lacus adipiscing eu amet. Etiam diam vel leo habitasse risus proin. In pulvinar hac malesuada purus erat. Justo, ultrices integer eu et sed arcu sed lorem sed. Orci, sit sit tellus tristique nunc. Sem non proin posuere tellus nisi accumsan sit eros eget. Libero urna, elementum neque placerat tortor.";

  return (
    <div>
      <div className="jsprofile__box--header">
        <h1>Biography</h1>
        <div className="jsprofile__box--action" onClick={() => onToggle()}>
          <FontAwesomeIcon
            className="jsprofile__box--action-icon"
            icon={faPen}
          />
          <span>Edit</span>
        </div>
      </div>
      <p className="jsprofile__biography--paragraph">{biographyParagraph}</p>
      <BiographyModal open={open} onToggle={onToggle} className="modal" />
    </div>
  );
};

export default Biography;
