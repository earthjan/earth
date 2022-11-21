import React from "react";

import Logo from "../../atoms/LogoContainer/LogoContainer";

import styles from "./styles";

// =============== HELPER COMPONENTS/FUNCTIONS ===============

export function LogoEarth(src) {
  return (
    <Logo src={src} height={styles.logo.height} width={styles.logo.width} />
  );
}
