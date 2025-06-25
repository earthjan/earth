import { BoxProps } from "@mui/material";

export type TLogoContainerProps = Pick<
  BoxProps<"img">,
  | "height"
  | "width"
  | "maxHeight"
  | "maxWidth"
  | "border"
  | "borderRadius"
  | "borderColor"
  | "alt"
  | "src"
  | "sx"
>;

export type TLogoContainerChildBaseProps = Omit<TLogoContainerProps, "src">;
