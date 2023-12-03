import React from "react";

import { Stack } from "@mui/material";

import TextGray from "../../../atoms/TextGray/TextGray";

import LinkedInIcon from "../../../molecules/icons/LinkedInIcon";
import GitHubIcon from "../../../molecules/icons/GitHubIcon";

import styles from "./styles";

const Footer = ({ linkedInURL, githubURL }) => {
  return (
    <Stack {...styles.root}>
      <TextGray sx={styles.text}>Connect with me:</TextGray>

      <Stack {...styles.logoBase}>
        <a href={linkedInURL}>
          <LinkedInIcon {...styles.logo} />
        </a>

        <a href={githubURL}>
          <GitHubIcon {...styles.logo} />
        </a>
      </Stack>

      <TextGray sx={styles.textCredit}>
        © designed & built by Earth Jan Baquir Marzan
      </TextGray>
    </Stack>
  );
};

export default Footer;
