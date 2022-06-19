import { Tab, TabList, Tabs } from "@chakra-ui/react";
import { FC, useState } from "react";
import MyOffersBox from "../../../components/JobSeeker/MyOffersBox";
import NavBar from "../../../components/NavBar";
import "../../../styles/_components.scss";

const MyOffers: FC = () => {
  const [JobState, setJobState] = useState<string | null>(null);
  const myOffers = [
    {
      agence: "Yassir algérie",
      job: "UI/UX Designer",
      PublicationDate: "Postulé le 04 Janvier 2022",
      description:
        "Tempus duis dui quam consectetur sit turpis vitae. Nisl volutpat non tellus at rhoncus, cursus diam mauris. Elit est velit, metus, suspendisse iaculis ultrices proin vulputate augue. Ut id a faucibus tempus nisl. At at vitae condimentum cursus. Porta amet, dignissim vulputate.",
      JobState: "pending",
    },
    {
      agence: "Yassir algérie",
      job: "UI/UX Designer",
      PublicationDate: "Postulé le 04 Janvier 2022",
      description:
        "Tempus duis dui quam consectetur sit turpis vitae. Nisl volutpat non tellus at rhoncus, cursus diam mauris. Elit est velit, metus, suspendisse iaculis ultrices proin vulputate augue. Ut id a faucibus tempus nisl. At at vitae condimentum cursus. Porta amet, dignissim vulputate.",
      JobState: "interview",
    },
    {
      agence: "Yassir algérie",
      job: "UI/UX Designer",
      PublicationDate: "Postulé le 04 Janvier 2022",
      description:
        "Tempus duis dui quam consectetur sit turpis vitae. Nisl volutpat non tellus at rhoncus, cursus diam mauris. Elit est velit, metus, suspendisse iaculis ultrices proin vulputate augue. Ut id a faucibus tempus nisl. At at vitae condimentum cursus. Porta amet, dignissim vulputate.",
      JobState: "pending",
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
      <NavBar />

      <div className="myoffers">
        <h1>My applications</h1>
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
              onClick={() => setJobState("pending")}
            >
              Pending
            </Tab>
            <Tab
              className="myoffers__tabs-item"
              fontSize={"2xl"}
              onClick={() => setJobState("interview")}
            >
              Interviews
            </Tab>
            <Tab
              className="myoffers__tabs-item"
              fontSize={"2xl"}
              onClick={() => setJobState("rejected")}
            >
              Rejected
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
                applicationURL="/offers/detail"
                role={0}
              />
            )
          )}
        </div>
      </div>
    </>
  );
};

export default MyOffers;
