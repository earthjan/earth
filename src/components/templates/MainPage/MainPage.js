import React from "react";

import { Box } from "@mui/material";

import LandingPage from "./LandingPage/LandingPage";
import AppBarContainer from "../../atoms/AppBarContainer/AppBarContainer";
import Bio from "./Bio/Bio";
import FeaturedProjects from "./FeaturedProjects/FeaturedProjects";
import Contact from "./Contact/Contact";

import { LogoEarth, getNavLinks, getMenuList } from "./utils";

import styles from "./styles";

const MainPage = ({ formDownloadLinks, handleContactSubmit }) => {
  return (
    <Box sx={styles.mainPageBase}>
      <Box sx={styles.maxWidthSetter}>
        <LandingPage />

        <AppBarContainer
          logo={<LogoEarth />}
          navLinks={getNavLinks()}
          menuList={getMenuList()}
        />

        <Box sx={styles.bioPadding}>
          <Bio />
        </Box>

        <Box sx={styles.projectsPadding}>
          <FeaturedProjects />
        </Box>

        <Box sx={styles.contactPadding}>
          <Contact
            downloadLinks={formDownloadLinks}
            handleSubmit={handleContactSubmit}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default MainPage;
