import { useCallback, useEffect, useRef, useState } from "react";

const reducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

/**
 * Tracks which card of a horizontal scroller is snapped at the start and scrolls to a card on demand.
 * The last card counts as current once the scroller reaches its end (it can't snap to the start).
 */
export function useSnapScroller() {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef(0);
  const [index, setIndex] = useState(0);

  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  const onScroll = useCallback(() => {
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      const el = ref.current;
      const cards = el ? (Array.from(el.children) as HTMLElement[]) : [];
      if (!el || !cards.length) return;
      const start = cards[0].offsetLeft;
      let i = 0;
      if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 2) i = cards.length - 1;
      else {
        let best = Infinity;
        cards.forEach((c, n) => {
          const d = Math.abs(c.offsetLeft - start - el.scrollLeft);
          if (d < best) [best, i] = [d, n];
        });
      }
      setIndex(i);
    });
  }, []);

  const go = useCallback((i: number) => {
    const el = ref.current;
    const cards = el ? (Array.from(el.children) as HTMLElement[]) : [];
    const card = cards[i];
    if (!el || !card) return;
    setIndex(i);
    el.scrollTo({ left: card.offsetLeft - cards[0].offsetLeft, behavior: reducedMotion() ? "auto" : "smooth" });
  }, []);

  return { ref, index, onScroll, go };
}
