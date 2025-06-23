import React from "react";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Stack,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import styles from "./styles";

const ReadMore = ({ content }) => {
  return (
    <Accordion sx={{
      ...styles.accordion,
      backgroundImage: "unset"
    }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={styles.expandIcon} />}
        sx={styles.accordionSummary}
      />
      <AccordionDetails sx={styles.accordionDetails}>
        <Stack spacing={{ xs: 1, xl: 6 }}>
          {content.map((Section, key) => (
            <React.Fragment key={key}>
              {Section}
            </React.Fragment>
          ))}
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
};

export default ReadMore;
