import { github } from "../../../assets/Svgs/svgs";

import { LogoContainer } from "../../atoms/atoms";

import { TLogoContainerChildBaseProps } from "../../../ts/types/atoms/logo-container";

const GitHubIcon = (props: TLogoContainerChildBaseProps) => (
  <LogoContainer {...props} src={github} />
);

export default GitHubIcon;
