import React from "react";

import { Box, Typography } from "@mui/material";

import TextGray from "../../../atoms/TextGray/TextGray";
import ReadMore from "./ReadMore/ReadMore";
import TextTitle from "../../../atoms/TextTitle/TextTitle";

import styles from "./styles";

const Bio = () => {
  return (
    <Box sx={styles.base}>
      <Box sx={styles.pySetter}>
        <TextTitle
          fontSize={{
            xs: "1.5rem",
            lg: "2rem",
          }}
        >
          Hi, I’m Earth!
        </TextTitle>
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
