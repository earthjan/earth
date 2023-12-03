import { Button } from "@mui/material";

import mainPageSectionIds from "../../../../../../constants/mainPageSectionIds";

import { HashLink } from "../../../../../atoms/atoms";

import Container from "../atoms/Container";

const ButtonList = () => {
  return (
    <Container
      sx={{
        justifyContent: "center",
        alignItems: "center",
        columnGap: 1,
      }}
    >
      <HashLink to={`/#${mainPageSectionIds.contact}`}>
        <Button
          variant="contained"
          color={"secondary" as any}
          sx={{
            fontWeight: "bold",
            borderRadius: 10,
          }}
        >
          Contact Me
        </Button>
      </HashLink>
      <HashLink to={`/#${mainPageSectionIds.projects}`}>
        <Button variant="outlined" color="titleText" sx={{ borderRadius: 10 }}>
          View Projects
        </Button>
      </HashLink>
    </Container>
  );
};

export default ButtonList;
