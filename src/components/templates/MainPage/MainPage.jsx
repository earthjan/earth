import { Box } from "@mui/material";

import mainPageSectionIds from "../../../constants/mainPageSectionIds";

import Hero from "./Hero/Hero";
import AppBarContainer from "../../atoms/AppBarContainer/AppBarContainer";
import Bio from "./Bio/Bio";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Projects from "./Projects/Projects";

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
  onDownloadCv,
  onDownloadResume,
  linkedInURL,
  githubURL,
}) => {
  return (
    <Box sx={styles.mainPageBase}>
      <Box sx={styles.maxWidthSetter}>
        <Hero scrollToURL={landingPageScrollToURL} />

        <AppBarContainer
          logo={<LogoEarth />}
          navLinks={appbarLinks}
          menuList={appbarMenuLinks}
        />

        <Box sx={styles.bioPadding}>
          <Bio
            id={mainPageSectionIds.about}
            overview={bioOverview}
            skills={skills}
            experiences={experiences}
            educations={educations}
          />
        </Box>

        <Box sx={styles.projectsPadding}>
          <Projects />
        </Box>

        <Box sx={styles.contactPadding}>
          <Contact
            id={mainPageSectionIds.contact}
            onDownloadCv={onDownloadCv}
            onDownloadResume={onDownloadResume}
          />
        </Box>

        <Footer linkedInURL={linkedInURL} githubURL={githubURL} />
      </Box>
    </Box>
  );
};

export default MainPage;
