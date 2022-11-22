import React from "react";

import { HashLink } from "react-router-hash-link";

import { MenuItem } from "@mui/material";

import VerticalAlignBottomIcon from "@mui/icons-material/VerticalAlignBottom";

import MainPageTemplate from "../../../components/templates/MainPage/MainPage";
import { TextWithIcon, Menu, NavButton } from "../../../components/atoms/atoms";

import URLPaths from "../../../utils/URLPaths";

const landingPageScrollToURL = `/#${URLPaths.About}`
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
    CustomNavButton() {
      return (
        <HashLink smooth to={`/#${URLPaths.Projects}`}>
          <NavButton content="Projects" />
        </HashLink>
      );
    },
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
    CustomNavButton() {
      return (
        <HashLink smooth to={`/#${URLPaths.About}`}>
          <NavButton content="About" />
        </HashLink>
      );
    },
  },
  {
    CustomNavButton() {
      return (
        <HashLink smooth to={`/#${URLPaths.Contact}`}>
          <NavButton
            content="Contact me"
            variant="contained"
            color="emphasizedText"
          />
        </HashLink>
      );
    },
  },
];
/**
 * An `array<string | ReactElement>` of links that has custom menu items (`CustomMenuItem`) for app bar's burger menu
 */
const appbarBurgerLinks = [
  {
    CustomMenuItem({ onClick }) {
      return (
        <HashLink smooth to={`/#${URLPaths.Projects}`}>
          <MenuItem
            onClick={() => {
              onClick();
            }}
          >
            Project
          </MenuItem>
        </HashLink>
      );
    },
  },
  {
    CustomMenuItem({ onClick }) {
      return (
        <HashLink smooth to={`/#${URLPaths.About}`}>
          <MenuItem
            onClick={() => {
              onClick();
            }}
          >
            About
          </MenuItem>
        </HashLink>
      );
    },
  },
  {
    CustomMenuItem({ onClick }) {
      return (
        <HashLink smooth to={`/#${URLPaths.Contact}`}>
          <MenuItem
            onClick={() => {
              onClick();
            }}
          >
            Contact me
          </MenuItem>
        </HashLink>
      );
    },
  },
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
  // const name = e.target[0].value;
  // const email = e.target[2].value;
  // const subject = e.target[4].value;
  // const message = e.target[6].value;

  // console.log(name, email, subject, message)

  console.log("Submit was clicked!");
};

const bioOverview = {
  title: "Hi, I’m Earth!",
  paragraphs: [
    "I’m a self-taught Front End Developer and school-taught Systems Engineer from Nigeria.",
    "I've been building websites since 2017 with a focus on responsive design, accessibility and pleasing aesthetics.",
    "I've spoken at multiple international conferences on a variety of topics ranging from web accessibility to career development.",
  ],
};

const readMoreContent = {
  skills: {
    languages: ["HTML, CSS, JS", "NodeJS", "C#"],
    libraries: ["ReactJS", "React-Redux", "Material-UI"],
    tools: ["Git", "GitHub", "BitBucket", "Jira"],
  },
  experiences: [
    {
      company: "DigitalInnov",
      position: "Front-end Developer Intern",
      howLong: "June 2022 - Current",
      description:
        " Working with Shopify technologies to create e-commerce stores on various client projects.",
    },
  ],
  educations: {
    college: {
      level: "B.S. Aviation Information Technology",
      school: "Philippine State College of Aeronautics, Pasay, Metro Manila",
      schoolYear: "June 2018 - October 2022",
      keyProject: {
        title: "Built a Computer Laboratory Management Software",
        link: "https://github.com/earthjan/computer-lab-management",
        year: "2022",
      },
    },
    shs: {
      level: "Tech-Voc Senior High school",
      school: "AMA Basic Education, Las Piñas, Metro Manila",
      schoolYear: "2018",
      relevantCourseWork: "Introduction and Fundamentals of Programming",
    },
  },
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
      landingPageScrollToURL={landingPageScrollToURL}
      appbarLinks={appbarLinks}
      appbarMenuLinks={appbarBurgerLinks}
      bioOverview={bioOverview}
      skills={readMoreContent.skills}
      experiences={readMoreContent.experiences}
      educations={readMoreContent.educations}
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
