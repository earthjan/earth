import { linkedin } from "../../../assets/Svgs/svgs";

import { LogoContainer } from "../../atoms/atoms";

import { TLogoContainerChildBaseProps } from "../../../ts/types/atoms/logo-container";

const LinkedInIcon = (props: TLogoContainerChildBaseProps) => (
  <LogoContainer {...props} src={linkedin} />
);

export default LinkedInIcon;
