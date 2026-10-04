import type { Role } from "../../data/experience";
import { space, typeStyle, vars } from "../../theme/tokens";

/** Shared by the mobile role cards and the details sheet. */
export const dateRange = (r: Role) => (r.end ? `${r.start} - ${r.end}` : `${r.start} -`);

export const roleTitle = { m: 0, ...typeStyle("h4"), color: vars.color.text.heading } as const;
export const highlightBadge = {
  alignSelf: "flex-start",
  p: `${space(2)} ${space(3)}`,
  borderRadius: vars.radius.pill,
  bgcolor: vars.color.steel["800"],
  fontSize: vars.font.size.sm,
  fontWeight: vars.font.weight.medium,
  lineHeight: 1.3,
  color: vars.color.steel["50"],
} as const;
