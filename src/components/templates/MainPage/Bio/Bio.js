import React from "react";

import { Box, Typography } from "@mui/material";

import TextGray from "../../../atoms/TextGray/TextGray";
import ReadMore from "./ReadMore/ReadMore";

import styles from "./styles";

const Bio = () => {
  return (
    <Box sx={styles.base}>
      <Box sx={styles.pySetter}>
        <Typography sx={styles.title}>Hi, I’m Earth!</Typography>
        <TextGray sx={styles.content}>
          I’m a self-taught Front End Developer and school-taught Systems
          Engineer from Nigeria.
        </TextGray>
        <TextGray sx={styles.content}>
          I've been building websites since 2017 with a focus on responsive
          design, accessibility and pleasing aesthetics.
        </TextGray>
        <TextGray sx={styles.content}>
          I've spoken at multiple international conferences on a variety of
          topics ranging from web accessibility to career development.
        </TextGray>

        <ReadMore />
      </Box>
    </Box>
  );
};

export default Bio;
