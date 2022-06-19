import { Box } from "@chakra-ui/react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import EmployerNavbar from "../../components/Employer/EmployerNavbar";
import PrimaryButton from "../../components/PrimaryButton";
import "../../styles/_components.scss";

const EmployerDashboard: FC = () => {
  const myOffersList = [
    {
      title: "UI/UX Designer",
      jobType: "Remote",
      postingDate: "Posted 6 minutes ago by You",
      nbProposal: 2,
      nbVisitors: 4,
    },
    {
      title: "UI/UX Designer",
      jobType: "Remote",
      postingDate: "Posted 6 minutes ago by You",
      nbProposal: 2,
      nbVisitors: 4,
    },
    {
      title: "UI/UX Designer",
      jobType: "Remote",
      postingDate: "Posted 6 minutes ago by You",
      nbProposal: 2,
      nbVisitors: 4,
    },
    {
      title: "UI/UX Designer",
      jobType: "Remote",
      postingDate: "Posted 6 minutes ago by You",
      nbProposal: 2,
      nbVisitors: 4,
    },
  ];

  const tips = [
    {
      img: "/img/tip1.svg",
      content: "Complete your profile",
    },
    {
      img: "/img/tip2.svg",
      content: "Post new job offer",
    },
    {
      img: "/img/tip3.svg",
      content: "Explore more profiles",
    },
  ];

  const navigate = useNavigate();
  const openInNewTab = (url) => {
    navigate(url);
  };

  return (
    <>
      <EmployerNavbar />
      <div className="empDashboard">
        <div className="empDashboard__heading">
          <div className="empDashboard__heading-titles">
            <h1>Welcome to your dashboard</h1>
            <p>Mahdaoui Abdelouadoud</p>
          </div>
          <div className="empDashboard__heading-actions">
            <PrimaryButton
              content="Browse other job offers"
              color="primaryColor"
            ></PrimaryButton>
            <PrimaryButton
              content="Create job offer"
              color="primaryColor"
              onClick={() => openInNewTab("/employer/offers/create")}
            ></PrimaryButton>
          </div>
        </div>
        <div className="empDashboard__body">
          <div className="empDashboard__body-left">
            <Box className="empDashboard__body-left--header">
              <h1>Your postings</h1>
              <p>See all postings</p>
            </Box>
            {myOffersList.map((el) => (
              <Box className="empDashboard__body-left--item">
                <div className="empDashboard__body-left--itemtitles">
                  <h1>{el.title}</h1>
                  <p>{el.jobType}</p>
                  <span>{el.postingDate}</span>
                </div>
                <div className="empDashboard__body-left--itemstats">
                  <div>
                    <p>{el.nbProposal}</p>
                    <span>Proposals</span>
                  </div>
                  <div>
                    <p>{el.nbVisitors}</p>
                    <span>Visitors</span>
                  </div>
                </div>
                <img src="/img/options.svg" alt="" />
              </Box>
            ))}
          </div>
          <div className="empDashboard__body-right">
            <div className="empDashboard__body-right--upper">
              <h1>Tips for employers</h1>
              {tips.map((el) => (
                <Box className="empDashboard__body-right--upperBox">
                  <img src={el.img} alt="" />
                  <p>{el.content}</p>
                </Box>
              ))}
            </div>
            <div className="empDashboard__body-right--lower">
              <img src="/img/questions.svg" alt="" />
              <div className="empDashboard__body-right--lowerContent">
                <h1>Got more questions?</h1>
                <p>
                  Don’t hesitate to reach us in our social media or throw our
                  email
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployerDashboard;
