import React from "react";

import { Box, Grid, Stack, Button } from "@mui/material";

import LaunchIcon from "@mui/icons-material/Launch";

import TextTitle from "../../../atoms/TextTitle/TextTitle";
import TextGray from "../../../atoms/TextGray/TextGray";
import GridItem from "../../../atoms/GridItem/GridItem";

import styles from "./styles";

export function Project1(props) {
  return (
    <Grid container sx={styles.prj1GridBase}>
      <GridItem lg={6}>
        <ProjectThumbnail {...props} />
      </GridItem>
      <GridItem lg={6} sx={styles.prj1PdBase}>
        <ProjectDescription {...props} />
      </GridItem>
    </Grid>
  );
}

export function Project2(props) {
  return (
    <Grid container sx={styles.prj2GridBase}>
      <GridItem lg={6}>
        <ProjectThumbnail {...props} />
      </GridItem>
      <GridItem lg={6} sx={styles.prj2PdBase}>
        <ProjectDescription {...props} />
      </GridItem>
    </Grid>
  );
}

function ProjectThumbnail({ thumbnailUrl }) {
  return (
    <Box sx={styles.ptImgBase}>
      <Box component="img" src={thumbnailUrl} width="100%" />
    </Box>
  );
}

function ProjectDescription({
  title,
  description,
  techStack,
  projectUrl,
  officialSite,
}) {
  const buttonProps = {
    variant: "contained",
    color: styles.pdView.color,
    component: "a",
    target: "_blank",
    sx: styles.pdView.sx,
    startIcon: <LaunchIcon />,
  };

  return (
    <Box sx={styles.pdBase}>
      <TextTitle fontSize={styles.pdTitle.fontSize}>{title}</TextTitle>
      <TextGray sx={styles.pdDescription}>{description}</TextGray>
      <Box display="flex" flexWrap="wrap" gap={0.5}>
        {techStack.map((tech, key) => (
          <Box key={key} component="ul" sx={styles.pdUl}>
            <TextGray component="li" sx={styles.pdli}>
              {tech}
            </TextGray>
          </Box>
        ))}
      </Box>

      {projectUrl && (
        <Button variant="contained" {...buttonProps} href={projectUrl}>
          View Source Code
        </Button>
      )}

      {officialSite && (
        <Button variant="outlined" {...buttonProps} href={officialSite}>
          View Official Site
        </Button>
      )}
    </Box>
  );
}
