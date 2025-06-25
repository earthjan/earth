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
import { BORDER_WIDTH, OFFSET } from "../../../../../../constants/styles";
import NextJsIcon from "../../../../../molecules/icons/NextJsIcon";
import ReactAdminIcon from "../../../../../molecules/icons/ReactAdminIcon";
import ReactQueryIcon from "../../../../../molecules/icons/ReactQueryIcon";

const logoDimensions = {
  width: {
    xs: "25px",
    sm: "35px",
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
          gap: theme.spacing(OFFSET),
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
        <ReactAdminIcon {...logoDimensions} />
        <NextJsIcon {...logoDimensions} />
        <TypeScriptIcon {...logoDimensions} />
        <VitestIcon {...logoDimensions} />
        <MuiIcon {...logoDimensions} />
        <RTLIcon {...logoDimensions} />
        <ReactQueryIcon {...logoDimensions} />
      </Box>
    </Stack>
  );
};

export default TechAndTools;
