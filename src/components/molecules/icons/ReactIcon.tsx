import { react } from "../../../assets/Svgs/svgs";

import LogoContainer from "../../atoms/LogoContainer/LogoContainer";

import { TLogoContainerChildBaseProps } from "../../../ts/types/atoms/logo-container";

const ReactIcon = (props: TLogoContainerChildBaseProps) => {
  return <LogoContainer src={react} {...props} />;
};

export default ReactIcon;
