import { InputProps } from "@chakra-ui/react";
import { faAdd, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";

interface Props extends InputProps {
  paragraph?: string;
}

const Certificates: FC<Props> = ({ paragraph }) => {
  const certificates = [
    {
      title: "Higher National School of Computer Science (Algeria)",
      date: "January 2020",
      images: ["img/demandeur/agence_cover.png"],
    },
    {
      title: "Higher National School of Computer Science (Algeria)",
      date: "January 2020",
      images: ["img/demandeur/agence_cover.png"],
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
          <span>Add certificate</span>
        </div>
      </div>
      {certificates.map((data) => {
        return (
          <div>
            <div className="jsprofile__education">
              <div className="jsprofile__education--content">
                <div className="jsprofile__education--content-certificatesTitle">
                  <h1>{data.title}</h1>
                  <span>{data.date}</span>
                </div>
                <div className="jsprofile__education--content-certificatesFiles">
                  {data.images.map((myImage) => (
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
