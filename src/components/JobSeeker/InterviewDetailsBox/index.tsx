import { Box } from "@chakra-ui/react";
import { title } from "process";
import { FC } from "react";
import "./InterviewDetailsBox.scss";

interface Props {
  title?: string;
  content?: string;
}

const InterviewDetailsBox: FC<Props> = ({ title, content }) => {
  const InterviewBoxItems = [
    { title: "Title:", content: "UI/UX Designer" },
    { title: "Durée:", content: "30 - 45 minutes" },
    { title: "Date:", content: "Thursday, 13th may 2022 at 14:00" },
    { title: "Place:", content: "City 77 LGT, Office 30, hasnaoui" },
    {
      title: "Additional information",
      content:
        "Bring your laptop with you, Make sure to be in office 10 minutes before interview",
    },
  ];
  return (
    <Box className="interviewdetails">
      <p>
        Congratulations you passed to interview phase, we wish you goodluck!
        Here are some information about your interview
      </p>
      <div className="interviewdetails__details">
        {InterviewBoxItems.map(({ title, content }) => (
          <div className="interviewdetails__details--item">
            <h1>{title}</h1>
            <p>{content}</p>
          </div>
        ))}
      </div>
    </Box>
  );
};

export default InterviewDetailsBox;
