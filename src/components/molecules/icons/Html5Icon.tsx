import { html5 } from "../../../assets/Svgs/svgs";

import LogoContainer from "../../atoms/LogoContainer/LogoContainer";

import { TLogoContainerChildBaseProps } from "../../../ts/types/atoms/logo-container";

const Html5Icon = (props: TLogoContainerChildBaseProps) => {
  return <LogoContainer src={html5} {...props} />;
};

export default Html5Icon;
