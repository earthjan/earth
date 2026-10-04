import type { CSSProperties } from "react";

type Props = { par1: CSSProperties; par3: CSSProperties };

/**
 * Hero background layers (decorative). Illustration colors use the steel palette tokens.
 * `decor-wide` ornaments are placed for the desktop composition and hidden at <= lg, where they would sit under the slides and CTAs.
 */
export default function HeroDecor({ par1, par3 }: Props) {
  return (
    <div aria-hidden="true" style={{ position: 'absolute', inset: '0', pointerEvents: 'none' }}>
  <div className="par" style={par1}>
   <svg className="spin" width="560" height="560" viewBox="0 0 560 560" fill="none" style={{ position: 'absolute', left: '-170px', top: '-60px' }}><circle cx="280" cy="280" r="250" stroke="#2E3A40" strokeWidth="1.5" strokeDasharray="3 12" /><circle cx="280" cy="280" r="200" stroke="#232A2E" strokeWidth="1" /></svg>
  </div>
  <div className="par" style={par3}>
   <svg className="drift2 decor-wide" width="64" height="58" viewBox="0 0 64 58" fill="none" style={{ position: 'absolute', left: '4%', top: '78%' }}><path d="M32 4L60 54H4z" stroke="#455A64" strokeWidth="1.5" strokeLinejoin="round" /></svg>
   <svg className="spinr decor-wide" width="20" height="20" viewBox="0 0 22 22" style={{ position: 'absolute', right: '6%', top: '12%' }}><path d="M11 2v18M2 11h18" stroke="#78909C" strokeWidth="2" strokeLinecap="round" /></svg>
   <svg className="spin2 decor-wide" width="16" height="16" viewBox="0 0 22 22" style={{ position: 'absolute', left: '46%', top: '88%' }}><path d="M11 2v18M2 11h18" stroke="#607D8B" strokeWidth="2" strokeLinecap="round" /></svg>
   <svg className="breathe decor-wide" width="96" height="96" viewBox="0 0 96 96" style={{ position: 'absolute', right: '3%', top: '64%' }}><g fill="#78909C"><circle cx="8" cy="8" r="2" /><circle cx="32" cy="8" r="2" /><circle cx="56" cy="8" r="2" /><circle cx="80" cy="8" r="2" /><circle cx="8" cy="32" r="2" /><circle cx="32" cy="32" r="2" /><circle cx="56" cy="32" r="2" /><circle cx="80" cy="32" r="2" /><circle cx="8" cy="56" r="2" /><circle cx="32" cy="56" r="2" /><circle cx="56" cy="56" r="2" /><circle cx="80" cy="56" r="2" /><circle cx="8" cy="80" r="2" /><circle cx="32" cy="80" r="2" /><circle cx="56" cy="80" r="2" /><circle cx="80" cy="80" r="2" /></g></svg>
  </div>
  <svg width="100%" height="120" viewBox="0 0 1200 120" preserveAspectRatio="none" fill="none" style={{ position: 'absolute', left: '0', bottom: '48px' }}><path className="wave" d="M0 60 C 100 10, 200 10, 300 60 S 500 110, 600 60 S 800 10, 900 60 S 1100 110, 1200 60" stroke="#2E3A40" strokeWidth="1.5" strokeDasharray="120 120" /></svg>
 </div>
  );
}
