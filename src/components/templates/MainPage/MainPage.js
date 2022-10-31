import React from "react";
import PropTypes from "prop-types";

import { Box, MenuItem, Stack, Typography } from "@mui/material";

import LandingPage from "./LandingPage/LandingPage";
import Logo from "../../atoms/LogoContainer/LogoContainer";
import AppBarContainer from "../../atoms/AppBarContainer/AppBarContainer";
import NavButton from "../../atoms/NavButton/NavButton";
import Menu from "../../atoms/Menu/Menu";

import VerticalAlignBottomIcon from "@mui/icons-material/VerticalAlignBottom";

import Earth from "../../../assets/Svgs/Logo.svg";

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

// =============== HELPER COMPONENTS/FUNCTIONS ===============
function LogoEarth() {
  return (
    <Logo src={Earth} height={styles.logo.height} width={styles.logo.width} />
  );
}

/**
 * Get links for the appbar
 * 
 * @returns {array<string | object>} An array<string | object> that has custom navigation buttons (`CustomNavButton`)
 */
function getNavLinks() {
  return [
    "Projects",
    /**
     * Custom navigation button that will be rendered on the appbar
     */
    {
      CustomNavButton() {
        const links = [
          {
            text: "Download my Resume",
            url: "download-resume",
          },
          {
            text: "Download my CV",
            url: "download-cv",
          },
        ];

        const handleDownload = (url) => {
          console.log("downloading..", url)
        }

        return (
          <>
            <Menu
              button={(onClick) => (
                <NavButton content="CV / Resume" onClick={onClick} />
              )}
            >
              {(onClick) =>
                links.map((link, key) => (
                  <MenuItem
                    key={key}
                    onClick={() => {
                      handleDownload(link.url);
                      onClick();
                    }}
                  >
                    <TextWithIcon
                      text={link.text}
                      Icon={VerticalAlignBottomIcon}
                    />
                  </MenuItem>
                ))
              }
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


/**
 * Gets a list of menus for the appbar's hamburger.
 * 
 * @returns {array<string | ReactElement>} An array<string | ReactElement> that has custom menu items (`CustomMenuItem`)
 */
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
