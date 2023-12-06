import { Typography } from "@mui/material";

import defaultTheme from "../../../../../../theme/defaultTheme";

import Container from "../atoms/Container";
import StyledTypography from "../atoms/StyledTypography";

const HookLine = () => {
  return (
    <Container>
      <StyledTypography
        sx={{
          fontSize: {
            xs: defaultTheme.typography.h4.fontSize,
            // sm: "2.3rem"
          },
          lineHeight: {
            xs: defaultTheme.typography.h4.lineHeight,
          },
          textAlign: {
            xs: "center",
            md: "end",
          },
          color: defaultTheme.palette.text.secondary,
        }}
      >
        <Typography
          component="span"
          fontWeight="bold"
          color={defaultTheme.palette.secondary.main}
          sx={{
            fontSize: {
              xs: defaultTheme.typography.h2.fontSize,
              sm: "4rem",
              md: "5rem",
            },
            lineHeight: {
              xs: defaultTheme.typography.h2.lineHeight,
              md: defaultTheme.typography.h1.lineHeight,
            },
          }}
        >
          Real-world experience
        </Typography>{" "}
        for your{" "}
        <Typography
          component="span"
          variant="h3"
          fontWeight="medium"
          color={defaultTheme.palette.text.primary}
          sx={{
            fontSize: {
              xs: defaultTheme.typography.h3.fontSize,
              sm: "3.4rem",
              md: "4.5rem",
            },
            lineHeight: {
              xs: defaultTheme.typography.h3.lineHeight,
              md: defaultTheme.typography.h2.lineHeight,
            },
          }}
        >
          {" "}
          Web Project{" "}
        </Typography>
        needs
      </StyledTypography>
    </Container>
  );
};

export default HookLine;
