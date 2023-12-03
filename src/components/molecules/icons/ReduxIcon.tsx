import { redux } from "../../../assets/Svgs/svgs";

import LogoContainer from "../../atoms/LogoContainer/LogoContainer";

import { TLogoContainerChildBaseProps } from "../../../ts/types/atoms/logo-container";

const ReduxIcon = (props: TLogoContainerChildBaseProps) => {
  return <LogoContainer src={redux} {...props} />;
};

export default ReduxIcon;
