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
        px: 1,
      }}
    >
      <HookLine />
      <HookSubtitle />
      <Container
        sx={{
          justifyContent: "flex-end",
          flexDirection: {
            xs: "column",
          },

          rowGap: 2,
        }}
      >
        <TechAndTools
          sx={{
            order: {
              xs: 2,
            },
          }}
        />
        <Stack
          sx={{
            alignItems: "center",
            order: {
              xs: 1,
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
