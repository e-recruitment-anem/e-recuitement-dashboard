import { InputProps } from "@chakra-ui/react";
import { faAdd, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";

interface Props extends InputProps {
  paragraph?: string;
}

const Education: FC<Props> = ({ paragraph }) => {
  const educationItems = [
    {
      title: "Higher National School of Computer Science (Algeria)",
      subtitle: "Master of Computer Science (MSCS), Computer science",
      duration: "2018 - 2023",
      pictures: [
        "img/demandeur/agence_cover.png",
        "img/demandeur/agence_cover.png",
      ],
    },
    {
      title: "Higher National School of Computer Science (Algeria)",
      subtitle: "Master of Computer Science (MSCS), Computer science",
      duration: "2018 - 2023",
      pictures: [
        "img/demandeur/agence_cover.png",
        "img/demandeur/agence_cover.png",
      ],
    },
  ];

  return (
    <div>
      <div className="jsprofile__box--header">
        <h1>Education</h1>
        <div className="jsprofile__box--action">
          <FontAwesomeIcon
            className="jsprofile__box--action-icon"
            icon={faAdd}
          />
          <span>Add education</span>
        </div>
      </div>
      {educationItems.map((data) => {
        return (
          <div>
            <div className="jsprofile__education">
              <div className="jsprofile__education--content">
                <h1>{data.title}</h1>
                <h2>{data.subtitle}</h2>
                <span>{data.duration}</span>
                <div className="jsprofile__education--content-files">
                  {data.pictures.map((myImage) => (
                    <img src={myImage} alt="" />
                  ))}
                </div>
              </div>
              <div className="jsprofile__education--actions">
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
    </div>
  );
};

export default Education;
