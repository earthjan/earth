import React from "react";

import { Box } from "@mui/material";

import { TextTitle, TextGray } from "../../../atoms/atoms";
import ReadMore from "./ReadMore/ReadMore";

import { Skills, Experience, Education } from "./utils";
import styles from "./styles";

const Bio = ({ id, overview, skills, experiences, educations }) => {
  const readMoreContent = [
    <Skills
      skills={skills}
    />,
    <Experience
      experiences={experiences}
    />,
    <Education
      educations={educations}
    />,
  ];
  return (
    <Box id={id} sx={styles.base}>
      <Box sx={styles.pySetter}>
        <TextTitle fontSize={styles.title.fontSize}>{overview.title}</TextTitle>

        {overview.paragraphs.map((p, key) => (
          <TextGray key={key} sx={styles.content}>
            {p}
          </TextGray>
        ))}

        <ReadMore content={readMoreContent} />
      </Box>
    </Box>
  );
};

export default Bio;
