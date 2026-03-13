import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();
    const isRegisterPage = location.pathname === '/register';

    const navLinks = [
        { label: 'About Us', href: '/#about' },
        { label: 'Committees', href: '/#committees' },
        { label: 'Resources', href: '/#resources' },
        { label: 'FAQs', href: '/#faq' },
        { label: 'Contact', href: '/#contact' },
    ];

    const handleNavClick = (href) => {
        setMobileOpen(false);
        // If already on homepage, scroll to section
        if (location.pathname === '/' && href.startsWith('/#')) {
            const el = document.getElementById(href.replace('/#', ''));
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.nav
            className="fixed top-0 left-0 w-full z-50 glass-nav h-20 flex items-center"
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
            <div className="max-w-7xl mx-auto w-full px-6 flex items-center justify-between">
                {/* Logo */}
                <Link
                    to="/"
                    className="flex items-center gap-3 group"
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        setMobileOpen(false);
                    }}
                >
                    <img
                        src="/sabha_new.png"
                        alt="Sabha MUN Logo"
                        className="h-12 w-auto transition-transform group-hover:scale-105"
                    />
                    <div className="flex flex-col">
                        <span className="text-sm font-bold tracking-widest uppercase">Sabha</span>
                        <span className="text-[10px] tracking-[0.2em] font-light opacity-80">IIT Madras MUN</span>
                    </div>
                </Link>

                {/* Desktop Nav Links */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link, i) => (
                        <motion.a
                            key={link.label}
                            href={link.href}
                            onClick={() => handleNavClick(link.href)}
                            className="text-[11px] font-medium tracking-[0.2em] hover:text-white/60 transition-colors uppercase"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                        >
                            {link.label}
                        </motion.a>
                    ))}
                </div>

                {/* Register + Mobile Toggle */}
                <div className="flex items-center gap-6">
                    <Link
                        to="/register"
                        className={`px-6 py-2 rounded-full text-[10px] font-bold tracking-[0.15em] uppercase transition-all duration-300 ${isRegisterPage
                            ? 'bg-white text-primary hover:bg-white/90'
                            : 'border border-white/30 hover:bg-white hover:text-primary'
                            }`}
                    >
                        Register
                    </Link>
                    <button
                        className="md:hidden text-white"
                        onClick={() => setMobileOpen(!mobileOpen)}
                    >
                        <span className="material-symbols-outlined">
                            {mobileOpen ? 'close' : 'menu'}
                        </span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <motion.div
                    className="md:hidden absolute top-20 left-0 w-full bg-primary/95 backdrop-blur-lg border-b border-white/10 py-6 px-6 space-y-4"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={() => handleNavClick(link.href)}
                            className="block text-[11px] font-medium tracking-[0.2em] hover:text-white/60 transition-colors uppercase py-2"
                        >
                            {link.label}
                        </a>
                    ))}
                </motion.div>
            )}
        </motion.nav>
    );
}
