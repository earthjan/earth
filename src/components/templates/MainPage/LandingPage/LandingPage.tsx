import { Stack } from "@mui/material";

import Container from "./components/atoms/Container";
import HookLine from "./components/molecules/HookLine";
import HookSubtitle from "./components/molecules/HookSubtitle";
import ButtonList from "./components/molecules/ButtonList";
import LinkList from "./components/molecules/LinkList";
import TechAndTools from "./components/molecules/TechAndTools";

const LandingPage = () => {
  return (
    <Stack
      sx={{
        alignItems: "center",
        rowGap: 4,
        height: "100vh",
        justifyContent: {
          xs: "center",
          lg: "flex-start",
        },
        px: {
          xs: 1,
          md: 10,
          lg: 20,
        },
        py: {
          lg: "10vh",
        },
      }}
    >
      <HookLine />
      <HookSubtitle />
      <Container
        sx={{
          justifyContent: "flex-end",
          alignSelf: {
            md: "flex-end",
          },
          alignItems: { md: "center" },
          flexDirection: {
            xs: "column",
            md: "row",
          },

          rowGap: 2,
        }}
      >
        <TechAndTools
          sx={{
            order: {
              xs: 2,
              md: 1,
            },
          }}
        />
        <Stack
          sx={{
            alignItems: "center",
            order: {
              xs: 1,
              md: 2,
            },
            rowGap: 2,
          }}
        >
          <ButtonList />
          <LinkList />
        </Stack>
      </Container>
    </Stack>
  );
};

export default LandingPage;
