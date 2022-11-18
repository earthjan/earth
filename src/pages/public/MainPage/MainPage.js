import React from "react";

import MainPageTemplate from "../../../components/templates/MainPage/MainPage";

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

const projectSecTitle = "I do most of my work under contract but I tend to freelance from time to time or build projects for fun. Here are some of my most recent commercial projects:"
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

const MainPage = () => {
  return (
    <MainPageTemplate
      projectSecTitle={projectSecTitle}
      projects={projects}
      formDownloadLinks={formDownloadLinks}
      handleContactSubmit={handleContactSubmit}
    />
  );
};

export default MainPage;
