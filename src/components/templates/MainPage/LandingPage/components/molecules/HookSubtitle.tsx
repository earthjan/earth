import defaultTheme from "../../../../../../theme/defaultTheme";

import Container from "../atoms/Container";

import StyledTypography from "../atoms/StyledTypography";

const HookSubtitle = () => {
  return (
    <Container>
      <StyledTypography
        sx={{
          width: {
            xs: "100%",
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
