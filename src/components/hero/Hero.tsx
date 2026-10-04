import { useEffect, useRef, useState } from "react";
import type { CSSProperties, MouseEvent } from "react";
import { Box, Button } from "@mui/material";

import HeroDecor from "./HeroDecor";
import StoryScene from "./StoryScene";
import MobileHero from "./MobileHero";
import { hero, techStack } from "../../data/profile";
import { mq, space, typeStyle, vars } from "../../theme/tokens";

/** Parallax depth per layer, in px of travel for the full pointer range (spec: States and Interactions). */
const DEPTH = { ring: -20, accents: -80, sceneX: 16, sceneY: 12 };

export default function Hero() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const frame = useRef(0);

  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  const onMove = (e: MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => setPointer({ x, y }));
  };

  const layer = (dx: number, dy = dx): CSSProperties => ({
    position: "absolute",
    inset: 0,
    transform: `translate3d(${pointer.x * dx}px, ${pointer.y * dy}px, 0)`,
  });

  return (
    <Box
      component="section"
      id="top"
      className="hero gridbg"
      onMouseMove={onMove}
      onMouseLeave={() => setPointer({ x: 0, y: 0 })}
      sx={{
        position: "relative",
        overflow: "hidden",
        // full screen: the app bar starts right below the fold
        minHeight: "100svh",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        p: `${space(16)} ${space(6)}`,
        [mq.down("lg")]: { p: 0 },
      }}
    >
      <HeroDecor par1={layer(DEPTH.ring)} par3={layer(DEPTH.accents)} />

      <Box
        className="hero-desktop"
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: vars.container,
          mx: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          textAlign: "right",
          gap: space(8),
        }}
      >
        <StoryScene parScene={layer(DEPTH.sceneX, DEPTH.sceneY)} />

        <Box
          component="h1"
          className="rise"
          sx={{ m: 0, maxWidth: "14ch", ...typeStyle("display"), color: vars.color.text.heading }}
        >
          {hero.title}
        </Box>

        <Box
          component="p"
          className="rise d1"
          sx={{ m: 0, maxWidth: vars.measure.sm, ...typeStyle("lead"), color: vars.color.text.secondary }}
        >
          {hero.subtitleBefore}
          <Box
            component="strong"
            className="hl"
            sx={{ fontWeight: vars.font.weight.medium, color: vars.color.steel["50"] }}
          >
            {hero.highlight}
          </Box>
          {hero.subtitleAfter}
        </Box>

        <Box
          className="rise d2"
          sx={{ display: "flex", flexWrap: "wrap", justifyContent: "flex-end", gap: space(3), mt: space(1) }}
        >
          <Button variant="outlined" href="#experience">
            View experience
          </Button>
          <Button variant="contained" href="#contact">
            Let&apos;s connect
          </Button>
        </Box>

        <Box
          component="ul"
          aria-label="Tech stack"
          sx={{
            listStyle: "none",
            m: `${space(6)} 0 0`,
            p: 0,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-end",
            gap: space(3),
            maxWidth: 640,
          }}
        >
          {techStack.map((tech, i) => (
            <Box
              component="li"
              key={tech.label}
              className={`logo l${i + 1}`}
              title={tech.label}
              sx={{
                width: 56,
                height: 56,
                borderRadius: vars.radius.lg,
                bgcolor: vars.color.surface["2"],
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={tech.src} alt={tech.label} width={26} height={26} />
            </Box>
          ))}
        </Box>
      </Box>

      <MobileHero />

      <Box
        className="cue hero-desktop"
        aria-hidden="true"
        sx={{
          position: "absolute",
          left: "50%",
          bottom: 28,
          width: 2,
          height: 18,
          borderRadius: vars.radius.xs,
          bgcolor: vars.color.steel["400"],
        }}
      />
    </Box>
  );
}
