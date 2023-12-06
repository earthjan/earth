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
        justifyContent: "center",
        px: {
          xs: 1,
          md: 10,
        },
      }}
    >
      <HookLine />
      <HookSubtitle />
      <Container
        sx={{
          justifyContent: "flex-end",
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
