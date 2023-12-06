import { Button } from "@mui/material";

import mainPageSectionIds from "../../../../../../constants/mainPageSectionIds";

import { HashLink } from "../../../../../atoms/atoms";

import Container from "../atoms/Container";

const buttonStyles = {
  fontSize: {
    sm: "1.3rem",
    md: "1.2rem"
  },
};

const ButtonList = () => {
  return (
    <Container
      sx={{
        justifyContent: "center",
        alignItems: "center",
        columnGap: {
          xs: 1,
          sm: 2,
        },
      }}
    >
      <HashLink to={`/#${mainPageSectionIds.contact}`}>
        <Button
          variant="contained"
          color={"secondary" as any}
          sx={{
            ...buttonStyles,
            fontWeight: "bold",
            borderRadius: 10,
          }}
        >
          Contact Me
        </Button>
      </HashLink>
      <HashLink to={`/#${mainPageSectionIds.projects}`}>
        <Button
          variant="outlined"
          color="titleText"
          sx={{
            ...buttonStyles,
            borderRadius: 10,
          }}
        >
          View Projects
        </Button>
      </HashLink>
    </Container>
  );
};

export default ButtonList;
