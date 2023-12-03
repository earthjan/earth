import { ts } from "../../../assets/Svgs/svgs";

import LogoContainer from "../../atoms/LogoContainer/LogoContainer";

import { TLogoContainerChildBaseProps } from "../../../ts/types/atoms/logo-container";

const TypeScriptIcon = (props: TLogoContainerChildBaseProps) => {
  return <LogoContainer src={ts} {...props} />;
};

export default TypeScriptIcon;
