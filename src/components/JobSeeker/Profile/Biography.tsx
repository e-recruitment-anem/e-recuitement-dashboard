import { InputProps } from "@chakra-ui/react";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";

interface Props extends InputProps {
  paragraph?: string;
}

const Biography: FC<Props> = ({ paragraph }) => {
  return (
    <div>
      <div className="jsprofile__box--header">
        <h1>Biography</h1>
        <div className="jsprofile__box--action">
          <FontAwesomeIcon
            className="jsprofile__box--action-icon"
            icon={faPen}
          />
          <span>Edit</span>
        </div>
      </div>
      <p className="jsprofile__biography--paragraph">{paragraph}</p>
    </div>
  );
};

export default Biography;
