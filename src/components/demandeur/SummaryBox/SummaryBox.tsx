import { Box } from "@chakra-ui/react";
import { FC } from "react";
import { ISummary } from "../../../helpers/types";
import SummaryItem from "./SummaryItem";
import "./SummaryBox.scss";

const SummaryBox: FC<ISummary> = ({ items }) => {
  return (
    <>
      <Box className="Summarybox">
        {/* ------------ */}
        {items.map(({ title, content }) => (
          <SummaryItem title={title} content={content} />
        ))}
      </Box>
    </>
  );
};

export default SummaryBox;
