import React from "react";

import { MenuItem } from "@mui/material";

import VerticalAlignBottomIcon from "@mui/icons-material/VerticalAlignBottom";

import MainPageTemplate from "../../../components/templates/MainPage/MainPage";
import { TextWithIcon, Menu, NavButton } from "../../../components/atoms/atoms";

import { logo } from "../../../assets/Svgs/assets";

/**
 * An array of links with download callback
 */
const appbarMenuLinks = [
  {
    text: "Download my Resume",
    download: () => {
      console.log("downloading resume...");
    },
  },
  {
    text: "Download my CV",
    download: () => {
      console.log("downloading CV...");
    },
  },
];
/**
 * An `array<string | object>` of links that has custom navigation buttons (`CustomNavButton`) for the appbar
 */
const appbarLinks = [
  {
    text: "Projects",
    onClick: () => console.log("Clicked"),
  },
  /**
   * Custom navigation button that will be rendered on the appbar
   */
  {
    CustomNavButton() {
      return (
        <>
          <Menu
            button={(onClick) => (
              <NavButton content="CV / Resume" onClick={onClick} />
            )}
          >
            {(onClick) =>
              appbarMenuLinks.map((link, key) => (
                <MenuItem
                  key={key}
                  onClick={() => {
                    link.download();
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
  {
    text: "About",
    onClick: () => console.log("Clicked"),
  },
  {
    CustomNavButton() {
      return (
        <NavButton
          content="Contact me"
          variant="contained"
          color="emphasizedText"
        />
      );
    },
  },
];
/**
 * An `array<string | ReactElement>` of links that has custom menu items (`CustomMenuItem`) for app bar's burger menu
 */
const appbarBurgerLinks = [
  "Projects",
  "About",
  "Contact me",
  ...appbarMenuLinks.map((link) => ({
    CustomMenuItem({ onClick }) {
      return (
        <MenuItem
          onClick={() => {
            link.download();
            onClick();
          }}
        >
          <TextWithIcon text={link.text} Icon={VerticalAlignBottomIcon} />
        </MenuItem>
      );
    },
  })),
];

const formDownloadLinks = { CV: "#", resume: "#" };
const handleContactSubmit = (e) => {
  e.preventDefault();

  /**
   * Uncomment this if it will be used.
   */
  // const name = e.target.form[0].value;
  // const email = e.target.form[2].value;
  // const subject = e.target.form[4].value;
  // const message = e.target.form[6].value;

  // console.log(name, email, subject, message)

  console.log("Submit was clicked!");
};

const projectSecTitle =
  "I do most of my work under contract but I tend to freelance from time to time or build projects for fun. Here are some of my most recent commercial projects:";
const projects = [
  {
    thumbnailUrl:
      "https://cdn.dribbble.com/users/37585/screenshots/19759254/645dc533-44c8-4b19-bf2d-1ad510346a25.png",
    title: "Trainella",
    description:
      "I built this project for a client after attending her yoga class. She wanted a WordPress site with a more custom layout so I used an existing WordPress theme and tweaked it with about 500 lines of additional CSS.",
    techStack: ["HTML", "CSS", "JavaScript"],
    projectUrl: "#",
  },
  {
    thumbnailUrl:
      "https://cdn.dribbble.com/users/37585/screenshots/19759254/645dc533-44c8-4b19-bf2d-1ad510346a25.png",
    title: "Trainella",
    description:
      "I built this project for a client after attending her yoga class. She wanted a WordPress site with a more custom layout so I used an existing WordPress theme and tweaked it with about 500 lines of additional CSS.",
    techStack: ["HTML", "CSS", "JavaScript"],
    projectUrl: "#",
  },
  {
    thumbnailUrl:
      "https://cdn.dribbble.com/users/37585/screenshots/19759254/645dc533-44c8-4b19-bf2d-1ad510346a25.png",
    title: "Trainella",
    description:
      "I built this project for a client after attending her yoga class. She wanted a WordPress site with a more custom layout so I used an existing WordPress theme and tweaked it with about 500 lines of additional CSS.",
    techStack: ["HTML", "CSS", "JavaScript"],
    projectUrl: "#",
  },
  {
    thumbnailUrl:
      "https://cdn.dribbble.com/users/37585/screenshots/19759254/645dc533-44c8-4b19-bf2d-1ad510346a25.png",
    title: "Trainella",
    description:
      "I built this project for a client after attending her yoga class. She wanted a WordPress site with a more custom layout so I used an existing WordPress theme and tweaked it with about 500 lines of additional CSS.",
    techStack: ["HTML", "CSS", "JavaScript"],
    projectUrl: "#",
  },
];

const linkedInURL = "https://linkedin.com/in/earthjan";
const githubURL = "https://github.com/earthjan";

const MainPage = () => {
  return (
    <MainPageTemplate
      appbarLogoSrc={logo}
      appbarLinks={appbarLinks}
      appbarMenuLinks={appbarBurgerLinks}
      projectSecTitle={projectSecTitle}
      projects={projects}
      formDownloadLinks={formDownloadLinks}
      handleContactSubmit={handleContactSubmit}
      linkedInURL={linkedInURL}
      githubURL={githubURL}
    />
  );
};

export default MainPage;
