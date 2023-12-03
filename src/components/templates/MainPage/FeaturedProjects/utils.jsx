import React from "react";

import { Box, Grid, Stack, Button } from "@mui/material";

import TextTitle from "../../../atoms/TextTitle/TextTitle";
import TextGray from "../../../atoms/TextGray/TextGray";
import GridItem from "../../../atoms/GridItem/GridItem";

import styles from "./styles";

export function Project1({
  thumbnailUrl,
  title,
  description,
  techStack,
  projectUrl,
}) {
  return (
    <Grid container sx={styles.prj1GridBase}>
      <GridItem lg={6}>
        <ProjectThumbnail thumbnailUrl={thumbnailUrl} />
      </GridItem>
      <GridItem lg={6} sx={styles.prj1PdBase}>
        <ProjectDescription
          title={title}
          description={description}
          techStack={techStack}
          projectUrl={projectUrl}
        />
      </GridItem>
    </Grid>
  );
}

export function Project2({
  thumbnailUrl,
  title,
  description,
  techStack,
  projectUrl,
}) {
  return (
    <Grid container sx={styles.prj2GridBase}>
      <GridItem lg={6}>
        <ProjectThumbnail thumbnailUrl={thumbnailUrl} />
      </GridItem>
      <GridItem lg={6} sx={styles.prj2PdBase}>
        <ProjectDescription
          title={title}
          description={description}
          techStack={techStack}
          projectUrl={projectUrl}
        />
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

function ProjectDescription({ title, description, techStack, projectUrl }) {
  return (
    <Box sx={styles.pdBase}>
      <TextTitle fontSize={styles.pdTitle.fontSize}>{title}</TextTitle>
      <TextGray sx={styles.pdDescription}>{description}</TextGray>
      <Stack flexDirection={styles.pdTechStackBase.flexDirection}>
        {techStack.map((tech, key) => (
          <Box key={key} component="ul" sx={styles.pdUl}>
            <TextGray component="li" sx={styles.pdli}>
              {tech}
            </TextGray>
          </Box>
        ))}
      </Stack>

      {projectUrl && (
        <Button
          variant="contained"
          color={styles.pdView.color}
          component="a"
          href={projectUrl}
          sx={styles.pdView.sx}
        >
          View Source Code
        </Button>
      )}
    </Box>
  );
}
