import defaultTheme from "../../../../../../theme/defaultTheme";

import Container from "../atoms/Container";

import StyledTypography from "../atoms/StyledTypography";

const HookSubtitle = () => {
  return (
    <Container sx={{ justifyContent: { md: "flex-end" } }}>
      <StyledTypography
        sx={{
          width: {
            xs: "100%",
            md: "50%",
            lg: "70%"
          },
          color: defaultTheme.palette.text.secondary,
        }}
      >
        Backed by a degree in IT and real-world front-end development
        experiences, I'm ready to bring your web project to life.
      </StyledTypography>
    </Container>
  );
};

export default HookSubtitle;
