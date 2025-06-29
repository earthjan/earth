import React from "react";

import { Box } from "@mui/material";

import TextTitle from "../../../atoms/TextTitle/TextTitle";
import TextGray from "../../../atoms/TextGray/TextGray";
import GridItem from "../../../atoms/GridItem/GridItem";
import LogoContainer from "../../../atoms/LogoContainer/LogoContainer";

import hr from "../../../../assets/Svgs/hr.svg";

import { Project1, Project2 } from "./utils";
import styles from "./styles";

function FeaturedProjects2() {
  return (
    <Stack>
      <TextTitle fontSize={styles.title.fontSize}>Featured Projects</TextTitle>
      
    </Stack>
  )

}

const FeaturedProjects = ({ id, title, projects = [] }) => {
  return (
    <Box id={id} sx={styles.base}>
      <TextTitle fontSize={styles.title.fontSize}>Featured projects</TextTitle>
      <TextGray sx={styles.subtitle}>{title}</TextGray>

      {projects.map((projectDetails, index, array) => {
        /**
          Renders projects with different layouts displayed in alternate way by using even and odd numbers. The projects have dividers between them.
         */
        return (
          <React.Fragment key={index}>
            {index % 2 === 0 && <Project1 {...projectDetails} />}

            {index % 2 !== 0 && <Project2 {...projectDetails} />}

            {/* Prevents putting a divider on the bottom of the last project */}
            {index + 1 !== array.length && (
              // GridItem to center the divider
              <GridItem container={true} sx={styles.dividerBase}>
                <LogoContainer
                  src={hr}
                  width={styles.divider.width}
                  height={styles.divider.height}
                />
              </GridItem>
            )}
          </React.Fragment>
        );
      })}
    </Box>
  );
};

export default FeaturedProjects;
