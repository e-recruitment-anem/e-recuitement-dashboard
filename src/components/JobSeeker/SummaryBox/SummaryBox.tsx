import { FC } from "react";
import { Box } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";

import { ISummary } from "../../../helpers/types";
import SummaryItem from "./SummaryItem";
import "./SummaryBox.scss";

const SummaryBox: FC<ISummary> = ({ items }) => {
  return (
    <>
      <Box className="Summarybox">
        {items.map(({ title, content }) => (
          <SummaryItem key={uuidv4()} title={title} content={content} />
        ))}
      </Box>
    </>
  );
};

export default SummaryBox;
