import { css } from "../../../assets/Svgs/svgs";

import LogoContainer from "../../atoms/LogoContainer/LogoContainer";

import { TLogoContainerChildBaseProps } from "../../../ts/types/atoms/logo-container";

const CssIcon = (props: TLogoContainerChildBaseProps) => {
  return <LogoContainer src={css} {...props} />;
};

export default CssIcon;
