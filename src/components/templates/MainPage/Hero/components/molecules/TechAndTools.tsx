import { Stack, Box, StackProps, useTheme } from "@mui/material";

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
import { BORDER_WIDTH } from "../../../../../../constants/styles";

const logoDimensions = {
  width: {
    sm: "50px",
    md: "35px",
    xl: "40px",
  },
  height: "auto",
};

const TechAndTools = (props: StackProps) => {
  const theme = useTheme();

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
          border: BORDER_WIDTH,
          borderColor: theme.palette.border.main,
          borderRadius: theme.shape.borderRadius,

          p: 2,

          width: {
            sm: "350px",
            md: "250px",
            xl: "300px",
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
