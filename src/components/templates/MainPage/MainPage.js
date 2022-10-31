import React from "react";

import { Box } from "@mui/material";

import LandingPage from "./LandingPage/LandingPage";
import AppBarContainer from "../../atoms/AppBarContainer/AppBarContainer";

import { LogoEarth, getNavLinks, getMenuList } from "./utils";

import styles from "./styles";

const MainPage = () => {
  return (
    <Box sx={styles.mainPageBase}>
      <Box sx={styles.maxWidthSetter}>
        <LandingPage />

        <AppBarContainer
          logo={<LogoEarth />}
          navLinks={getNavLinks()}
          menuList={getMenuList()}
        />

        {/* For testing purposes. It sets horizontal scroll to test AppBar on scroll behavior */}
        <Box sx={{ height: "1500px" }} />
      </Box>
    </Box>
  );
};

export default MainPage;

