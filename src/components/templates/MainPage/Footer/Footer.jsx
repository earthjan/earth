import React from "react";

import { Stack } from "@mui/material";

import TextGray from "../../../atoms/TextGray/TextGray";
import LogoContainer from "../../../atoms/LogoContainer/LogoContainer";

import { github, linkedin } from "../../../../assets/Svgs/assets";

import styles from "./styles";

const Footer = ({ linkedInURL, githubURL }) => {
  return (
    <Stack {...styles.root}>
      <TextGray sx={styles.text}>Connect with me:</TextGray>

      <Stack {...styles.logoBase}>
        <a href={linkedInURL}>
          <LogoContainer src={linkedin} {...styles.logo} />
        </a>

        <a href={githubURL}>
          <LogoContainer src={github} {...styles.logo} />
        </a>
      </Stack>

      <TextGray sx={styles.textCredit}>
        © designed & built by Earth Jan Baquir Marzan
      </TextGray>
    </Stack>
  );
};

export default Footer;
