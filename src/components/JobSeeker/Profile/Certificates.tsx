import { InputProps } from "@chakra-ui/react";
import { faAdd, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getManageSeeker } from "../../../store/selectors";
import { fetchSeeker } from "../../../store/slices/seeker";
import AddDiplomeModal from "./Modals/AddDiplomeModal";

interface Props extends InputProps {
  paragraph?: string;
}

const Certificates: FC<Props> = ({ paragraph }) => {
  //Modal state management
  const [open, setOpen] = React.useState(false);

  const onToggle = () => {
    setOpen(!open);
    console.log(open);
  };

  // ===========================================================================
  // Selectors
  // ===========================================================================
  const { diplomes, msg, error } = useSelector(getManageSeeker);

  // ===========================================================================
  // Dispatch
  // ==========================================================================
  const dispatch = useDispatch();

  const _fetchSeeker = () => {
    dispatch(fetchSeeker());
  };

  // ===========================================================================
  // State
  // ===========================================================================

  // ===========================================================================
  // Hooks
  // ===========================================================================
  useEffect(() => {
    _fetchSeeker();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div className="jsprofile__box--header">
        <h1>Certficates & diplomas</h1>
        <div className="jsprofile__box--action" onClick={() => onToggle()}>
          <FontAwesomeIcon
            className="jsprofile__box--action-icon"
            icon={faAdd}
          />
          <span>Add certificate</span>
        </div>
      </div>
      {diplomes &&
        diplomes.map(({ title }) => {
          return (
            <div>
              <div className="jsprofile__education">
                <div className="jsprofile__education--content">
                  <div className="jsprofile__education--content-certificatesTitle">
                    <h1>{title}</h1>
                    <span>Juin 2022</span>
                  </div>
                  <div className="jsprofile__education--content-certificatesFiles">
                    <img src="/img/demandeur/agence_cover.png" alt="" />
                    {/* {data.images.map((myImage) => (
                    <img src={myImage} alt="" />
                  ))} */}
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
      <AddDiplomeModal
        open={open}
        onToggle={onToggle}
        className="modal"
        actionButton="Save changes"
      />
    </div>
  );
};

export default Certificates;
