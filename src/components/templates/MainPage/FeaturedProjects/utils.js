import React from "react";

import { Box, Grid, Stack, Button } from "@mui/material";

import TextTitle from "../../../atoms/TextTitle/TextTitle";
import TextGray from "../../../atoms/TextGray/TextGray";
import GridItem from "../../../atoms/GridItem/GridItem";

import styles from "./styles";

export function Project1() {
  return (
    <Grid container sx={styles.prj1GridBase}>
      <GridItem lg={6} >
        <ProjectThumbnail
          thumbnailUrl={
            "https://cdn.dribbble.com/users/37585/screenshots/19759254/645dc533-44c8-4b19-bf2d-1ad510346a25.png"
          }
        />
      </GridItem>
      <GridItem lg={6} sx={styles.prj1PdBase}>
        <ProjectDescription
          title="Trainella"
          description="I built this project for a client after attending her yoga
            class. She wanted a WordPress site with a more
            custom layout so I used an existing WordPress theme
            and tweaked it with about 500 lines of additional CSS."
          techStack={["HTML", "CSS", "JavaScript"]}
          projectUrl="#"
        />
      </GridItem>
    </Grid>
  );
}

export function Project2() {
  return (
    <Grid container sx={styles.prj2GridBase}>
      <GridItem lg={6} >
        <ProjectThumbnail
          thumbnailUrl={
            "https://cdn.dribbble.com/userupload/3913979/file/original-9d13aac60d5c45077e81dbd3e5bcfcf4.png?compress=1&resize=752x"
          }
        />
      </GridItem>
      <GridItem lg={6} sx={styles.prj2PdBase}>
        <ProjectDescription
          title="Trainella"
          description="I built this project for a client after attending her yoga
            class. She wanted a WordPress site with a more
            custom layout so I used an existing WordPress theme
            and tweaked it with about 500 lines of additional CSS."
          techStack={["HTML", "CSS", "JavaScript"]}
          projectUrl="#"
        />
      </GridItem>
    </Grid>
  );
}

function ProjectThumbnail({ thumbnailUrl }) {
  return (
    <Box sx={styles.ptImgBase}>
      <Box component="img" src={thumbnailUrl} />
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
            <TextGray component="li" sx={styles.pdli}>{tech}</TextGray>
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
