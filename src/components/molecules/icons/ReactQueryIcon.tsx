import { reactQuery } from "../../../assets/Svgs/svgs";

import LogoContainer from "../../atoms/LogoContainer/LogoContainer";

import { TLogoContainerChildBaseProps } from "../../../ts/types/atoms/logo-container";

const ReactQueryIcon = (props: TLogoContainerChildBaseProps) => {
  return <LogoContainer src={reactQuery} {...props} />;
};

export default ReactQueryIcon;
