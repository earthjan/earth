import React from "react";

import { HashLink as HL } from "react-router-hash-link";

import styles from "./styles";

const HashLink = ({ to, children }) => {
  return (
    <HL smooth to={to} style={styles.link}>
      {children}
    </HL>   
  );
};

export default HashLink;
