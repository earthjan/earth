import React from "react";

import { Box } from "@mui/material";

import TextTitle from "../../../atoms/TextTitle/TextTitle";
import TextGray from "../../../atoms/TextGray/TextGray";
import GridItem from "../../../atoms/GridItem/GridItem";
import LogoContainer from "../../../atoms/LogoContainer/LogoContainer";

import hr from "../../../../assets/Svgs/hr.svg"

import { Project1, Project2 } from "./utils";
import styles from "./styles";

const FeaturedProjects = ({ title, projects=[] }) => {
  return (
    <Box sx={styles.base}>
      <TextTitle fontSize={styles.title.fontSize}>Featured projects</TextTitle>
      <TextGray sx={styles.subtitle}>
        {title}
      </TextGray>

      {projects.map(
        (projectDetails, index, array) => (
          <>
            {(index % 2) === 0 && (<Project1 {...projectDetails} />)}

            {(index % 2) !== 0 && (<Project2 {...projectDetails} />)}

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
          </>
        )
      )}
    </Box>
  );
};

export default FeaturedProjects;
