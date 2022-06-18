import { SkeletonText } from '@chakra-ui/react';
import { faAdd, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import React, { useEffect } from 'react';
import { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getManageSeeker } from '../../../store/selectors';
import { fetchSeeker, initMessages } from '../../../store/slices/seeker';
import AddEducationModal from './Modals/AddEducationModal';

const Education: FC = () => {
  // ===========================================================================
  // Selectors
  // ===========================================================================
  const { educations, loading } = useSelector(getManageSeeker);

  // ===========================================================================
  // Dispatch
  // ==========================================================================
  const dispatch = useDispatch();

  const _fetchSeeker = () => {
    dispatch(fetchSeeker());
  };

  const _initMessages = () => {
    dispatch(initMessages());
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

  //Modal state management
  const [open, setOpen] = React.useState(false);

  const onToggle = () => {
    if (open) {
      _initMessages();
    }
    setOpen(!open);
  };

  return (
    <div>
      <div className="jsprofile__box--header">
        <h1>Education</h1>
        <div className="jsprofile__box--action" onClick={() => onToggle()}>
          <FontAwesomeIcon
            className="jsprofile__box--action-icon"
            icon={faAdd}
          />
          <span>Add education</span>
        </div>
      </div>
      {loading && educations.length === 0 && (
        <div>
          <SkeletonText mt="4" noOfLines={4} spacing="4" />
          <hr className="jsprofile__education--divider" />
        </div>
      )}
      {educations.map((education) => {
        return (
          <div>
            <div className="jsprofile__education">
              <div className="jsprofile__education--content">
                <h1>{education.school}</h1>
                <h2>{education.title}</h2>
                <span>
                  {moment(education.startDate).year() +
                    ' - ' +
                    moment(education.endDate).year()}
                </span>
                <div className="jsprofile__education--content-files">
                  {/* {education.pictures.map((myImage) => (
                    <img src={myImage} alt="" />
                  ))} */}
                  <img src="/img/demandeur/agence_cover.png" alt="" />
                  <img src="/img/demandeur/agence_cover.png" alt="" />
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
      <AddEducationModal
        open={open}
        onToggle={onToggle}
        className="modal"
        actionButton="Save changes"
      />
    </div>
  );
};

export default Education;
