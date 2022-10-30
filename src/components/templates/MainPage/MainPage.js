import React from "react";
import PropTypes from "prop-types";

import { useNavigate } from "react-router-dom";

import { Box, MenuItem, Stack, Typography, Menu } from "@mui/material";

import LandingPage from "./LandingPage/LandingPage";
import Logo from "../../atoms/LogoContainer/LogoContainer";
import AppBarContainer from "../../atoms/AppBarContainer/AppBarContainer";
import NavButton from "../../atoms/NavButton/NavButton";

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
    <Logo src={Earth} height={styles.logo.height} width={styles.logo.width} />
  );
}

function getNavLinks() {
  return [
    "Projects",
    {
      CustomNavButton() {
        const [anchorEl, setAnchorEl] = React.useState(null);
        const open = Boolean(anchorEl);
        const handleClick = (event) => {
          setAnchorEl(event.currentTarget);
        };
        const handleClose = () => {
          setAnchorEl(null);
        };

        return (
          <>
            <NavButton content="CV / Resume" onClick={handleClick} />

            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              sx={{
                "& .MuiPopover-paper": {
                  backgroundColor: "secondary.main",
                  border: 1,
                  borderColor: "textTitle.main",
                  borderRadius: "5px",
                },
              }}
            >
              <MenuItem onClick={handleClose}>
                <TextWithIcon
                  text="Download my Resume"
                  Icon={VerticalAlignBottomIcon}
                />
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <TextWithIcon
                  text="Download my CV"
                  Icon={VerticalAlignBottomIcon}
                />
              </MenuItem>
            </Menu>
          </>
        );
      },
    },
    "About",
    {
      CustomNavButton() {
        return (
          <NavButton
            content="Contact me"
            variant="contained"
            bgColor="emphasizedText.main"
            textColor="#000000"
          />
        );
      },
    },
  ];
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
