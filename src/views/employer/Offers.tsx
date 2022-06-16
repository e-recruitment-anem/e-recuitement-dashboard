import { FC, useState } from "react";
import EmployerNavbar from "../../components/Employer/EmployerNavbar";
import "../../styles/_components.scss";
import { Tabs, TabList, Tab } from "@chakra-ui/react";
import MyOffersBox from "../../components/JobSeeker/MyOffersBox";
import PrimaryButton from "../../components/PrimaryButton";

const Offers: FC = () => {
  const [JobState, setJobState] = useState<string | null>(null);
  const myOffers = [
    {
      agence: "Yassir algérie",
      job: "UI/UX Designer",
      PublicationDate: "Postulé le 04 Janvier 2022",
      description:
        "Tempus duis dui quam consectetur sit turpis vitae. Nisl volutpat non tellus at rhoncus, cursus diam mauris. Elit est velit, metus, suspendisse iaculis ultrices proin vulputate augue. Ut id a faucibus tempus nisl. At at vitae condimentum cursus. Porta amet, dignissim vulputate.",
      JobState: "open",
    },
    {
      agence: "Yassir algérie",
      job: "UI/UX Designer",
      PublicationDate: "Postulé le 04 Janvier 2022",
      description:
        "Tempus duis dui quam consectetur sit turpis vitae. Nisl volutpat non tellus at rhoncus, cursus diam mauris. Elit est velit, metus, suspendisse iaculis ultrices proin vulputate augue. Ut id a faucibus tempus nisl. At at vitae condimentum cursus. Porta amet, dignissim vulputate.",
      JobState: "close",
    },
    {
      agence: "Yassir algérie",
      job: "UI/UX Designer",
      PublicationDate: "Postulé le 04 Janvier 2022",
      description:
        "Tempus duis dui quam consectetur sit turpis vitae. Nisl volutpat non tellus at rhoncus, cursus diam mauris. Elit est velit, metus, suspendisse iaculis ultrices proin vulputate augue. Ut id a faucibus tempus nisl. At at vitae condimentum cursus. Porta amet, dignissim vulputate.",
      JobState: "open",
    },
  ];

  const filterData = () => {
    return JobState
      ? myOffers.filter(
          (offer) => offer.JobState.toLowerCase() === JobState.toLowerCase()
        )
      : myOffers;
  };
  return (
    <>
      <EmployerNavbar />
      <div className="myoffers">
        <div className="myoffers__heading">
          <h1>My offers</h1>
          <PrimaryButton content="Create job offer" color="primaryColor" />
        </div>
        <Tabs isLazy className="myoffers__tabs">
          <TabList borderBottom={"none"}>
            <Tab
              className="myoffers__tabs-item"
              fontSize={"2xl"}
              onClick={() => setJobState(null)}
            >
              All
            </Tab>
            <Tab
              className="myoffers__tabs-item"
              fontSize={"2xl"}
              onClick={() => setJobState("open")}
            >
              Currently open
            </Tab>
            <Tab
              className="myoffers__tabs-item"
              fontSize={"2xl"}
              onClick={() => setJobState("close")}
            >
              Closed
            </Tab>
          </TabList>
        </Tabs>
        <div className="myoffers__list">
          {filterData().map(
            ({ agence, job, PublicationDate, description, JobState }) => (
              <MyOffersBox
                agence={agence}
                job={job}
                PublicationDate={PublicationDate}
                description={description}
                JobState={JobState}
                applicationURL="/employer/offer/details"
                role={1}
              />
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Offers;
