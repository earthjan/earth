import type { ReactNode, RefObject } from "react";
import { Box } from "@mui/material";
import type { SxProps, Theme } from "@mui/material";

import { mq, space, vars } from "../../theme/tokens";

/**
 * Full-bleed horizontal scroller (mobile and tablet sections). Cards snap to the gutter and the next
 * card peeks in from the right. Children are the cards; give them a fixed or percentage `flex-basis`.
 */
export function SnapScroller({
  scrollerRef,
  onScroll,
  label,
  children,
  sx,
}: {
  scrollerRef: RefObject<HTMLDivElement | null>;
  onScroll: () => void;
  label: string;
  children: ReactNode;
  sx?: SxProps<Theme>;
}) {
  return (
    <Box
      ref={scrollerRef}
      onScroll={onScroll}
      role="region"
      aria-label={label}
      tabIndex={0}
      className="snap"
      sx={[
        {
          position: "relative",
          display: "flex",
          alignItems: "stretch",
          gap: space(3),
          overflowX: "auto",
          overflowY: "hidden",
          scrollSnapType: "x mandatory",
          overscrollBehaviorX: "contain",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
          // bleed past the section gutter so cards scroll edge to edge
          mx: space(6, true),
          px: space(6),
          scrollPaddingInline: space(6),
          pt: space(1),
          pb: space(3),
          "& > *": { flex: "0 0 auto", scrollSnapAlign: "start" },
          // end spacer: the gap plus this equals the gutter after the last card
          "&::after": { content: '""', flex: `0 0 calc(${space(6)} - ${space(3)})` },
          [mq.down("sm")]: {
            mx: space(4, true),
            px: space(4),
            scrollPaddingInline: space(4),
            "&::after": { flex: `0 0 calc(${space(4)} - ${space(3)})` },
          },
          "&:focus-visible": { outline: `2px solid ${vars.color.accent.main}`, outlineOffset: -2 },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {children}
    </Box>
  );
}

/** Pager dots under a scroller (same look as the project carousel). */
export function PagerDots({
  count,
  index,
  onSelect,
  label,
}: {
  count: number;
  index: number;
  onSelect: (i: number) => void;
  label: (i: number) => string;
}) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: space(2) }}>
      {Array.from({ length: count }, (_, i) => (
        <Box
          component="button"
          type="button"
          key={i}
          onClick={() => onSelect(i)}
          aria-label={label(i)}
          aria-current={i === index}
          sx={{ width: 32, height: 32, p: 0, border: 0, bgcolor: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <Box
            component="span"
            sx={{
              display: "block",
              height: 8,
              borderRadius: vars.radius.pill,
              transition: `width ${vars.duration.medium} ${vars.ease.standard}, background-color ${vars.duration.medium} ${vars.ease.standard}`,
              width: i === index ? 24 : 8,
              bgcolor: i === index ? vars.color.accent.main : vars.color.outline.strong,
            }}
          />
        </Box>
      ))}
    </Box>
  );
}
