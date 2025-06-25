import { nextJs } from "../../../assets/Svgs/svgs";

import LogoContainer from "../../atoms/LogoContainer/LogoContainer";

import { TLogoContainerChildBaseProps } from "../../../ts/types/atoms/logo-container";

const NextJsIcon = (props: TLogoContainerChildBaseProps) => {
  return <LogoContainer src={nextJs} {...props} sx={{
    borderRadius: "100%",
    backgroundColor: "white"
  }} />;
};

export default NextJsIcon;
