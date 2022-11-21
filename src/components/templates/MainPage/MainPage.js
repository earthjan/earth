import React from "react";

import { Box } from "@mui/material";

import LandingPage from "./LandingPage/LandingPage";
import AppBarContainer from "../../atoms/AppBarContainer/AppBarContainer";
import Bio from "./Bio/Bio";
import FeaturedProjects from "./FeaturedProjects/FeaturedProjects";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

import { LogoEarth } from "./utils";

import styles from "./styles";

const MainPage = ({
  appbarLogoSrc,
  appbarLinks,
  appbarMenuLinks,
  bioOverview,
  skills,
  experiences,
  educations,
  projectSecTitle,
  projects,
  formDownloadLinks,
  handleContactSubmit,
  linkedInURL,
  githubURL,
}) => {
  return (
    <Box sx={styles.mainPageBase}>
      <Box sx={styles.maxWidthSetter}>
        <LandingPage />

        <AppBarContainer
          logo={<LogoEarth logo={appbarLogoSrc} />}
          navLinks={appbarLinks}
          menuList={appbarMenuLinks}
        />

        <Box sx={styles.bioPadding}>
          <Bio
            overview={bioOverview}
            skills={skills}
            experiences={experiences}
            educations={educations}
          />
        </Box>

        <Box sx={styles.projectsPadding}>
          <FeaturedProjects title={projectSecTitle} projects={projects} />
        </Box>

        <Box sx={styles.contactPadding}>
          <Contact
            downloadLinks={formDownloadLinks}
            handleSubmit={handleContactSubmit}
          />
        </Box>

        <Footer linkedInURL={linkedInURL} githubURL={githubURL} />
      </Box>
    </Box>
  );
};

export default MainPage;
