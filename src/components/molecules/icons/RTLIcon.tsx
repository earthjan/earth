import { reactTestingLibrary } from "../../../assets/pngs/pngs";

import LogoContainer from "../../atoms/LogoContainer/LogoContainer";

import { TLogoContainerChildBaseProps } from "../../../ts/types/atoms/logo-container";

const RTLIcon = (props: TLogoContainerChildBaseProps) => {
  return <LogoContainer src={reactTestingLibrary} {...props} />;
};

export default RTLIcon;
