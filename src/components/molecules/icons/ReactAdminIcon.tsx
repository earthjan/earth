import { reactAdmin } from "../../../assets/pngs/pngs";

import LogoContainer from "../../atoms/LogoContainer/LogoContainer";

import { TLogoContainerChildBaseProps } from "../../../ts/types/atoms/logo-container";

const ReactAdminIcon = (props: TLogoContainerChildBaseProps) => {
  return <LogoContainer src={reactAdmin} {...props} />;
};

export default ReactAdminIcon;
