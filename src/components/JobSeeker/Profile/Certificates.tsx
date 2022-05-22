import { InputProps } from "@chakra-ui/react";
import { faAdd, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";

interface Props extends InputProps {
  paragraph?: string;
}

const Certificates: FC<Props> = ({ paragraph }) => {
  const professionalExperienceItems = [
    {
      certificateTitle: "Higher National School of Computer Science (Algeria)",
      certificateDate: "January 2020",
      certificateImages: ["img/demandeur/agence_cover.png"],
    },
    {
      title: "Higher National School of Computer Science (Algeria)",
      certificateDate: "January 2020",
      certificateImages: ["img/demandeur/agence_cover.png"],
    },
  ];

  return (
    <div>
      <div className="jsprofile__box--header">
        <h1>Certficates & diplomas</h1>
        <div className="jsprofile__box--action">
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
                <div className="jsprofile__education--content-certificatesTitle">
                  <h1>{data.certificateTitle}</h1>
                  <span>{data.certificateDate}</span>
                </div>
                <div className="jsprofile__education--content-certificatesFiles">
                  {data.certificateImages.map((myImage) => (
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

export default Certificates;
