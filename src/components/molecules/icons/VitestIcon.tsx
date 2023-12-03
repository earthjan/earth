import { vitest } from "../../../assets/pngs/pngs";

import LogoContainer from "../../atoms/LogoContainer/LogoContainer";

import { TLogoContainerChildBaseProps } from "../../../ts/types/atoms/logo-container";

const VitestIcon = (props: TLogoContainerChildBaseProps) => {
  return <LogoContainer src={vitest} {...props} />;
};

export default VitestIcon;
