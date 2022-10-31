import React from "react";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Stack,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import styles from "./styles";
import { Skills, Experience, Education } from "./utils";

const ReadMore = () => {
  return (
    <Accordion sx={styles.accordion}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={styles.expandIcon} />}
        sx={styles.accordionSummary}
      />
      <AccordionDetails sx={styles.accordionDetails}>
        <Stack spacing={{ xs: 1, xl: 6 }}>
          <Skills />
          <Experience />
          <Education />
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
};

export default ReadMore;
