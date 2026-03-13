import dotenv from 'dotenv';
dotenv.config();

const THEME = process.env.VITE_THEME || 'red';

const palettes = {
    red: {
        primary: '#980000',
        'primary-dark': '#7a0000',
        'background-dark': '#980000',
    },
    teal: {
        primary: '#0e5354',
        'primary-dark': '#0a3d3e',
        'background-dark': '#0e5354',
    },
    maroon: {
        primary: '#5c1620',
        'primary-dark': '#4a111a',
        'background-dark': '#5c1620',
    },
};

const colors = palettes[THEME] || palettes.red;

// Dynamic classes used in JSX via theme config — must be safelisted
const safelist = [
    // Red palette
    'bg-red-600', 'bg-red-400', 'bg-rose-500',
    'from-red-700', 'to-red-900',
    'from-rose-800', 'to-rose-950',
    // Teal palette
    'bg-teal-600', 'bg-teal-400', 'bg-emerald-500',
    'from-teal-700', 'to-teal-900',
    'from-emerald-800', 'to-emerald-950',
    // Maroon palette
    'bg-[#5c1620]', 'bg-[#F2A900]', 'bg-[#73202C]',
    'from-[#5c1620]', 'to-[#4a111a]',
    'from-[#73202C]', 'to-[#5c1620]',
    'from-[#F2A900]/20', 'to-[#d99800]/10',
    'from-[#8B3040]',
    'from-[#4a111a]', 'to-[#3a0d14]',
    // Shared
    'bg-gradient-to-br',
    'from-white/10', 'to-white/5',
];

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    safelist,
    darkMode: 'class',
    theme: {
        extend: {
            colors,
            fontFamily: {
                display: ['Manrope', 'sans-serif'],
                serif: ['Playfair Display', 'Georgia', 'serif'],
            },
            borderRadius: {
                DEFAULT: '0.25rem',
                lg: '0.5rem',
                xl: '0.75rem',
                full: '9999px',
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
};
