import React from "react";

import { MenuItem } from "@mui/material";

import FileOpenIcon from '@mui/icons-material/FileOpen';

import MainPageTemplate from "../../../components/templates/MainPage/MainPage";
import {
  TextWithIcon,
  Menu,
  NavButton,
  HashLink,
  TextLink,
  TextGray,
} from "../../../components/atoms/atoms";

import URLPaths from "../../../utils/URLPaths";

import {
  philscaLogo,
  digitalInnovLogo,
  myPortfolio,
} from "../../../assets/Svgs/assets";

const landingPageScrollToURL = `/#${URLPaths.About}`;
/**
 * An array of links with download callback
 */
const appbarMenuLinks = [
  {
    text: "View my Resume",
    download: () => {
      console.log("downloading resume...");
    },
  },
  {
    text: "View my CV",
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
        <HashLink to={`/#${URLPaths.Projects}`}>
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
                    Icon={FileOpenIcon}
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
        <HashLink to={`/#${URLPaths.About}`}>
          <NavButton content="About" />
        </HashLink>
      );
    },
  },
  {
    CustomNavButton() {
      return (
        <HashLink to={`/#${URLPaths.Contact}`}>
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
        <HashLink to={`/#${URLPaths.Projects}`}>
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
        <HashLink to={`/#${URLPaths.About}`}>
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
        <HashLink to={`/#${URLPaths.Contact}`}>
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
          <TextWithIcon text={link.text} Icon={FileOpenIcon} />
        </MenuItem>
      );
    },
  })),
];

const formDownloadLinks = { CV: "C:\\Users\\Earth Jsn\\Documents\\Git\\Repos\\earth\\src\\assets\\sample.pdf", resume: "#" };
const handleContactSubmit = (e) => {
  e.preventDefault();

  const name = e.target[0].value;
  const email = e.target[2].value;
  const subject = e.target[4].value;
  const message = e.target[6].value;

  console.log(name, email, subject, message);
  console.log("Submit was clicked!");
};

const bioOverview = {
  title: "Hi, I’m Earth!",
  paragraphs: [
    {
      render: (key, sx) => (
        <TextGray key={key} sx={sx}>
          I'm a school-taught IT, and I got to work on web{" "}
          {
            <BioLink
              text="front-end"
              link={`/#${URLPaths.PrNDAPr}`}
              fontSize={sx.fontSize}
            />
          }{" "}
          and{" "}
          {
            <BioLink
              text="back-end"
              link={`/#${URLPaths.PrComLab}`}
              fontSize={sx.fontSize}
            />
          }{" "}
          projects.,
        </TextGray>
      ),
    },
    "I mostly find myself feeling rewarded when I consider the user experience (UX), so it's quite hard for me to intendedly ignore it when working on a project.",
    "Before going to college for an IT course, I was focused on fine art field, it's even on my list of career choices.",
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
        "Working under NDA with a web app project that got me the oppurtunity to administer and develop it from the scratch.",
    },
  ],
  educations: {
    college: {
      level: "B.S. Aviation Information Technology",
      school: "Philippine State College of Aeronautics, Pasay, Metro Manila",
      schoolYear: "June 2018 - October 2022",
      keyProject: {
        title: "Built a Computer Laboratory Management Web App",
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
  "I spent most of my time learning web-development stuffs without using them practically (like building a fun project), but here are my featured projects:";
const projects = [
  {
    id: URLPaths.PrComLab,
    thumbnailUrl: philscaLogo,
    title: "Computer Laboratory Management Web App",
    description:
      "I developed this web app project for my college capstone that manages computer laboratories remotely. One of its features is the designation of computer units. It allowed me to test my knowledge in the back-end.",
    techStack: [".NET 5", "C#", "MySQL"],
    projectUrl: "https://github.com/earthjan/computer-lab-management",
  },
  {
    id: URLPaths.PrNDAPr,
    thumbnailUrl: digitalInnovLogo,
    title: "NDA Web-app Project with DigitalInnov",
    description:
      "I have the opportunity to administer and develop the project from the scratch. Therefore, I've been learning tons of coding best practices and front-end, especially React.",
    techStack: ["ReactJS", "Material-UI", "React-Redux"],
    projectUrl: "https://digitalinnov.com",
    buttonText: "Visit DigitalInnov"
  },
  {
    id: URLPaths.PrMyPortfolio,
    thumbnailUrl: myPortfolio,
    title: "My Portfolio",
    description:
      "This is the first time I've worked on my portfolio. I kept the UI simple and functionally aesthetic, and I plan to work with it more, especially to showcase my front-end skills.",
    techStack: ["ReactJS", "Material-UI", "JavaScript"],
    projectUrl: "https://github.com/earthjan/earth",
  },
];

const linkedInURL = "https://linkedin.com/in/earthjan";
const githubURL = "https://github.com/earthjan";

const contactSubtitle = "Got job opportunities? Or, just want to connect with me? Contact me!"

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
      contactSubtitle={contactSubtitle}
    />
  );
};

export default MainPage;

// ================ HELPER FUNCTIONS ================

function BioLink({ link, text, fontSize }) {
  return (
    <HashLink to={link}>
      <TextLink component="span" fontSize={fontSize}>
        {text}
      </TextLink>
    </HashLink>
  );
}
