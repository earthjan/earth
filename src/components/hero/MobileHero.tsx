import { useEffect, useLayoutEffect, useRef, useState } from "react";
import type { MouseEvent, ReactNode, TouchEvent } from "react";
import { Box, Button } from "@mui/material";

import { ArchitectAct, LeadAct, ShipAct } from "./MobileActs";
import "./MobileActs.css";
import "./MobileHero.css";
import { hero, story, techStack } from "../../data/profile";
import { mq, space, tokens, typeStyle, vars } from "../../theme/tokens";

/** Same pace as the desktop acts: the 15s story loop split over its three acts. */
const SLIDE_MS = tokens.motion.storyLoop / 3;
/** Acts are drawn on 460 x 520. The Earth cursor tag hangs up to ~48px past the right edge at the end of Ship, so that lane is reserved. */
const STAGE = { w: 460, h: 520, bleed: 48 };
const ACTS = [LeadAct, ArchitectAct, ShipAct];
const LABELS = ["Intro", ...story.map((s) => s.label)];
/** Short phones (e.g. POCO C85 with browser bars): content scales, the tabs and buttons don't. */
const SHORT = "@media (max-height: 680px)";

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

/** Scales a 460 x 520 act (plus its right bleed lane) to the space left in its slide (never above 1:1). */
function ScaledStage({ children }: { children: ReactNode }) {
  const box = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.75);

  useLayoutEffect(() => {
    const el = box.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      if (width && height) setScale(Math.min(1, width / (STAGE.w + STAGE.bleed), height / STAGE.h));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <Box ref={box} sx={{ flex: 1, minHeight: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Box sx={{ position: "relative", flex: "0 0 auto", width: (STAGE.w + STAGE.bleed) * scale, height: STAGE.h * scale }}>
        <Box sx={{ position: "absolute", left: 0, top: 0, transform: `scale(${scale})`, transformOrigin: "top left" }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}

/**
 * Scales its content down (never up) so it fits the slide on short screens, e.g. 360 x 600 phones.
 * Layout is unchanged; the content shrinks uniformly from `origin`.
 */
function FitBox({ children, origin, sx }: { children: ReactNode; origin: string; sx: object }) {
  const outer = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useLayoutEffect(() => {
    const o = outer.current;
    const i = inner.current;
    if (!o || !i) return;
    const fit = () => {
      const h = i.offsetHeight; // layout height, unaffected by the transform
      if (h) setScale(Math.min(1, o.clientHeight / h));
    };
    const ro = new ResizeObserver(fit);
    ro.observe(o);
    ro.observe(i);
    return () => ro.disconnect();
  }, []);

  return (
    <Box ref={outer} sx={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <Box ref={inner} sx={{ ...sx, flex: "0 0 auto", transform: scale < 1 ? `scale(${scale})` : "none", transformOrigin: origin }}>
        {children}
      </Box>
    </Box>
  );
}

/**
 * Hero for screens up to the lg breakpoint, where the desktop scene does not fit beside the title.
 * Full-screen story: Intro (title + stack) → Lead → Architect → Ship, 5s each, looping.
 * The two calls to action stay pinned at the bottom on every slide. Tap anywhere else for the next slide.
 */
export default function MobileHero() {
  const [slide, setSlide] = useState(0);
  const [cycle, setCycle] = useState(0);
  const [visible, setVisible] = useState(true);
  const [reduced] = useState(prefersReducedMotion);
  const root = useRef<HTMLDivElement>(null);
  const touch = useRef<{ x: number; y: number } | null>(null);

  // Only advance while the hero is on screen; restart the current slide when it comes back.
  useEffect(() => {
    const el = root.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
      if (entry.isIntersecting) setCycle((c) => c + 1);
    }, { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (reduced || !visible) return;
    const t = window.setTimeout(() => setSlide((s) => (s + 1) % LABELS.length), SLIDE_MS);
    return () => window.clearTimeout(t);
  }, [slide, cycle, reduced, visible]);

  const go = (i: number) => {
    setSlide((i + LABELS.length) % LABELS.length);
    setCycle((c) => c + 1);
  };

  const onTouchStart = (e: TouchEvent) => {
    const t = e.touches[0];
    touch.current = { x: t.clientX, y: t.clientY };
  };
  const onTouchEnd = (e: TouchEvent) => {
    const start = touch.current;
    touch.current = null;
    if (!start) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - start.x;
    const dy = t.clientY - start.y;
    if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy) * 1.5) go(slide + (dx < 0 ? 1 : -1));
  };

  // stories-style: a tap anywhere outside the tabs and buttons shows the next slide
  const onTap = (e: MouseEvent<HTMLElement>) => {
    if ((e.target as Element).closest("a, button")) return;
    go(slide + 1);
  };

  const slideState = (i: number) => (i === slide ? "is-active" : "");
  const slideKey = (i: number) => (i === slide ? `active-${i}-${cycle}` : `idle-${i}`);

  return (
    <Box
      ref={root}
      className="hero-mobile"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onClick={onTap}
      sx={{
        cursor: "pointer",
        WebkitTapHighlightColor: "transparent",
        userSelect: "none",
        position: "relative",
        width: "100%",
        maxWidth: 560,
        mx: "auto",
        minHeight: "100svh",
        boxSizing: "border-box",
        p: `${space(4)} ${space(4)} calc(${space(6)} + env(safe-area-inset-bottom))`,
        flexDirection: "column",
        gap: space(4),
      }}
    >
      {/* progress: one segment per slide, tap to jump */}
      <Box role="tablist" aria-label="Hero story" sx={{ display: "flex", gap: space(2) }}>
        {LABELS.map((label, i) => (
          <Box
            component="button"
            type="button"
            role="tab"
            key={label}
            id={`hero-tab-${i}`}
            aria-selected={i === slide}
            aria-controls={`hero-slide-${i}`}
            onClick={() => go(i)}
            sx={{
              flex: 1,
              minHeight: 44,
              p: 0,
              border: 0,
              bgcolor: "transparent",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: space(2),
              textAlign: "left",
              ...typeStyle("overline"),
              fontWeight: vars.font.weight.regular,
              color: i === slide ? vars.color.steel["50"] : vars.color.steel["400"],
            }}
          >
            {label}
            <Box component="span" sx={{ display: "block", height: 3, borderRadius: vars.radius.xs, bgcolor: vars.color.outline.subtle, overflow: "hidden" }}>
              <Box
                component="span"
                key={i === slide ? `fill-${cycle}-${slide}` : `fill-${i}`}
                className={`m-fill ${i < slide ? "is-done" : ""} ${i === slide ? "is-active" : ""}`}
                sx={{ display: "block", height: "100%", bgcolor: vars.color.accent.main }}
              />
            </Box>
          </Box>
        ))}
      </Box>

      {/* slides */}
      <Box aria-roledescription="carousel" aria-label="About Earth Jan" sx={{ position: "relative", flex: 1, minHeight: 0 }}>
        <Box
          id="hero-slide-0"
          role="tabpanel"
          aria-labelledby="hero-tab-0"
          key={slideKey(0)}
          className={`m-slide ${slideState(0)}`}
          sx={{ position: "absolute", inset: 0 }}
        >
          <FitBox origin="right center" sx={{ display: "flex", flexDirection: "column", alignItems: "flex-end", textAlign: "right", gap: space(5) }}>
          <Box component="h1" sx={{ m: 0, maxWidth: "14ch", ...typeStyle("display"), color: vars.color.text.heading }}>
            {hero.title}
          </Box>
          <Box component="p" sx={{ m: 0, maxWidth: vars.measure.sm, ...typeStyle("lead"), fontSize: vars.font.size.lg, color: vars.color.text.secondary }}>
            {hero.subtitleBefore}
            <Box component="strong" className="hl" sx={{ fontWeight: vars.font.weight.medium, color: vars.color.steel["50"] }}>
              {hero.highlight}
            </Box>
            {hero.subtitleAfter}
          </Box>
          <Box
            component="ul"
            aria-label="Tech stack"
            sx={{ listStyle: "none", m: 0, p: 0, display: "flex", flexWrap: "wrap", justifyContent: "flex-end", gap: space(3), maxWidth: 360 }}
          >
            {techStack.map((tech, i) => (
              <Box
                component="li"
                key={tech.label}
                className={`logo l${i + 1}`}
                title={tech.label}
                sx={{ width: 56, height: 56, borderRadius: vars.radius.lg, bgcolor: vars.color.surface["2"], display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                <img src={tech.src} alt={tech.label} width={26} height={26} />
              </Box>
            ))}
          </Box>
          </FitBox>
        </Box>

        {story.map((act, n) => {
          const i = n + 1;
          const Act = ACTS[n];
          return (
            <Box
              key={slideKey(i)}
              id={`hero-slide-${i}`}
              role="tabpanel"
              aria-labelledby={`hero-tab-${i}`}
              aria-hidden={i !== slide}
              className={`m-slide ${slideState(i)}`}
              sx={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", gap: space(4) }}
            >
              <Box sx={{ display: "flex", flexDirection: "column", gap: space(2) }}>
                <Box component="span" sx={{ ...typeStyle("overline"), color: vars.color.steel["300"] }}>
                  {act.label}
                </Box>
                <Box component="p" sx={{ m: 0, ...typeStyle("h3"), color: vars.color.text.heading, [SHORT]: { fontSize: vars.font.size.xl } }}>
                  {act.title}
                </Box>
              </Box>
              <ScaledStage>
                <Act />
              </ScaledStage>
            </Box>
          );
        })}
      </Box>

      {/* calls to action: always visible */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          gap: space(3),
          [mq.down("xs")]: { gridTemplateColumns: "minmax(0, 1fr)" },
        }}
      >
        {/* solid fill so the background wave and grid don't run through the outline */}
        <Button variant="outlined" href="#experience" fullWidth sx={{ bgcolor: vars.color.surface["0"] }}>
          View experience
        </Button>
        <Button variant="contained" href="#contact" fullWidth>
          Let&apos;s connect
        </Button>
      </Box>
    </Box>
  );
}
