import { MenuItem } from "@mui/material";

import MainPageTemplate from "../../../components/templates/MainPage/MainPage";
import { NavButton, HashLink } from "../../../components/atoms/atoms";

import mainPageSectionIds from "../../../constants/mainPageSectionIds";

import {
  myPortfolio,
  philscaLogo,
  digitalInnovLogo,
} from "../../../assets/Svgs/svgs";

import { handleDownload } from "./utils/downloadFile";

const landingPageScrollToURL = `/#${mainPageSectionIds.about}`;
/**
 * An array of links with download callback
 */
const appbarMenuLinks = [
  {
    text: "Download my Resume",
    download: async () => await handleDownload("resume"),
  },
  {
    text: "Download my CV",
    download: async () => await handleDownload("cv"),
  },
];
/**
 * An `array<string | object>` of links that has custom navigation buttons (`CustomNavButton`) for the appbar
 */
const appbarLinks = [
  {
    CustomNavButton() {
      return (
        <HashLink to={`/#${mainPageSectionIds.projects}`}>
          <NavButton content="Projects" />
        </HashLink>
      );
    },
  },
  /**
   * Custom navigation button that will be rendered on the appbar
   */
  // {
  //   CustomNavButton() {
  //     return (
  //       <>
  //         <Menu
  //           button={(onClick) => (
  //             <NavButton content="CV / Resume" onClick={onClick} />
  //           )}
  //         >
  //           {(onClick) =>
  //             appbarMenuLinks.map((link, key) => (
  //               <MenuItem
  //                 key={key}
  //                 onClick={async () => {
  //                   await link.download();
  //                   onClick();
  //                 }}
  //               >
  //                 <TextWithIcon
  //                   text={link.text}
  //                   Icon={VerticalAlignBottomIcon}
  //                 />
  //               </MenuItem>
  //             ))
  //           }
  //         </Menu>
  //       </>
  //     );
  //   },
  // },
  {
    CustomNavButton() {
      return (
        <HashLink to={`/#${mainPageSectionIds.about}`}>
          <NavButton content="About" />
        </HashLink>
      );
    },
  },
  {
    CustomNavButton() {
      return (
        <HashLink to={`/#${mainPageSectionIds.contact}`}>
          <NavButton
            content="Contact me"
            variant="contained"
            color="secondary"
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
        <HashLink to={`/#${mainPageSectionIds.projects}`}>
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
        <HashLink to={`/#${mainPageSectionIds.about}`}>
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
        <HashLink to={`/#${mainPageSectionIds.contact}`}>
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
  // ...appbarMenuLinks.map((link) => ({
  //   CustomMenuItem({ onClick }) {
  //     return (
  //       <MenuItem
  //         onClick={() => {
  //           link.download();
  //           onClick();
  //         }}
  //       >
  //         <TextWithIcon text={link.text} Icon={VerticalAlignBottomIcon} />
  //       </MenuItem>
  //     );
  //   },
  // })),
];

const formDownloadLinks = { CV: "#", resume: "#" };

const bioOverview = {
  title: "Hi, I’m Earth!",
  paragraphs: [
    "As an experienced junior web developer specializing building web apps, particularly admin panels, I bring a strong foundation in front-end development.",
    "My proficiency in React and TypeScript, coupled with my experience in MUI (Material UI) and unit testing automation, allows me to develop robust and efficient web apps. I am also adept at using GitHub for version control and project management.",
    "I am a self-motivated individual who is always eager to learn and grow in my role.",
  ],
};

const readMoreContent = {
  skills: {
    languages: ["TypeScript", "HTML, CSS, JS", "NodeJS", "C#"],
    libraries: [
      "ReactJS",
      "Material-UI",
      "React Testing Library",
      "Vitest",
      "React-Redux",
    ],
    tools: ["Git", "GitHub", "Vite"],
  },
  experiences: [
    {
      company: "DigitalInnov",
      position: "Full-time Web Developer",
      howLong: "Oct 2022 - Present",
      description: [
        "Part of the core team, leading the development of multiple web app projects.",
        "Contribute to the overall development strategy and implementation of web apps.",
      ],
    },
    {
      company: "DigitalInnov",
      position: "Web Developer Intern",
      howLong: "June - Oct 2022 (5 months)",
      description: [
        "Part of the core developer team, responsible for developing web apps using React and Material UI.",
        "Contribute to the overall development strategy and implementation of web apps.",
      ],
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
  "Driven by a passion for web development and a keen eye for detail, I've built a diverse portfolio of projects. Here are some of my most recent projects, showcasing my proficiency in building web apps.";
const projects = [
  {
    thumbnailUrl: philscaLogo,
    title: "Computer Laboratory Management System in PhilSCA Pasay Campus",
    description:
      "I was responsible for the development of the web app. This application automates tasks such as remote computer monitoring. I utilized C# ASP.NET for platform development, MySQL for DBMS, and PsTools for remote executions.",
    techStack: ["C#", "ASP.NET", "MySQL", "PsTools"],
    projectUrl: "https://github.com/earthjan/computer-lab-management",
  },
  {
    thumbnailUrl: digitalInnovLogo,
    title: "Digitalinnov: Confidential Project A",
    description:
      "As an intern, I'm leading a confidential web application project, architecting it with React and TypeScript, and ensuring optimal performance. I utilized MUI v5 for a responsive user interface and Vitest & RTL for app's quality and reliability.",
    techStack: [
      "ReactJS",
      "TypeScript",
      "MUI",
      "Vitest",
      "React Testing Library",
      "Redux",
    ],
    officialSite: "https://digitalinnov.com/",
  },
  {
    thumbnailUrl: digitalInnovLogo,
    title: "Digitalinnov: Confidential Project B",
    description:
      "I'm part of the project's core dev team, allowing me to also decide the architecture and design to tech stack selection. I used ReactJS, TypeScript, MUI, React Admin v4, Vitest, and React Testing Library to build the application.",
    techStack: [
      "ReactJS",
      "TypeScript",
      "MUI",
      "React Admin v4",
      "Vitest",
      "React Testing Library",
    ],
    officialSite: "https://digitalinnov.com/",
  },
  {
    thumbnailUrl: myPortfolio,
    title: "My Portfolio",
    description:
      "I'm part of the project's core dev team, allowing me to also decide the architecture and design to tech stack selection. I used ReactJS, TypeScript, MUI, React Admin v4, Vitest, and React Testing Library to build the application.",
    techStack: [
      "ReactJS",
      "TypeScript",
      "MUI",
      "React Admin v4",
      "Vitest",
      "React Testing Library",
    ],
    projectUrl: "https://github.com/earthjan/earth",
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
      onDownloadCv={async () => await handleDownload("cv")}
      onDownloadResume={async () => await handleDownload("resume")}
      linkedInURL={linkedInURL}
      githubURL={githubURL}
    />
  );
};

export default MainPage;
