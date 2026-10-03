import { useEffect, useRef, useState } from "react";
import { Box, Button } from "@mui/material";

import { CheckIcon, Chip, ExternalIcon, MetaLine, Section, SectionTitle } from "../ui/primitives";
import { projects } from "../../data/projects";
import type { Project } from "../../data/projects";
import { space, tokens, typeStyle, vars } from "../../theme/tokens";

const decor = (
  <div aria-hidden="true" style={{ position: "absolute", left: "-60px", top: "120px", pointerEvents: "none" }}>
    <svg className="drift" width="120" height="120" viewBox="0 0 120 120" fill="none">
      <rect x="20" y="20" width="80" height="80" stroke="#2E3A40" strokeWidth="1.5" />
      <rect x="40" y="40" width="40" height="40" stroke="#37474F" strokeWidth="1.5" />
    </svg>
  </div>
);

const media = { position: "relative", aspectRatio: "12 / 7", overflow: "hidden" } as const;
const imgStyle = { display: "block", width: "100%", height: "100%", objectFit: "cover" } as const;

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

function Carousel({ project }: { project: Project }) {
  const slides = project.images;
  const [index, setIndex] = useState(0);
  const timer = useRef<number>();

  useEffect(() => {
    if (slides.length < 2 || prefersReducedMotion()) return;
    timer.current = window.setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      tokens.motion.carouselInterval
    );
    return () => window.clearInterval(timer.current);
  }, [slides.length]);

  const go = (i: number) => {
    window.clearInterval(timer.current);
    setIndex((i + slides.length) % slides.length);
  };

  const arrow = (side: "left" | "right") => ({
    position: "absolute",
    [side]: 12,
    top: "50%",
    mt: "-22px",
    width: 44,
    height: 44,
    // outlined + lifted so the control stays visible over dark screenshots
    border: `1px solid ${vars.color.outline.strong}`,
    boxShadow: vars.elevation["2"],
    borderRadius: "50%",
    bgcolor: vars.color.surface.scrim,
    color: vars.color.steel["50"],
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  });

  return (
    <>
      <Box
        aria-roledescription="carousel"
        aria-label={`${project.title} screenshots`}
        sx={{ ...media, bgcolor: vars.color.steel["900"] }}
      >
        <Box
          sx={{
            display: "flex",
            height: "100%",
            transition: `transform ${vars.duration.long} ${vars.ease.standard}`,
            transform: `translateX(-${index * 100}%)`,
          }}
        >
          {slides.map((s, i) => (
            <Box
              component="figure"
              key={s.src}
              aria-hidden={i !== index}
              sx={{ m: 0, flex: "0 0 100%", height: "100%", position: "relative" }}
            >
              <img src={s.src} alt={s.alt} style={imgStyle} loading={i === 0 ? "eager" : "lazy"} />
              <Box
                component="figcaption"
                sx={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: 0,
                  p: `${space(8)} ${space(5)} ${space(4)}`,
                  background: `linear-gradient(transparent, ${vars.color.surface.scrimStrong})`,
                  fontSize: vars.font.size.sm,
                  color: vars.color.text.primary,
                }}
              >
                {s.alt}
              </Box>
            </Box>
          ))}
        </Box>
        {project.badge && <Badge label={project.badge} />}
        {slides.length > 1 && (
          <>
            <Box component="button" type="button" className="icn" aria-label="Previous screenshot" onClick={() => go(index - 1)} sx={arrow("left")}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M15 18l-6-6 6-6" /></svg>
            </Box>
            <Box component="button" type="button" className="icn" aria-label="Next screenshot" onClick={() => go(index + 1)} sx={arrow("right")}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M9 18l6-6-6-6" /></svg>
            </Box>
          </>
        )}
      </Box>
      {slides.length > 1 && (
        <Box sx={{ display: "flex", justifyContent: "center", gap: space(1), pt: space(2) }}>
          {slides.map((s, i) => (
            <Box
              component="button"
              type="button"
              key={s.src}
              onClick={() => go(i)}
              aria-label={`Show screenshot ${i + 1}: ${s.alt}`}
              aria-current={i === index}
              sx={{ width: 32, height: 32, border: 0, bgcolor: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", p: 0 }}
            >
              <Box
                component="span"
                sx={{
                  display: "block",
                  height: 8,
                  borderRadius: "4px",
                  transition: `width ${vars.duration.medium}, background-color ${vars.duration.medium}`,
                  width: i === index ? 24 : 8,
                  bgcolor: i === index ? vars.color.accent.main : vars.color.outline.strong,
                }}
              />
            </Box>
          ))}
        </Box>
      )}
    </>
  );
}

function Badge({ label }: { label: string }) {
  return (
    <Box
      component="span"
      sx={{
        position: "absolute",
        top: 16,
        left: 16,
        zIndex: 1,
        display: "inline-flex",
        alignItems: "center",
        gap: space(2),
        p: `${space(2)} ${space(4)} ${space(2)} ${space(3)}`,
        borderRadius: vars.radius.pill,
        bgcolor: vars.color.accent.main,
        color: vars.color.text.onAccent,
        fontSize: vars.font.size.sm,
        fontWeight: vars.font.weight.bold,
        letterSpacing: vars.font.tracking.wide,
        boxShadow: vars.elevation["4"],
      }}
    >
      <CheckIcon />
      {label}
    </Box>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const carousel = project.images.length > 1;
  return (
    <Box
      component="article"
      className="reveal card"
      sx={{
        bgcolor: vars.color.surface["2"],
        borderRadius: vars.radius.md,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        boxShadow: vars.elevation["1"],
      }}
    >
      {carousel ? (
        <Carousel project={project} />
      ) : (
        <Box component="figure" sx={{ ...media, m: 0, bgcolor: vars.color.surface["3"] }}>
          <img src={project.images[0].src} alt={project.images[0].alt} style={imgStyle} loading="lazy" />
          {project.badge && <Badge label={project.badge} />}
        </Box>
      )}
      <Box
        sx={{
          p: carousel ? `${space(3)} ${space(8)} ${space(8)}` : space(8),
          display: "flex",
          flexDirection: "column",
          gap: space(4),
          flex: 1,
        }}
      >
        {project.eyebrow && (
          <MetaLine parts={project.eyebrow} sx={{ ...typeStyle("overline"), fontWeight: vars.font.weight.regular, color: vars.color.steel["300"] }} />
        )}
        <Box component="h3" sx={{ m: 0, ...typeStyle("h4"), color: vars.color.text.heading }}>
          {project.title}
        </Box>
        <Box component="p" sx={{ m: 0, maxWidth: vars.measure.md, ...typeStyle("body1"), color: vars.color.text.secondary }}>
          {project.description}
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: space(2) }}>
          {project.chips.map((c) =>
            Array.isArray(c) ? <Chip key={c.join()} size="sm" parts={c} /> : <Chip key={c} size="sm">{c}</Chip>
          )}
        </Box>
        {project.link && (
          <Button
            variant="text"
            size="medium"
            href={project.link.href}
            target="_blank"
            rel="noopener noreferrer"
            endIcon={<ExternalIcon />}
            sx={{ mt: "auto", alignSelf: "flex-start", minHeight: 44, px: space(4), ml: space(4, true) }}
          >
            {project.link.label}
          </Button>
        )}
      </Box>
    </Box>
  );
}

export default function Projects() {
  return (
    <Section id="projects" decor={decor}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: space(12) }}>
        <SectionTitle>Featured projects</SectionTitle>
        <Box sx={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))", gap: space(6) }}>
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </Box>
      </Box>
    </Section>
  );
}
