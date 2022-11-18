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

const MainPage = () => {
  return (
    <MainPageTemplate
      formDownloadLinks={formDownloadLinks}
      handleContactSubmit={handleContactSubmit}
    />
  );
};

export default MainPage;
