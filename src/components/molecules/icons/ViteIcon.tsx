import { vite } from "../../../assets/Svgs/svgs";

import LogoContainer from "../../atoms/LogoContainer/LogoContainer";

import { TLogoContainerChildBaseProps } from "../../../ts/types/atoms/logo-container";

const ViteIcon = (props: TLogoContainerChildBaseProps) => {
  return <LogoContainer src={vite} {...props} />;
};

export default ViteIcon;
