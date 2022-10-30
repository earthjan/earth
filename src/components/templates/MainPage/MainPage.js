import React from "react";
import PropTypes from "prop-types";

import { Box, MenuItem, Stack, Typography } from "@mui/material";

import LandingPage from "./LandingPage/LandingPage";
import Logo from "../../atoms/LogoContainer/LogoContainer";
import AppBarContainer from "../../atoms/AppBarContainer/AppBarContainer";

import VerticalAlignBottomIcon from "@mui/icons-material/VerticalAlignBottom";

import Earth from "../../../assets/Svgs/Logo.svg";

import styles from "./styles";

const MainPage = () => {
  return (
    <Box sx={styles.mainPageBase}>
      <Box sx={styles.maxWidthSetter}>
        <LandingPage />

        {/* <Box sx={{ position: "relative", overflowY: "hidden" }}> */}
          <AppBarContainer
            logo={<LogoEarth />}
            navLinks={getNavLinks()}
            menuList={getMenuList()}
          />
        {/* </Box> */}

        {/* For testing purposes. It sets horizontal scroll to test AppBar on scroll behavior */}
        <Box sx={{ height: "1500px" }} />
      </Box>
    </Box>
  );
};

export default MainPage;

// =============== HELPER COMPONENTS/FUNCTIONS ===============
function LogoEarth() {
  return (
    <Box sx={styles.logoBase}>
      <Logo src={Earth} height={styles.logo.height} width={styles.logo.width} />
    </Box>
  );
}

function getNavLinks() {
  return ["Projects", "CV / Resume", "About", "Contact me"];
}

function getMenuList() {
  return [
    "Projects",
    "About",
    "Contact me",
    {
      CustomMenuItem({ onClick }) {
        const handleClick = () => {
          // download logic here..
        };
        return (
          <MenuItem
            onClick={() => {
              handleClick();
              onClick();
            }}
          >
            <TextWithIcon
              text="Download my Resume"
              Icon={VerticalAlignBottomIcon}
            />
          </MenuItem>
        );
      },
    },
    {
      CustomMenuItem({ onClick }) {
        const handleClick = () => {
          // download logic here..
        };
        return (
          <MenuItem
            onClick={() => {
              handleClick();
              onClick();
            }}
          >
            <TextWithIcon
              text="Download my CV"
              Icon={VerticalAlignBottomIcon}
            />
          </MenuItem>
        );
      },
    },
  ];
}

function TextWithIcon({ text, Icon }) {
  return (
    <Stack sx={styles.textWithIconBase}>
      <Typography sx={styles.textWithIconText}>{text}</Typography>

      {Icon && <Icon sx={styles.textWithIconIcon} />}
    </Stack>
  );
}

TextWithIcon.propTypes = {
  text: PropTypes.string.isRequired,
  Icon: PropTypes.object.isRequired,
};
