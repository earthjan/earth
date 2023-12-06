import { Stack, Box, StackProps } from "@mui/material";

import StyledTypography from "../atoms/StyledTypography";

import ReactIcon from "../../../../../molecules/icons/ReactIcon";
import TypeScriptIcon from "../../../../../molecules/icons/TypeScriptIcon";
import MuiIcon from "../../../../../molecules/icons/MuiIcon";
import GitHubIcon from "../../../../../molecules/icons/GitHubIcon";
import GitIcon from "../../../../../molecules/icons/GitIcon";
import ViteIcon from "../../../../../molecules/icons/ViteIcon";
import Html5Icon from "../../../../../molecules/icons/Html5Icon";
import CssIcon from "../../../../../molecules/icons/CssIcon";
import RTLIcon from "../../../../../molecules/icons/RTLIcon";
import VitestIcon from "../../../../../molecules/icons/VitestIcon";
import ReduxIcon from "../../../../../molecules/icons/ReduxIcon";

import defaultTheme from "../../../../../../theme/defaultTheme";

const logoDimensions = {
  width: {
    sm: "50px",
  },
  height: "auto",
};

const TechAndTools = (props: StackProps) => {
  return (
    <Stack
      {...props}
      sx={{
        ...props.sx,
        px: {
          xs: 5,
        },
      }}
    >
      <StyledTypography>Using</StyledTypography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: 1,
          backgroundColor: defaultTheme.palette.accent.main,

          p: 2,

          borderRadius: 5,

          width: {
            sm: "350px",
          },
        }}
      >
        <ReactIcon {...logoDimensions} />
        <TypeScriptIcon {...logoDimensions} />
        <MuiIcon {...logoDimensions} />
        <GitHubIcon {...logoDimensions} />
        <GitIcon {...logoDimensions} />
        <ViteIcon {...logoDimensions} />
        <Html5Icon {...logoDimensions} />
        <CssIcon {...logoDimensions} />
        <RTLIcon {...logoDimensions} />
        <VitestIcon {...logoDimensions} />
        <ReduxIcon {...logoDimensions} />
      </Box>
    </Stack>
  );
};

export default TechAndTools;
