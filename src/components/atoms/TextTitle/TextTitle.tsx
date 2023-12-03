import React from "react";

import { Typography, TypographyProps } from "@mui/material";

const styles = {
  title: (fontSize: TypographyProps["fontSize"] = "1.5rem") => ({
    fontSize: fontSize,
    fontWeight: "bold",
  }),
};

const TextTitle = ({
  children,
  color,
  fontSize,
}: Pick<TypographyProps, "children" | "color" | "fontSize">) => {
  return (
    <Typography color={color} sx={styles.title(fontSize)}>
      {children}
    </Typography>
  );
};

export default TextTitle;
