import React from "react";

import { Grid, Box, Typography, Container } from "@mui/material";

import GridItem from "../../atoms/GridItem/GridItem";
import TextGray from "../../atoms/TextGray/TextGray";

import styles from "./styles";

const MainPage = () => {
  return (
    <Box sx={styles.landingPageBase}>
      <Grid container sx={styles.gridBase}>
        <GridItem>
          <TextGray sx={styles.subtitle}>Earth Jan Baquir Marzan</TextGray>
        </GridItem>
        <GridItem sx={styles.mainTextBase}>
          <MainContent />
        </GridItem>
        <GridItem>
          <TextGray sx={styles.subtitle}>
            I build apps with modern techs, ensuring reliablity and
            maintainability.
          </TextGray>
        </GridItem>
      </Grid>

      <Box sx={styles.extraBg} />
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
