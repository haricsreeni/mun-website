/**
 * Theme configuration — reads VITE_THEME env variable.
 * Values: "red" (default) | "teal" | "maroon"
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
        textPrimary: '#ffffff',
        textSecondary: 'rgba(255,255,255,0.7)',
        accent: '#ff4d4d',
        accentSecondary: '#cc0000',
        surfaceBg: 'rgba(255,255,255,0.05)',
        neutral: 'rgba(255,255,255,0.15)',
        // Tailwind class tokens for JSX
        heroGlow1: 'bg-red-600',
        heroGlow2: 'bg-red-400',
        heroGlow3: 'bg-rose-500',
        contactGlow: 'bg-red-600',
        registerGlow1: 'bg-red-600',
        registerGlow2: 'bg-red-800',
        committeeCards: [
            'bg-gradient-to-br from-red-700 to-red-900',
            'bg-gradient-to-br from-[#2a0a0a] to-[#1a0000]',
            'bg-gradient-to-br from-rose-800 to-rose-950',
            'bg-gradient-to-br from-white/10 to-white/5',
            'bg-gradient-to-br from-amber-800 to-amber-950',
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
        textPrimary: '#ffffff',
        textSecondary: 'rgba(255,255,255,0.7)',
        accent: '#29c4b0',
        accentSecondary: '#11706e',
        surfaceBg: 'rgba(255,255,255,0.05)',
        neutral: 'rgba(255,255,255,0.15)',
        // Tailwind class tokens for JSX
        heroGlow1: 'bg-teal-600',
        heroGlow2: 'bg-teal-400',
        heroGlow3: 'bg-emerald-500',
        contactGlow: 'bg-teal-600',
        registerGlow1: 'bg-teal-600',
        registerGlow2: 'bg-teal-800',
        committeeCards: [
            'bg-gradient-to-br from-teal-700 to-teal-900',
            'bg-gradient-to-br from-[#0a2020] to-[#071f20]',
            'bg-gradient-to-br from-emerald-800 to-emerald-950',
            'bg-gradient-to-br from-white/10 to-white/5',
            'bg-gradient-to-br from-cyan-800 to-cyan-950',
        ],
    },
    maroon: {
        primary: '#5c1620',
        primaryDark: '#4a111a',
        backgroundDark: '#5c1620',
        cta: '#F2A900',
        ctaHover: '#d99800',
        scrollbarTrack: '#4a111a',
        scrollbarThumb: '#F2A900',
        scrollbarThumbHover: '#ffbe33',
        glassNavBg: 'rgba(92, 22, 32, 0.90)',
        focusRing: 'rgba(242, 169, 0, 0.2)',
        footerBg: '#73202C',
        textPrimary: '#FFFFFF',
        textSecondary: 'rgba(255,255,255,0.8)',
        accent: '#F2A900',
        accentSecondary: '#d99800',
        surfaceBg: '#F4F4F9',
        neutral: 'rgba(255,255,255,0.2)',
        // Tailwind class tokens for JSX
        heroGlow1: 'bg-[#5c1620]',
        heroGlow2: 'bg-[#F2A900]',
        heroGlow3: 'bg-[#73202C]',
        contactGlow: 'bg-[#F2A900]',
        registerGlow1: 'bg-[#5c1620]',
        registerGlow2: 'bg-[#73202C]',
        committeeCards: [
            'bg-gradient-to-br from-[#5c1620] to-[#4a111a]',
            'bg-gradient-to-br from-[#73202C] to-[#5c1620]',
            'bg-gradient-to-br from-[#F2A900]/20 to-[#d99800]/10',
            'bg-gradient-to-br from-[#8B3040] to-[#5c1620]',
            'bg-gradient-to-br from-[#4a111a] to-[#3a0d14]',
        ],
    },
};

const theme = palettes[THEME] || palettes.red;

export default theme;
export { THEME };
