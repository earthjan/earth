import React from "react";

import { Box } from "@mui/material";

import TextTitle from "../../../atoms/TextTitle/TextTitle";
import TextGray from "../../../atoms/TextGray/TextGray";

import { Project1, Project2 } from "./utils";
import styles from "./styles";

const FeaturedProjects = () => {
  return (
    <Box sx={styles.base}>
      <TextTitle fontSize={styles.title.fontSize}>Featured projects</TextTitle>
      <TextGray sx={styles.subtitle}>
        I do most of my work under contract but I tend to freelance from time to
        time or build projects for fun. Here are some of my most recent
        commercial projects:
      </TextGray>

      <Project1 />
      <Project2 />
    </Box>
  );
};

export default FeaturedProjects;
