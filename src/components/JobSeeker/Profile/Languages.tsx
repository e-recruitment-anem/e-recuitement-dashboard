import { InputProps } from "@chakra-ui/react";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";

interface Props extends InputProps {
  paragraph?: string;
}

const Languages: FC<Props> = ({ paragraph }) => {
  const languages = [
    { languageTitle: "Arabic", level: "Intermediate" },
    { languageTitle: "French", level: "Beginner" },
    { languageTitle: "English", level: "Professional" },
  ];
  return (
    <div>
      <div className="jsprofile__box--header">
        <h1>Languages</h1>
        <div className="jsprofile__box--action">
          <FontAwesomeIcon
            className="jsprofile__box--action-icon"
            icon={faPen}
          />
          <span>Edit</span>
        </div>
      </div>
      <div className="jsprofile__languages">
        {languages.map((data) => (
          <div className="jsprofile__languages--item">
            <h1>{data.languageTitle}</h1>
            <p>{data.level}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Languages;
