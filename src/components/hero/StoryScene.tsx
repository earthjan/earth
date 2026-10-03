import type { CSSProperties } from "react";

import "./StoryScene.css";

type Props = { parScene: CSSProperties };

/**
 * Animated story (decorative, aria-hidden): Lead → Architect → Ship on a 15s loop.
 * Markup and keyframes are ported verbatim from the design canvas; do not tweak timings here,
 * change them in the design and re-port.
 */
export default function StoryScene({ parScene }: Props) {
  return (
    <div className="scene par" aria-hidden="true" style={{ ...parScene, textAlign: 'left' }}>
   <div style={{ position: 'absolute', left: '0', top: '0', width: '460px', height: '560px' }}>
    <div style={{ position: 'absolute', left: '0', top: '-44px', width: '460px', display: 'flex', gap: 'var(--space-3)' }}>
     <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
      <span className="lbl1" style={{ fontFamily: 'var(--font-text)', fontSize: 'var(--font-size-xs)', letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase', color: 'var(--color-steel-400)' }}>Lead</span>
      <span style={{ display: 'block', height: '3px', borderRadius: 'var(--radius-xs)', background: 'var(--color-outline-subtle)', overflow: 'hidden' }}><span className="seg1" style={{ display: 'block', height: '100%', background: 'var(--color-accent-main)', transformOrigin: 'left' }}></span></span>
     </div>
     <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
      <span className="lbl2" style={{ fontFamily: 'var(--font-text)', fontSize: 'var(--font-size-xs)', letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase', color: 'var(--color-steel-400)' }}>Architect</span>
      <span style={{ display: 'block', height: '3px', borderRadius: 'var(--radius-xs)', background: 'var(--color-outline-subtle)', overflow: 'hidden' }}><span className="seg2" style={{ display: 'block', height: '100%', background: 'var(--color-accent-main)', transformOrigin: 'left' }}></span></span>
     </div>
     <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
      <span className="lbl3" style={{ fontFamily: 'var(--font-text)', fontSize: 'var(--font-size-xs)', letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase', color: 'var(--color-steel-400)' }}>Ship</span>
      <span style={{ display: 'block', height: '3px', borderRadius: 'var(--radius-xs)', background: 'var(--color-outline-subtle)', overflow: 'hidden' }}><span className="seg3" style={{ display: 'block', height: '100%', background: 'var(--color-accent-main)', transformOrigin: 'left' }}></span></span>
     </div>
    </div>

    <div className="actA" style={{ position: 'absolute', inset: '0' }}>
     <svg width="460" height="400" viewBox="0 0 460 400" fill="none" style={{ position: 'absolute', left: '0', top: '0' }}>
      <path className="tline" d="M230 190L70 90" stroke="#546E7A" strokeWidth="1.5" />
      <path className="tline" d="M230 190L60 262" stroke="#546E7A" strokeWidth="1.5" style={{ animationDelay: '.15s' }} />
      <path className="tline" d="M230 190L390 90" stroke="#546E7A" strokeWidth="1.5" style={{ animationDelay: '.3s' }} />
      <path className="tline" d="M230 190L400 262" stroke="#546E7A" strokeWidth="1.5" style={{ animationDelay: '.45s' }} />
     </svg>
     <div className="mate" style={{ position: 'absolute', left: '44px', top: '64px', width: '52px', height: '52px', animationDelay: '0s' }}><svg width="52" height="52" viewBox="0 0 52 52" fill="none"><circle cx="26" cy="26" r="24" fill="#1E1E1E" stroke="#455A64" strokeWidth="1.5" /><circle cx="26" cy="21" r="8" fill="#78909C" /><path d="M12 42c2-8 7-11 14-11s12 3 14 11" fill="#546E7A" /></svg></div>
     <div className="mate" style={{ position: 'absolute', left: '34px', top: '236px', width: '52px', height: '52px', animationDelay: '0.15s' }}><svg width="52" height="52" viewBox="0 0 52 52" fill="none"><circle cx="26" cy="26" r="24" fill="#1E1E1E" stroke="#455A64" strokeWidth="1.5" /><circle cx="26" cy="21" r="8" fill="#78909C" /><path d="M12 42c2-8 7-11 14-11s12 3 14 11" fill="#546E7A" /></svg></div>
     <div className="mate" style={{ position: 'absolute', left: '364px', top: '64px', width: '52px', height: '52px', animationDelay: '0.3s' }}><svg width="52" height="52" viewBox="0 0 52 52" fill="none"><circle cx="26" cy="26" r="24" fill="#1E1E1E" stroke="#455A64" strokeWidth="1.5" /><circle cx="26" cy="21" r="8" fill="#78909C" /><path d="M12 42c2-8 7-11 14-11s12 3 14 11" fill="#546E7A" /></svg></div>
     <div className="mate" style={{ position: 'absolute', left: '374px', top: '236px', width: '52px', height: '52px', animationDelay: '0.45s' }}><svg width="52" height="52" viewBox="0 0 52 52" fill="none"><circle cx="26" cy="26" r="24" fill="#1E1E1E" stroke="#455A64" strokeWidth="1.5" /><circle cx="26" cy="21" r="8" fill="#78909C" /><path d="M12 42c2-8 7-11 14-11s12 3 14 11" fill="#546E7A" /></svg></div>
     <div style={{ position: 'absolute', left: '170px', top: '130px', width: '120px', height: '120px' }}>
      <span className="ping" style={{ position: 'absolute', inset: '12px', borderRadius: '50%', background: 'var(--color-accent-state-fill)' }}></span>
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" style={{ display: 'block', position: 'relative' }}>
       <defs><clipPath id="avLead"><circle cx="60" cy="60" r="57" /></clipPath></defs>
       <circle cx="60" cy="60" r="57" fill="#232A2E" stroke="#546E7A" strokeWidth="2" />
       <g clipPath="url(#avLead)">
        <path d="M18 122c0-24 18-38 42-38s42 14 42 38z" fill="#455A64" />
        <path d="M50 84l10 12 10-12" stroke="#90A4AE" strokeWidth="3" strokeLinejoin="round" />
        <rect x="52" y="70" width="16" height="16" rx="5" fill="#90A4AE" />
        <circle cx="38" cy="58" r="4.5" fill="#90A4AE" />
        <circle cx="82" cy="58" r="4.5" fill="#90A4AE" />
        <circle cx="60" cy="56" r="22" fill="#B0BEC5" />
        <path d="M37 55c-3-19 8-30 23-30 16 0 26 10 23 29-2-6-6-10-11-12-7 4-18 6-29 5-3 2-5 5-6 8z" fill="#263238" />
        <path d="M48 31c4-4 12-5 18-2-5 0-10 2-13 5z" fill="#37474F" />
        <circle cx="51" cy="58" r="2" fill="#263238" />
        <circle cx="69" cy="58" r="2" fill="#263238" />
        <rect x="42" y="51" width="17" height="13" rx="4" fill="rgba(207,216,220,.18)" stroke="#161616" strokeWidth="2.5" />
        <rect x="61" y="51" width="17" height="13" rx="4" fill="rgba(207,216,220,.18)" stroke="#161616" strokeWidth="2.5" />
        <path d="M59 56c.7-1.2 1.3-1.2 2 0M42 55h-4M78 55h4" stroke="#161616" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M45 54l3-1.5M64 54l3-1.5" stroke="#ECEFF1" strokeWidth="1.2" strokeLinecap="round" opacity=".7" />
        <path d="M54 69c3 3 9 3 12 0" stroke="#546E7A" strokeWidth="2" strokeLinecap="round" />
       </g>
      </svg>
      <div className="nudge" style={{ position: 'absolute', left: '100px', top: '96px', display: 'flex', alignItems: 'flex-start', gap: '1px', zIndex: '2' }}>
       <svg width="18" height="20" viewBox="0 0 18 20" fill="none"><path d="M2 2l13 7-6 1.6L5.8 17z" fill="#B0BEC5" stroke="#121212" strokeWidth="1.5" strokeLinejoin="round" /></svg>
       <span style={{ marginTop: 'var(--space-3)', padding: 'var(--space-1) var(--space-2)', borderRadius: 'var(--radius-sm) var(--radius-lg) var(--radius-lg) var(--radius-lg)', background: 'var(--color-accent-main)', color: 'var(--color-text-on-accent)', fontFamily: 'var(--font-display)', fontSize: 'var(--font-size-xs)', fontWeight: 'var(--font-weight-bold)', letterSpacing: 'var(--tracking-wide)', boxShadow: 'var(--elevation-2)' }}>Earth</span>
      </div>
     </div>
     <div style={{ position: 'absolute', left: '0', top: '404px', width: '460px', height: '106px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 'var(--space-3)', height: '100%' }}>
       <div style={{ background: 'var(--color-surface-1)', border: '1px solid var(--color-outline-subtle)', borderRadius: 'var(--radius-md)', padding: 'var(--space-2) var(--space-3)', fontFamily: 'var(--font-text)', fontSize: 'var(--font-size-xs)', letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase', color: 'var(--color-steel-400)' }}>To do</div>
       <div style={{ background: 'var(--color-surface-1)', border: '1px solid var(--color-outline-subtle)', borderRadius: 'var(--radius-md)', padding: 'var(--space-2) var(--space-3)', fontFamily: 'var(--font-text)', fontSize: 'var(--font-size-xs)', letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase', color: 'var(--color-steel-400)' }}>Doing</div>
       <div style={{ background: 'var(--color-surface-1)', border: '1px solid var(--color-outline-subtle)', borderRadius: 'var(--radius-md)', padding: 'var(--space-2) var(--space-3)', fontFamily: 'var(--font-text)', fontSize: 'var(--font-size-xs)', letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase', color: 'var(--color-steel-400)' }}>Done</div>
      </div>
      <span className="cardA" style={{ position: 'absolute', left: '10px', top: '32px', width: '126px', height: '14px', borderRadius: 'var(--radius-sm)', background: 'var(--color-steel-600)' }}></span>
      <span className="cardB" style={{ position: 'absolute', left: '10px', top: '54px', width: '126px', height: '14px', borderRadius: 'var(--radius-sm)', background: 'var(--color-steel-700)' }}></span>
      <span className="cardC" style={{ position: 'absolute', left: '10px', top: '76px', width: '126px', height: '14px', borderRadius: 'var(--radius-sm)', background: 'var(--color-steel-800)' }}></span>
     </div>
     <div style={{ position: 'absolute', left: '0', top: '528px', fontFamily: 'var(--font-text)', fontSize: 'var(--font-size-xs)', letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase', color: 'var(--color-steel-300)', display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}><span>Lead</span><span aria-hidden="true" style={{ alignSelf: 'stretch', flex: '0 0 1px', width: '1px', margin: '0 var(--space-3)', background: 'currentColor', opacity: '.35' }}></span><span>5-person frontend team</span><span aria-hidden="true" style={{ alignSelf: 'stretch', flex: '0 0 1px', width: '1px', margin: '0 var(--space-3)', background: 'currentColor', opacity: '.35' }}></span><span>4 features shipped</span></div>
    </div>

    <div className="actC" style={{ position: 'absolute', inset: '0' }}>
     <div style={{ position: 'absolute', left: '0', top: '20px', width: '80px', height: '80px' }}>
      <svg width="80" height="80" viewBox="0 0 120 120" fill="none" style={{ display: 'block', position: 'relative' }}>
       <defs><clipPath id="avArch"><circle cx="60" cy="60" r="57" /></clipPath></defs>
       <circle cx="60" cy="60" r="57" fill="#232A2E" stroke="#546E7A" strokeWidth="2" />
       <g clipPath="url(#avArch)">
        <path d="M18 122c0-24 18-38 42-38s42 14 42 38z" fill="#455A64" />
        <path d="M50 84l10 12 10-12" stroke="#90A4AE" strokeWidth="3" strokeLinejoin="round" />
        <rect x="52" y="70" width="16" height="16" rx="5" fill="#90A4AE" />
        <circle cx="38" cy="58" r="4.5" fill="#90A4AE" />
        <circle cx="82" cy="58" r="4.5" fill="#90A4AE" />
        <circle cx="60" cy="56" r="22" fill="#B0BEC5" />
        <path d="M37 55c-3-19 8-30 23-30 16 0 26 10 23 29-2-6-6-10-11-12-7 4-18 6-29 5-3 2-5 5-6 8z" fill="#263238" />
        <path d="M48 31c4-4 12-5 18-2-5 0-10 2-13 5z" fill="#37474F" />
        <circle cx="51" cy="58" r="2" fill="#263238" />
        <circle cx="69" cy="58" r="2" fill="#263238" />
        <rect x="42" y="51" width="17" height="13" rx="4" fill="rgba(207,216,220,.18)" stroke="#161616" strokeWidth="2.5" />
        <rect x="61" y="51" width="17" height="13" rx="4" fill="rgba(207,216,220,.18)" stroke="#161616" strokeWidth="2.5" />
        <path d="M59 56c.7-1.2 1.3-1.2 2 0M42 55h-4M78 55h4" stroke="#161616" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M45 54l3-1.5M64 54l3-1.5" stroke="#ECEFF1" strokeWidth="1.2" strokeLinecap="round" opacity=".7" />
        <path d="M54 69c3 3 9 3 12 0" stroke="#546E7A" strokeWidth="2" strokeLinecap="round" />
       </g>
      </svg>
     </div>
     <svg width="460" height="400" viewBox="0 0 460 400" fill="none" style={{ position: 'absolute', left: '0', top: '0' }}>
      <path className="c1" d="M230 196V250" stroke="#607D8B" strokeWidth="1.5" />
      <path className="c2" d="M230 306V338H65V370M230 338V370M230 338H395V370" stroke="#607D8B" strokeWidth="1.5" />
     </svg>
     <div className="b1" style={{ position: 'absolute', left: '140px', top: '140px', width: '180px', height: '56px', boxSizing: 'border-box', padding: 'var(--space-2) var(--space-4)', borderRadius: 'var(--radius-md)', background: 'var(--color-surface-2)', border: '1px solid var(--color-steel-600)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 'var(--space-1)' }}>
      <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--font-size-md)', fontWeight: 'var(--font-weight-bold)', color: 'var(--color-steel-50)' }}>React client</span>
      <span style={{ fontFamily: 'var(--font-text)', fontSize: 'var(--font-size-xs)', letterSpacing: 'var(--tracking-wide)', color: 'var(--color-steel-300)', display: 'inline-flex', alignItems: 'center', flexWrap: 'wrap' }}><span>UI</span><span aria-hidden="true" style={{ alignSelf: 'stretch', flex: '0 0 1px', width: '1px', margin: '0 var(--space-3)', background: 'currentColor', opacity: '.35' }}></span><span>state</span><span aria-hidden="true" style={{ alignSelf: 'stretch', flex: '0 0 1px', width: '1px', margin: '0 var(--space-3)', background: 'currentColor', opacity: '.35' }}></span><span>routing</span></span>
     </div>
     <div className="b2" style={{ position: 'absolute', left: '120px', top: '250px', width: '220px', height: '56px', boxSizing: 'border-box', padding: 'var(--space-2) var(--space-4)', borderRadius: 'var(--radius-md)', background: 'var(--color-surface-2)', border: '1px solid var(--color-steel-600)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 'var(--space-1)' }}>
      <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--font-size-md)', fontWeight: 'var(--font-weight-bold)', color: 'var(--color-steel-50)' }}>API contract</span>
      <span style={{ fontFamily: 'var(--font-text)', fontSize: 'var(--font-size-xs)', letterSpacing: 'var(--tracking-wide)', color: 'var(--color-steel-300)' }}>Swagger / OpenAPI</span>
     </div>
     <div className="b3" style={{ position: 'absolute', left: '0px', top: '370px', width: '130px', height: '56px', boxSizing: 'border-box', padding: 'var(--space-2) var(--space-4)', borderRadius: 'var(--radius-md)', background: 'var(--color-surface-2)', border: '1px solid var(--color-steel-600)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 'var(--space-1)' }}>
      <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--font-size-md)', fontWeight: 'var(--font-weight-bold)', color: 'var(--color-steel-50)' }}>Auth</span>
      <span style={{ fontFamily: 'var(--font-text)', fontSize: 'var(--font-size-xs)', letterSpacing: 'var(--tracking-wide)', color: 'var(--color-steel-300)' }}>service</span>
     </div>
     <div className="b4" style={{ position: 'absolute', left: '165px', top: '370px', width: '130px', height: '56px', boxSizing: 'border-box', padding: 'var(--space-2) var(--space-4)', borderRadius: 'var(--radius-md)', background: 'var(--color-surface-2)', border: '1px solid var(--color-steel-600)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 'var(--space-1)' }}>
      <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--font-size-md)', fontWeight: 'var(--font-weight-bold)', color: 'var(--color-steel-50)' }}>Devices</span>
      <span style={{ fontFamily: 'var(--font-text)', fontSize: 'var(--font-size-xs)', letterSpacing: 'var(--tracking-wide)', color: 'var(--color-steel-300)' }}>service</span>
     </div>
     <div className="b5" style={{ position: 'absolute', left: '330px', top: '370px', width: '130px', height: '56px', boxSizing: 'border-box', padding: 'var(--space-2) var(--space-4)', borderRadius: 'var(--radius-md)', background: 'var(--color-surface-2)', border: '1px solid var(--color-steel-600)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 'var(--space-1)' }}>
      <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--font-size-md)', fontWeight: 'var(--font-weight-bold)', color: 'var(--color-steel-50)' }}>Data</span>
      <span style={{ fontFamily: 'var(--font-text)', fontSize: 'var(--font-size-xs)', letterSpacing: 'var(--tracking-wide)', color: 'var(--color-steel-300)' }}>store</span>
     </div>
     <div className="archCur" style={{ position: 'absolute', left: '0px', top: '0px', display: 'flex', alignItems: 'flex-start', gap: '1px', zIndex: '2' }}>
       <svg width="18" height="20" viewBox="0 0 18 20" fill="none"><path d="M2 2l13 7-6 1.6L5.8 17z" fill="#B0BEC5" stroke="#121212" strokeWidth="1.5" strokeLinejoin="round" /></svg>
       <span style={{ marginTop: 'var(--space-3)', padding: 'var(--space-1) var(--space-2)', borderRadius: 'var(--radius-sm) var(--radius-lg) var(--radius-lg) var(--radius-lg)', background: 'var(--color-accent-main)', color: 'var(--color-text-on-accent)', fontFamily: 'var(--font-display)', fontSize: 'var(--font-size-xs)', fontWeight: 'var(--font-weight-bold)', letterSpacing: 'var(--tracking-wide)', boxShadow: 'var(--elevation-2)' }}>Earth</span>
      </div>
     <div style={{ position: 'absolute', left: '0', top: '528px', fontFamily: 'var(--font-text)', fontSize: 'var(--font-size-xs)', letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase', color: 'var(--color-steel-300)', display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}><span>Architect</span><span aria-hidden="true" style={{ alignSelf: 'stretch', flex: '0 0 1px', width: '1px', margin: '0 var(--space-3)', background: 'currentColor', opacity: '.35' }}></span><span>software design &amp; API contracts</span></div>
    </div>

    <div className="actB" style={{ position: 'absolute', inset: '0' }}>
     <div className="walk" style={{ position: 'absolute', left: '10px', top: '92px', width: '80px', height: '80px' }}>
      <div className="bob"><svg width="80" height="80" viewBox="0 0 120 120" fill="none" style={{ display: 'block', position: 'relative' }}>
       <defs><clipPath id="avShip"><circle cx="60" cy="60" r="57" /></clipPath></defs>
       <circle cx="60" cy="60" r="57" fill="#232A2E" stroke="#546E7A" strokeWidth="2" />
       <g clipPath="url(#avShip)">
        <path d="M18 122c0-24 18-38 42-38s42 14 42 38z" fill="#455A64" />
        <path d="M50 84l10 12 10-12" stroke="#90A4AE" strokeWidth="3" strokeLinejoin="round" />
        <rect x="52" y="70" width="16" height="16" rx="5" fill="#90A4AE" />
        <circle cx="38" cy="58" r="4.5" fill="#90A4AE" />
        <circle cx="82" cy="58" r="4.5" fill="#90A4AE" />
        <circle cx="60" cy="56" r="22" fill="#B0BEC5" />
        <path d="M37 55c-3-19 8-30 23-30 16 0 26 10 23 29-2-6-6-10-11-12-7 4-18 6-29 5-3 2-5 5-6 8z" fill="#263238" />
        <path d="M48 31c4-4 12-5 18-2-5 0-10 2-13 5z" fill="#37474F" />
        <circle cx="51" cy="58" r="2" fill="#263238" />
        <circle cx="69" cy="58" r="2" fill="#263238" />
        <rect x="42" y="51" width="17" height="13" rx="4" fill="rgba(207,216,220,.18)" stroke="#161616" strokeWidth="2.5" />
        <rect x="61" y="51" width="17" height="13" rx="4" fill="rgba(207,216,220,.18)" stroke="#161616" strokeWidth="2.5" />
        <path d="M59 56c.7-1.2 1.3-1.2 2 0M42 55h-4M78 55h4" stroke="#161616" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M45 54l3-1.5M64 54l3-1.5" stroke="#ECEFF1" strokeWidth="1.2" strokeLinecap="round" opacity=".7" />
        <path d="M54 69c3 3 9 3 12 0" stroke="#546E7A" strokeWidth="2" strokeLinecap="round" />
       </g>
      </svg></div>
      <div className="" style={{ position: 'absolute', left: '64px', top: '64px', display: 'flex', alignItems: 'flex-start', gap: '1px', zIndex: '2' }}>
       <svg width="18" height="20" viewBox="0 0 18 20" fill="none"><path d="M2 2l13 7-6 1.6L5.8 17z" fill="#B0BEC5" stroke="#121212" strokeWidth="1.5" strokeLinejoin="round" /></svg>
       <span style={{ marginTop: 'var(--space-3)', padding: 'var(--space-1) var(--space-2)', borderRadius: 'var(--radius-sm) var(--radius-lg) var(--radius-lg) var(--radius-lg)', background: 'var(--color-accent-main)', color: 'var(--color-text-on-accent)', fontFamily: 'var(--font-display)', fontSize: 'var(--font-size-xs)', fontWeight: 'var(--font-weight-bold)', letterSpacing: 'var(--tracking-wide)', boxShadow: 'var(--elevation-2)' }}>Earth</span>
      </div>
     </div>
     <div style={{ position: 'absolute', left: '0', top: '200px', display: 'flex', gap: 'var(--space-5)' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-3)' }}>
       <div className="t1" style={{ position: 'relative', width: '100px', height: '100px', boxSizing: 'border-box', borderRadius: 'var(--radius-md)', background: 'var(--color-surface-2)', border: '1px solid var(--color-outline-default)', overflow: 'hidden' }}><div className="frame" style={{ position: 'absolute', inset: '12px', border: '1px dashed var(--color-steel-500)', borderRadius: 'var(--radius-sm)', padding: 'var(--space-2)', display: 'flex', flexDirection: 'column', gap: 'var(--space-1)', boxSizing: 'border-box' }}><span style={{ height: '6px', borderRadius: 'var(--radius-xs)', background: 'var(--color-steel-600)' }}></span><div style={{ display: 'flex', gap: 'var(--space-1)', flex: '1' }}><span style={{ flex: '1', borderRadius: 'var(--radius-xs)', background: 'var(--color-steel-800)' }}></span><div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}><span style={{ height: '5px', borderRadius: 'var(--radius-xs)', background: 'var(--color-steel-700)' }}></span><span style={{ height: '5px', width: '70%', borderRadius: 'var(--radius-xs)', background: 'var(--color-steel-700)' }}></span><span style={{ height: '9px', width: '60%', marginTop: 'auto', borderRadius: 'var(--radius-xs)', background: 'var(--color-steel-300)' }}></span></div></div></div></div>
       <span style={{ fontFamily: 'var(--font-text)', fontSize: 'var(--font-size-xs)', letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>Design</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-3)' }}>
       <div className="t2" style={{ position: 'relative', width: '100px', height: '100px', boxSizing: 'border-box', borderRadius: 'var(--radius-md)', background: 'var(--color-surface-2)', border: '1px solid var(--color-outline-default)', overflow: 'hidden' }}><div style={{ position: 'absolute', inset: '16px 12px', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}><span className="code" style={{ display: 'block', height: '6px', width: '56px', marginLeft: '0px', borderRadius: 'var(--radius-sm)', background: 'var(--color-steel-400)', animationDelay: '0s' }}></span><span className="code" style={{ display: 'block', height: '6px', width: '44px', marginLeft: 'var(--space-3)', borderRadius: 'var(--radius-sm)', background: 'var(--color-steel-600)', animationDelay: '0.3s' }}></span><span className="code" style={{ display: 'block', height: '6px', width: '52px', marginLeft: 'var(--space-3)', borderRadius: 'var(--radius-sm)', background: 'var(--color-steel-300)', animationDelay: '0.6s' }}></span><span className="code" style={{ display: 'block', height: '6px', width: '30px', marginLeft: 'var(--space-5)', borderRadius: 'var(--radius-sm)', background: 'var(--color-steel-700)', animationDelay: '0.9s' }}></span><span className="code" style={{ display: 'block', height: '6px', width: '36px', marginLeft: '0px', borderRadius: 'var(--radius-sm)', background: 'var(--color-steel-400)', animationDelay: '1.2s' }}></span></div></div>
       <span style={{ fontFamily: 'var(--font-text)', fontSize: 'var(--font-size-xs)', letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>Build</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-3)' }}>
       <div className="t3" style={{ position: 'relative', width: '100px', height: '100px', boxSizing: 'border-box', borderRadius: 'var(--radius-md)', background: 'var(--color-surface-2)', border: '1px solid var(--color-outline-default)', overflow: 'hidden' }}><div style={{ position: 'absolute', inset: '18px 14px', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}><div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}><span className="chk" style={{ width: '14px', height: '14px', borderRadius: '50%', background: 'var(--color-accent-main)', display: 'flex', alignItems: 'center', justifyContent: 'center', animationDelay: '0s' }}><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#121212" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg></span><span style={{ width: '46px', height: '6px', borderRadius: 'var(--radius-sm)', background: 'var(--color-steel-800)' }}></span></div><div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}><span className="chk" style={{ width: '14px', height: '14px', borderRadius: '50%', background: 'var(--color-accent-main)', display: 'flex', alignItems: 'center', justifyContent: 'center', animationDelay: '0.4s' }}><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#121212" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg></span><span style={{ width: '46px', height: '6px', borderRadius: 'var(--radius-sm)', background: 'var(--color-steel-800)' }}></span></div><div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}><span className="chk" style={{ width: '14px', height: '14px', borderRadius: '50%', background: 'var(--color-accent-main)', display: 'flex', alignItems: 'center', justifyContent: 'center', animationDelay: '0.8s' }}><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#121212" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg></span><span style={{ width: '46px', height: '6px', borderRadius: 'var(--radius-sm)', background: 'var(--color-steel-800)' }}></span></div></div></div>
       <span style={{ fontFamily: 'var(--font-text)', fontSize: 'var(--font-size-xs)', letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>Test</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-3)' }}>
       <div className="t4" style={{ position: 'relative', width: '100px', height: '100px', boxSizing: 'border-box', borderRadius: 'var(--radius-md)', background: 'var(--color-surface-2)', border: '1px solid var(--color-outline-default)', overflow: 'hidden' }}><div className="rocket" style={{ position: 'absolute', left: '30px', top: '18px' }}><svg width="40" height="56" viewBox="0 0 40 56" fill="none" stroke="#CFD8DC" strokeWidth="2" strokeLinejoin="round"><path d="M20 3c8 7 11 16 11 26v9H9v-9C9 19 12 10 20 3z" fill="#37474F" /><circle cx="20" cy="22" r="4" fill="#121212" /><path d="M9 32l-6 8v4l6-3M31 32l6 8v4l-6-3" /><path className="flame" d="M15 41c1 6 3 9 5 12 2-3 4-6 5-12" stroke="#90A4AE" /></svg></div></div>
       <span style={{ fontFamily: 'var(--font-text)', fontSize: 'var(--font-size-xs)', letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>Release</span>
      </div>
     </div>
     <div style={{ position: 'absolute', left: '50px', top: '346px', width: '360px', height: '2px', background: 'var(--color-outline-subtle)' }}><span className="track" style={{ display: 'block', height: '100%', background: 'var(--color-accent-main)' }}></span></div>
     <div className="chipIn" style={{ position: 'absolute', left: '330px', top: '368px', display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)', padding: 'var(--space-2) var(--space-3)', borderRadius: 'var(--radius-pill)', background: 'var(--color-accent-main)', color: 'var(--color-text-on-accent)', fontSize: 'var(--font-size-xs)', fontWeight: 'var(--font-weight-bold)', whiteSpace: 'nowrap' }}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>v1.0 shipped</div>
     <div style={{ position: 'absolute', left: '0', top: '528px', fontFamily: 'var(--font-text)', fontSize: 'var(--font-size-xs)', letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase', color: 'var(--color-steel-300)', display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}><span>Ship</span><span aria-hidden="true" style={{ alignSelf: 'stretch', flex: '0 0 1px', width: '1px', margin: '0 var(--space-3)', background: 'currentColor', opacity: '.35' }}></span><span>design → release, end to end</span></div>
    </div>

   </div>
  </div>
  );
}
