import React from "react";
// import PropTypes from "prop-types";

import { Box, Stack, Typography, Grid } from "@mui/material";

import TextTitle from "../../../../atoms/TextTitle/TextTitle";
import TextGray from "../../../../atoms/TextGray/TextGray";
import GridItem from "../../../../atoms/GridItem/GridItem";
import TextLink from "../../../../atoms/TextLink/TextLink";

import styles from "./styles";

export const Skills = () => {
  return (
    <Box sx={styles.skBase}>
      <TextTitle color={styles.textTitle}>Skills</TextTitle>
      <Grid container spacing={1}>
        <GridItem md="auto">
          <Languages />
        </GridItem>
        <GridItem md="auto">
          <Libraries />
        </GridItem>
        <GridItem md="auto">
          <Tools />
        </GridItem>
      </Grid>
    </Box>
  );

  function Languages() {
    return (
      <Stack sx={styles.stack}>
        <Typography sx={styles.skSubtitle}>Languages</Typography>
        <Box component="ul" sx={styles.skUnorderedList}>
          {["HTML, CSS, JS", "NodeJS", "C#"].map((lang, key) => (
            <TextGray key={key} component="li">
              {lang}
            </TextGray>
          ))}
        </Box>
      </Stack>
    );
  }

  function Libraries() {
    return (
      <Stack sx={styles.stack}>
        <Typography sx={styles.skSubtitle}>Libraries</Typography>
        <Box component="ul" sx={styles.skUnorderedList}>
          {["ReactJS", "React-Redux", "Material-UI"].map((library, key) => (
            <TextGray key={key} component="li">
              {library}
            </TextGray>
          ))}
        </Box>
      </Stack>
    );
  }

  function Tools() {
    return (
      <Stack sx={styles.stack}>
        <Typography sx={styles.skSubtitle}>Tools</Typography>
        <Box component="ul" sx={styles.skUnorderedList}>
          {["Git", "GitHub", "BitBucket", "Jira"].map((tool, key) => (
            <TextGray key={key} component="li">{tool}</TextGray>
          ))}
        </Box>
      </Stack>
    );
  }
};

export const Experience = () => {
  return (
    <Box sx={styles.expBase}>
      <TextTitle color={styles.textTitle}>Experience</TextTitle>
      <GridItem container={true} sx={styles.expList1}>
        <GridItem md={true}>
          <Typography sx={styles.expSubtitle}>
            <Typography component="span">DigitalInnov,</Typography> Front-end
            Developer Intern
          </Typography>
        </GridItem>
        <GridItem md="auto">
          <Typography sx={styles.expSubtitleDate}>
            June 2022 - Current
          </Typography>
        </GridItem>
      </GridItem>
      <Box component="ul" sx={styles.expUnorderedList}>
        <TextGray component="li" sx={styles.expList}>
          Working with Shopify technologies to create e-commerce stores on
          various client projects.
        </TextGray>
      </Box>
    </Box>
  );
};

export const Education = () => {
  return (
    <Box sx={styles.edBase}>
      <TextTitle color={styles.textTitle}>Education</TextTitle>
      <Box sx={styles.edList1}>
        <GridItem container={true}>
          <GridItem md={true}>
            <Typography sx={styles.edSubtitle}>
              B.S. Aviation Information Technology
            </Typography>
            <TextGray sx={styles.edSubtitleLocation}>
              Philippine State College of Aeronautics, Pasay, Metro Manila
            </TextGray>
          </GridItem>
          <GridItem md="auto">
            <Typography sx={styles.expSubtitleDate}>
              June 2018 - October 2022
            </Typography>
          </GridItem>
        </GridItem>

        <Box sx={styles.edAdditionalInfo}>
          <Typography sx={styles.edSubtitle}>Key Project</Typography>
          <TextLink
            component="a"
            href="https://github.com/earthjan/computer-lab-management"
          >
            Built a Computer Laboratory Management Software
          </TextLink>
          <TextGray>2022</TextGray>
        </Box>
      </Box>

      <Box sx={styles.edList2}>
        <GridItem container={true}>
          <GridItem md={true}>
            <Typography sx={styles.edSubtitle}>
              Tech-Voc Senior High school
            </Typography>
            <TextGray sx={styles.edSubtitleLocation}>
              AMA Basic Education, Las Piñas, Metro Manila
            </TextGray>
          </GridItem>
          <GridItem md="auto">
            <Typography sx={styles.expSubtitleDate}>2018</Typography>
          </GridItem>
        </GridItem>

        <Box sx={styles.edAdditionalInfo}>
          <Typography sx={styles.edSubtitle}>
            Key Relevant coursework
          </Typography>
          <TextGray>Introduction and Fundamentals of Programming</TextGray>
        </Box>
      </Box>
    </Box>
  );
};
