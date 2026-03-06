/**
 * Theme configuration — reads VITE_THEME env variable.
 * Values: "red" (default) | "teal"
 */

const THEME = import.meta.env.VITE_THEME || 'red';

/* ── Palettes ─────────────────────────────── */
const palettes = {
    red: {
        primary: '#980000',
        primaryDark: '#7a0000',
        backgroundDark: '#980000',
        cta: '#cc0000',
        ctaHover: '#b80000',
        scrollbarTrack: '#7a0000',
        scrollbarThumb: '#ff4d4d',
        scrollbarThumbHover: '#ff8080',
        glassNavBg: 'rgba(152, 0, 0, 0.85)',
        focusRing: 'rgba(255, 77, 77, 0.15)',
        footerBg: '#1a0000',
        // Tailwind class tokens for JSX
        heroGlow1: 'bg-red-600',
        heroGlow2: 'bg-red-400',
        heroGlow3: 'bg-rose-500',
        contactGlow: 'bg-red-600',
        committeeCards: [
            'bg-gradient-to-br from-red-700 to-red-900',
            'bg-gradient-to-br from-[#2a0a0a] to-[#1a0000]',
            'bg-gradient-to-br from-rose-800 to-rose-950',
            'bg-gradient-to-br from-white/10 to-white/5',
        ],
    },
    teal: {
        primary: '#0e5354',
        primaryDark: '#0a3d3e',
        backgroundDark: '#0e5354',
        cta: '#11706e',
        ctaHover: '#0e5c5a',
        scrollbarTrack: '#0a3d3e',
        scrollbarThumb: '#29c4b0',
        scrollbarThumbHover: '#5ee0cf',
        glassNavBg: 'rgba(14, 83, 84, 0.85)',
        focusRing: 'rgba(41, 196, 176, 0.15)',
        footerBg: '#071f20',
        // Tailwind class tokens for JSX
        heroGlow1: 'bg-teal-600',
        heroGlow2: 'bg-teal-400',
        heroGlow3: 'bg-emerald-500',
        contactGlow: 'bg-teal-600',
        committeeCards: [
            'bg-gradient-to-br from-teal-700 to-teal-900',
            'bg-gradient-to-br from-[#0a2020] to-[#071f20]',
            'bg-gradient-to-br from-emerald-800 to-emerald-950',
            'bg-gradient-to-br from-white/10 to-white/5',
        ],
    },
};

const theme = palettes[THEME] || palettes.red;

export default theme;
export { THEME };
