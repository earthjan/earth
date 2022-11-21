import React from "react";
// import PropTypes from "prop-types";

import { Box, Stack, Typography, Grid } from "@mui/material";

import { TextTitle, TextGray, GridItem, TextLink } from "../../../atoms/atoms";

import styles from "./styles";

export const Skills = ({ skills }) => {
  return (
    <Box sx={styles.skBase}>
      <TextTitle color={styles.textTitle}>Skills</TextTitle>
      <Grid container spacing={1}>
        <GridItem md="auto">
          <Languages languages={skills.languages} />
        </GridItem>
        <GridItem md="auto">
          <Libraries libraries={skills.libraries} />
        </GridItem>
        <GridItem md="auto">
          <Tools tools={skills.tools} />
        </GridItem>
      </Grid>
    </Box>
  );

  function Languages({ languages }) {
    return (
      <Stack sx={styles.stack}>
        <Typography sx={styles.skSubtitle}>Languages</Typography>
        <Box component="ul" sx={styles.skUnorderedList}>
          {languages.map((lang, key) => (
            <TextGray key={key} component="li">
              {lang}
            </TextGray>
          ))}
        </Box>
      </Stack>
    );
  }

  function Libraries({ libraries }) {
    return (
      <Stack sx={styles.stack}>
        <Typography sx={styles.skSubtitle}>Libraries</Typography>
        <Box component="ul" sx={styles.skUnorderedList}>
          {libraries.map((library, key) => (
            <TextGray key={key} component="li">
              {library}
            </TextGray>
          ))}
        </Box>
      </Stack>
    );
  }

  function Tools({ tools }) {
    return (
      <Stack sx={styles.stack}>
        <Typography sx={styles.skSubtitle}>Tools</Typography>
        <Box component="ul" sx={styles.skUnorderedList}>
          {tools.map((tool, key) => (
            <TextGray key={key} component="li">
              {tool}
            </TextGray>
          ))}
        </Box>
      </Stack>
    );
  }
};

export const Experience = ({ experiences }) => {
  return (
    <Box sx={styles.expBase}>
      <TextTitle color={styles.textTitle}>Experience</TextTitle>
      {experiences.map((exp, key) => (
        <React.Fragment key={key}>
          <GridItem container={true} sx={styles.expList1}>
            <GridItem md={true}>
              <Typography sx={styles.expSubtitle}>
                <Typography component="span">{exp.company},</Typography>{" "}
                {exp.position}
              </Typography>
            </GridItem>
            <GridItem md="auto">
              <Typography sx={styles.expSubtitleDate}>{exp.howLong}</Typography>
            </GridItem>
          </GridItem>
          <Box component="ul" sx={styles.expUnorderedList}>
            <TextGray component="li" sx={styles.expList}>
              {exp.description}
            </TextGray>
          </Box>
        </React.Fragment>
      ))}
    </Box>
  );
};

export const Education = ({ educations }) => {
  return (
    <Box sx={styles.edBase}>
      <TextTitle color={styles.textTitle}>Education</TextTitle>
      <Box sx={styles.edList1}>
        <EdTitle
          level={educations.college.level}
          school={educations.college.school}
          schoolYear={educations.college.schoolYear}
        />

        <Box sx={styles.edAdditionalInfo}>
          <Typography sx={styles.edSubtitle}>Key Project</Typography>
          <a href={educations.college.keyProject.link}>
            <TextLink>{educations.college.keyProject.title}</TextLink>
          </a>
          <TextGray>{educations.college.keyProject.year}</TextGray>
        </Box>
      </Box>

      <Box sx={styles.edList2}>
        <EdTitle
          level={educations.shs.level}
          school={educations.shs.school}
          schoolYear={educations.shs.schoolYear}
        />

        <Box sx={styles.edAdditionalInfo}>
          <Typography sx={styles.edSubtitle}>
            Key Relevant coursework
          </Typography>
          <TextGray>{educations.shs.relevantCourseWork}</TextGray>
        </Box>
      </Box>
    </Box>
  );
};

function EdTitle({ level, school, schoolYear }) {
  return (
    <GridItem container={true}>
      <GridItem md={true}>
        <Typography sx={styles.edSubtitle}>{level}</Typography>
        <TextGray sx={styles.edSubtitleLocation}>{school}</TextGray>
      </GridItem>
      <GridItem md="auto">
        <Typography sx={styles.expSubtitleDate}>{schoolYear}</Typography>
      </GridItem>
    </GridItem>
  );
}
