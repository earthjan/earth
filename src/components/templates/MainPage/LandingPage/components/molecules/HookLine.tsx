import { Typography } from "@mui/material";

import defaultTheme from "../../../../../../theme/defaultTheme";

import Container from "../atoms/Container";
import StyledTypography from "../atoms/StyledTypography";

const HookLine = () => {
  return (
    <Container>
      <StyledTypography
        variant="h4"
        sx={{
          textAlign: {
            xs: "center",
            md: "end",
          },
          color: defaultTheme.palette.text.secondary,
        }}
      >
        <Typography
          component="span"
          variant="h2"
          fontWeight="bold"
          color={defaultTheme.palette.secondary.main}
        >
          Real-world experience
        </Typography>{" "}
        for your{" "}
        <Typography
          component="span"
          variant="h3"
          fontWeight="medium"
          color={defaultTheme.palette.text.primary}
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
