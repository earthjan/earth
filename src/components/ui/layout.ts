import { space } from "../../theme/tokens";

/** Title left, body right; stacks when the body would be narrower than 520px. */
export const twoColumn = {
  display: "flex",
  flexWrap: "wrap",
  gap: `${space(10)} ${space(16)}`,
  alignItems: "flex-start",
} as const;
