import { Fragment } from "react";
import type { ReactNode } from "react";
import { Box } from "@mui/material";
import type { SxProps, Theme } from "@mui/material";

import { space, typeStyle, vars } from "../../theme/tokens";

type WithSx = { sx?: SxProps<Theme> };

/** Section shell: full-bleed background, token padding, centered container. */
export function Section({
  id,
  alt,
  decor,
  children,
  component = "section",
}: {
  id: string;
  alt?: boolean;
  decor?: ReactNode;
  children: ReactNode;
  component?: "section" | "footer";
}) {
  return (
    <Box
      component={component}
      id={id}
      className="sec"
      sx={{
        position: "relative",
        overflow: "hidden",
        p: `${space(28)} ${space(6)}`,
        bgcolor: alt ? vars.color.surface["1"] : undefined,
      }}
    >
      {decor}
      <Box sx={{ position: "relative", maxWidth: vars.container, mx: "auto" }}>{children}</Box>
    </Box>
  );
}

export function SectionTitle({ children, sx }: { children: ReactNode } & WithSx) {
  return (
    <Box
      component="h2"
      className="reveal"
      sx={[{ m: 0, ...typeStyle("h2"), color: vars.color.text.heading }, ...(Array.isArray(sx) ? sx : [sx])]}
    >
      {children}
    </Box>
  );
}

/**
 * Parts separated by a 1px vertical divider (replaces "·").
 * `bleed` = the container's vertical padding, so the line touches its top and bottom edges.
 */
export function Divided({ parts, bleed = 0 }: { parts: string[]; bleed?: Parameters<typeof space>[0] }) {
  return (
    <>
      {parts.map((part, i) => (
        <Fragment key={part}>
          {i > 0 && (
            <Box
              component="span"
              aria-hidden="true"
              sx={{
                alignSelf: "stretch",
                flex: "0 0 1px",
                width: "1px",
                my: bleed ? space(bleed, true) : 0,
                mx: space(3),
                bgcolor: "currentColor",
                opacity: 0.35,
              }}
            />
          )}
          <span>{part}</span>
        </Fragment>
      ))}
    </>
  );
}

const inlineRow = { display: "inline-flex", alignItems: "center", flexWrap: "wrap" } as const;

/** Outlined rectangular tag (tech in experience cards). */
export function Tag({ children }: { children: ReactNode }) {
  return (
    <Box
      component="span"
      sx={{
        p: `${space(1)} ${space(3)}`,
        borderRadius: vars.radius.sm,
        border: `1px solid ${vars.color.outline.default}`,
        fontFamily: vars.font.text,
        fontSize: vars.font.size.xs,
        color: vars.color.accent.main,
      }}
    >
      {children}
    </Box>
  );
}

/** Filled pill chip; pass `parts` for divided content. */
export function Chip({
  children,
  parts,
  size = "md",
}: {
  children?: ReactNode;
  parts?: string[];
  size?: "sm" | "md";
}) {
  const py = size === "sm" ? 1 : 2;
  return (
    <Box
      component="span"
      sx={{
        ...inlineRow,
        p: `${space(py)} ${space(3)}`,
        borderRadius: vars.radius.pill,
        bgcolor: vars.color.surface["4"],
        fontSize: size === "sm" ? vars.font.size.xs : vars.font.size.sm,
        color: vars.color.steel["100"],
      }}
    >
      {parts ? <Divided parts={parts} bleed={py as 1 | 2} /> : children}
    </Box>
  );
}

/** Caption line with divided parts, e.g. "Samsung Electronics | Philippines". */
export function MetaLine({ parts, sx }: { parts: string[] } & WithSx) {
  return (
    <Box component="span" sx={[{ ...inlineRow }, ...(Array.isArray(sx) ? sx : [sx])]}>
      <Divided parts={parts} />
    </Box>
  );
}

export function ExternalIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17L17 7M9 7h8v8" />
    </svg>
  );
}

export function CheckIcon({ size = 16, strokeWidth = 2.5 }: { size?: number; strokeWidth?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}
