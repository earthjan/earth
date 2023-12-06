import { Typography, useMediaQuery } from "@mui/material";

import defaultTheme from "../../../../../../theme/defaultTheme";

import Container from "../atoms/Container";
import StyledTypography from "../atoms/StyledTypography";

const HookLine = () => {
  const dsf = useMediaQuery("xs");

  let rootTypographyVariant = "h4";

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
            },
            lineHeight: {
              xs: defaultTheme.typography.h2.lineHeight,
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
            },
            lineHeight: {
              xs: defaultTheme.typography.h3.lineHeight,
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
