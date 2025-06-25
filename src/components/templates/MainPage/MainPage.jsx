import { Box, Typography, useTheme } from "@mui/material";

import mainPageSectionIds from "../../../constants/mainPageSectionIds";

import Hero from "./Hero/Hero";
import AppBarContainer from "../../atoms/AppBarContainer/AppBarContainer";
import Bio from "./Bio/Bio";
import Footer from "./Footer/Footer";
import Projects from "./Projects/Projects";

import styles from "./styles";
import { SPACING } from "../../../constants/styles";

const MainPage = ({
  landingPageScrollToURL,
  appbarLinks,
  appbarMenuLinks,
  bioOverview,
  skills,
  experiences,
  educations,
  linkedInURL,
  githubURL,
}) => {
  const theme = useTheme();

  return (
    <Box sx={styles.mainPageBase}>
      <Box sx={styles.maxWidthSetter}>
        <Hero scrollToURL={landingPageScrollToURL} />

        <AppBarContainer
          logo={
            <Typography
              color={theme.palette.secondary.main}
              fontWeight={theme.typography.fontWeightBold}
            >
              Earth Jan Baquir Marzan
            </Typography>
          }
          navLinks={appbarLinks}
          menuList={appbarMenuLinks}
        />

        <Box
          sx={{
            ...styles.padding,
            mt: theme.spacing(SPACING * 3),
          }}
        >
          <Bio
            id={mainPageSectionIds.about}
            overview={bioOverview}
            skills={skills}
            experiences={experiences}
            educations={educations}
          />
        </Box>

        <Box sx={{
          ...styles.padding,
          mt: theme.spacing(SPACING * 4),
        }}>
          <Projects />
        </Box>

        <Footer linkedInURL={linkedInURL} githubURL={githubURL} />
      </Box>
    </Box>
  );
};

export default MainPage;
