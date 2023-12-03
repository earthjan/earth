import React from "react";

import { Box } from "@mui/material";

import LandingPage from "./LandingPage/LandingPage";
import AppBarContainer from "../../atoms/AppBarContainer/AppBarContainer";
import Bio from "./Bio/Bio";
import FeaturedProjects from "./FeaturedProjects/FeaturedProjects";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

import URLPaths from "../../../utils/URLPaths";

import { LogoEarth } from "./utils";
import styles from "./styles";

const MainPage = ({
  landingPageScrollToURL,
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
        <LandingPage scrollToURL={landingPageScrollToURL} />

        <AppBarContainer
          logo={<LogoEarth />}
          navLinks={appbarLinks}
          menuList={appbarMenuLinks}
        />

        <Box sx={styles.bioPadding}>
          <Bio
            id={URLPaths.About}
            overview={bioOverview}
            skills={skills}
            experiences={experiences}
            educations={educations}
          />
        </Box>

        <Box sx={styles.projectsPadding}>
          <FeaturedProjects
            id={URLPaths.Projects}
            title={projectSecTitle}
            projects={projects}
          />
        </Box>

        <Box sx={styles.contactPadding}>
          <Contact
            id={URLPaths.Contact}
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
