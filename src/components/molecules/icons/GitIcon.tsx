import { git } from "../../../assets/Svgs/svgs";

import LogoContainer from "../../atoms/LogoContainer/LogoContainer";

import { TLogoContainerChildBaseProps } from "../../../ts/types/atoms/logo-container";

const GitIcon = (props: TLogoContainerChildBaseProps) => {
  return <LogoContainer src={git} {...props} />;
};

export default GitIcon;
