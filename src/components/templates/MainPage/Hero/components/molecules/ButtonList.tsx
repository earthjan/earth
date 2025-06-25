import { Button } from "@mui/material";

import mainPageSectionIds from "../../../../../../constants/mainPageSectionIds";

import { HashLink } from "../../../../../atoms/atoms";

import Container from "../atoms/Container";

const buttonStyles = {
  fontSize: {
    sm: "1.3rem",
    md: "1.2rem",
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
      <HashLink to={`/#${mainPageSectionIds.projects}`}>
        <Button
          variant="outlined"
          sx={{
            ...buttonStyles,
            borderRadius: 10,
          }}
        >
          View Projects
        </Button>
      </HashLink>

      <Button
        variant="contained"
        color={"secondary" as any}
        onClick={(e) => {
          e.preventDefault();
          window.open("mailto:earth.baquir.marzan@gmail.com", "_blank");
        }}
        sx={{
          ...buttonStyles,
          fontWeight: "bold",
          borderRadius: 10,
        }}
      >
        Let's Connect
      </Button>
    </Container>
  );
};

export default ButtonList;
