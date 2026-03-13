import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import theme from './config/theme';
import './index.css';

/* Inject theme CSS custom properties onto :root */
const root = document.documentElement;
root.style.setProperty('--scrollbar-track', theme.scrollbarTrack);
root.style.setProperty('--scrollbar-thumb', theme.scrollbarThumb);
root.style.setProperty('--scrollbar-thumb-hover', theme.scrollbarThumbHover);
root.style.setProperty('--glass-nav-bg', theme.glassNavBg);
root.style.setProperty('--focus-ring', theme.focusRing);
root.style.setProperty('--cta', theme.cta);
root.style.setProperty('--cta-hover', theme.ctaHover);
root.style.setProperty('--form-option-bg', theme.primary);
root.style.setProperty('--text-primary', theme.textPrimary);
root.style.setProperty('--text-secondary', theme.textSecondary);
root.style.setProperty('--accent', theme.accent);
root.style.setProperty('--accent-secondary', theme.accentSecondary);
root.style.setProperty('--surface-bg', theme.surfaceBg);
root.style.setProperty('--neutral', theme.neutral);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
