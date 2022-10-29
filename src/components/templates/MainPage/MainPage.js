import React from "react";

import { Grid, Box, Typography, IconButton, Stack } from "@mui/material";
import SouthIcon from "@mui/icons-material/South";

import GridItem from "../../atoms/GridItem/GridItem";
import TextGray from "../../atoms/TextGray/TextGray";

import styles from "./styles";

const MainPage = () => {
  return (
    <Box sx={styles.landingPageBase}>
      <Box sx={styles.maxWidthSetter}>
        <Grid container sx={styles.gridBase}>
          <GridItem sx={styles.upperSubtitleBase}>
            <TextGray sx={styles.subtitleUpper}>
              Earth Jan Baquir Marzan
            </TextGray>
          </GridItem>
          <GridItem sx={styles.mainTextBase}>
            <MainContent />
          </GridItem>
          <GridItem container={true} sx={styles.bottomSubtitleBase}>
            <TextGray sx={styles.subtitleBottom}>
              I build apps with modern techs, ensuring reliablity and
              maintainability.
            </TextGray>
          </GridItem>

          <Box sx={styles.scrollDownBase}>
            <IconButton>
              <Stack sx={styles.scrollDownStack}>
                <GridItem container={true} sx={styles.scrollDownIconBase}>
                  <SouthIcon sx={styles.scrollDownIcon} />
                </GridItem>
                <Typography sx={styles.scrollDownLabel}>Scroll Down</Typography>
              </Stack>
            </IconButton>
          </Box>
        </Grid>

        <Box sx={styles.extraBg} />
      </Box>
    </Box>
  );
};

export default MainPage;

// =============== HELPER COMPONENTS/FUNCTIONS ===============

function Span({ text }) {
  return (
    <Typography component="span" sx={styles.mainTextContentSpan}>
      {" "}
      {text}{" "}
    </Typography>
  );
}

function MainContent() {
  return (
    <GridItem container={true}>
      <GridItem container={true} sx={styles.mainTextContentParent}>
        <Typography sx={styles.mainTextContent}>
          Full-stack <Span text="Web Developer" />
        </Typography>
      </GridItem>
      <GridItem container={true} sx={styles.mainTextContentParent}>
        <Typography sx={styles.mainTextContent}>
          with
          <Span text="Bachelor Degree" />
          in
          <Span text="IT" />
        </Typography>
      </GridItem>
    </GridItem>
  );
}
