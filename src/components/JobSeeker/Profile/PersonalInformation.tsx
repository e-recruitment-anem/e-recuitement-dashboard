import { InputProps } from "@chakra-ui/react";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import React, { useEffect } from "react";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, getManageSeeker } from "../../../store/selectors";
import { fetchSeeker } from "../../../store/slices/seeker";
import PersonalInformationModal from "./Modals/PersonalInformationModal";

interface Props extends InputProps {
  paragraph?: string;
}

const PersonalInformation: FC<Props> = ({ paragraph }) => {
  const [open, setOpen] = React.useState(false);

  const onToggle = () => {
    setOpen(!open);
  };

  // ===========================================================================
  // Selectors
  // ===========================================================================
  const { seeker } = useSelector(getManageSeeker);
  const { user } = useSelector(getAuth);

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

  const personalInformation = [
    { title: "Fullname", content: seeker.firstName + " " + seeker.lastName },
    { title: "Email", content: user.email },
    { title: "Phone number", content: user.phoneNumber ? user.phoneNumber : '...' },
    { title: "Address", content: seeker.address ? seeker.address : '...' },
    { title: "Birth Date", content: seeker.birthDate ? moment(seeker.birthDate).format("L") : '...' },
    { title: "Gender", content: seeker.gender ? seeker.gender : '...' },
    { title: "Nationality", content: seeker.nationality ? seeker.nationality : '...' },
    { title: "Birth Place", content: seeker.birthPlace ? seeker.birthPlace : '...' },
    { title: "Postal Code", content: seeker.postalCode ? seeker.postalCode : '...' },
    { title: "Familial situation", content: seeker.familySituation ? seeker.familySituation : '...' },
    { title: "Milltary Situation", content: seeker.milltarySituation ? seeker.milltarySituation : '...' },
    { title: "Identity Card Number", content: seeker.identityCardNumber ? seeker.identityCardNumber : '...' },
  ];
  return (
    <div>
      <div className="jsprofile__box--header">
        <h1>Personal information</h1>
        <div className="jsprofile__box--action" onClick={() => onToggle()}>
          <FontAwesomeIcon
            className="jsprofile__box--action-icon"
            icon={faPen}
          />
          <span>Edit</span>
        </div>
      </div>
      <div className="jsprofile__languages">
        {personalInformation.map(({ title, content }) => (
          <div className="jsprofile__languages--item">
            <h1>{title}</h1>
            <p>{content}</p>
            <hr />
          </div>
        ))}
      </div>
      <PersonalInformationModal
        open={open}
        onToggle={onToggle}
        className="modal"
      />
    </div>
  );
};

export default PersonalInformation;
