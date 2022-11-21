import React from "react";

import Logo from "../../atoms/LogoContainer/LogoContainer";

import EarthLogo from "../../../assets/Svgs/Logo.svg"

import styles from "./styles";

// =============== HELPER COMPONENTS/FUNCTIONS ===============

export function LogoEarth() {
  return (
    <Logo src={EarthLogo} height={styles.logo.height} width={styles.logo.width} />
  );
}
