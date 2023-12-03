import { mui } from "../../../assets/pngs/pngs";

import LogoContainer from "../../atoms/LogoContainer/LogoContainer";

import { TLogoContainerChildBaseProps } from "../../../ts/types/atoms/logo-container";

const MuiIcon = (props: TLogoContainerChildBaseProps) => {
  return <LogoContainer src={mui} {...props} />;
};

export default MuiIcon;
