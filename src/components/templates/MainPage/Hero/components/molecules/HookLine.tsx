import { Typography, useTheme } from "@mui/material";

import Container from "../atoms/Container";
import StyledTypography from "../atoms/StyledTypography";

const HookLine = () => {
  const defaultTheme = useTheme();

  return (
    <Container sx={{
      width: {
        lg: "80%",
      }
    }}>
      <StyledTypography
        sx={{
          fontSize: {
            xs: "1.8rem",
            lg: defaultTheme.typography.h3.fontSize + "px",
            xl: defaultTheme.typography.h2.fontSize + "px",
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
              xs: "3rem",
              sm: "4rem",
              md: "5rem",
              lg: "4.8rem",
              xl: "5rem",
            },
          }}
        >
          Real-world Experience
        </Typography>{" "}
        for your{" "}
        <Typography
          component="span"
          variant="h3"
          fontWeight="medium"
          color={defaultTheme.palette.text.primary}
          sx={{
            fontSize: {
              xs: "2.5rem",
              sm: "3.4rem",
              md: "4.5rem",
              lg: "4.5rem",
              xl: "4.8rem",
            },
          }}
        >
          React Projects
        </Typography>
      </StyledTypography>
    </Container>
  );
};

export default HookLine;
