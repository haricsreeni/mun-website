import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SectionSeparator from '../components/SectionSeparator';
import ScrollReveal from '../components/ScrollReveal';
import theme from '../config/theme';

const CONTACT_API = `${import.meta.env.VITE_API_URL || ''}/api/contact`;
const stats = [
    { icon: 'groups', value: '500+', label: 'Delegates' },
    { icon: 'gavel', value: '12', label: 'Committees' },
    { icon: 'public', value: '20+', label: 'Nations' },
    { icon: 'trophy', value: '₹1.5L', label: 'Prize Pool' },
];

const committees = [
    { name: 'UNSC', desc: 'United Nations Security Council: Addressing immediate threats to global peace and stability.', color: theme.committeeCards[0], text: 'text-white' },
    { name: 'DISEC', desc: 'Disarmament and International Security Committee: Focusing on arms control and global security challenges.', color: theme.committeeCards[1], text: 'text-white' },
    { name: 'UNHRC', desc: 'United Nations Human Rights Council: Protecting fundamental freedoms and rights across the globe.', color: theme.committeeCards[2], text: 'text-white' },
    { name: 'CRISIS', desc: 'Crisis Committee: Addressing immediate threats to global peace and stability.', color: theme.committeeCards[3], text: 'text-white' },
];

const faqs = [
    { q: 'Who can participate in IITM MUN 2026?', a: 'Undergraduate students, high school students (9th-12th grade), and post-graduate students from any recognized institution are welcome.' },
    { q: 'Will there be training for first-time delegates?', a: 'Yes, we host several online workshops leading up to the conference to ensure all delegates are familiar with Rules of Procedure.' },
    { q: 'Is accommodation provided?', a: 'We provide limited on-campus accommodation and have tied up with local hotels for discounted rates for delegates.' },
];

/* ─── Scroll-aware hook ─── */
function useScrolled(threshold = 80) {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > threshold);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, [threshold]);
    return scrolled;
}

/* ─── Page ──────────────────────────────── */
export default function HomePage() {
    const scrolled = useScrolled(100);

    return (
        <>
            {/* ===== HERO ===== */}
            <main className="relative flex flex-col items-center justify-center min-h-screen w-full px-4 pt-20">
                {/* Clean dramatic background glows */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] ${theme.heroGlow1} rounded-full opacity-20 blur-[140px]`} />
                    <div className={`absolute top-1/4 right-1/4 w-[300px] h-[300px] ${theme.heroGlow2} rounded-full opacity-10 blur-[100px] animate-glow-pulse`} />
                    <div className={`absolute bottom-1/4 left-1/3 w-[250px] h-[250px] ${theme.heroGlow3} rounded-full opacity-8 blur-[120px] animate-glow-pulse-delayed`} />
                    <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] mix-blend-overlay" />
                </div>

                <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-7xl mx-auto">
                    {/* Floating Label Tags (EA Connect style) */}
                    <motion.div
                        className="flex flex-col items-center mb-16"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.7 }}
                    >
                        <div className="w-2 h-2 bg-white rounded-full mb-3" />
                        <span className="text-xs tracking-[0.3em] uppercase text-white/70 font-light">In-Person Conference</span>
                    </motion.div>

                    {/* Title — Sabha in Samarkan, no letter spacing for connected shirorekha */}
                    <motion.h1
                        className="text-center select-none"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        <span
                            className="block text-white"
                            style={{
                                fontFamily: "'Samarkan', serif",
                                fontSize: 'clamp(6rem, 18vw, 16rem)',
                                fontWeight: 400,
                                letterSpacing: '-0.02em',
                                lineHeight: 0.85,
                                textShadow: '0 0 80px rgba(255,255,255,0.08)',
                            }}
                        >
                            Sabha
                        </span>
                        <span
                            className="block font-serif font-light italic text-white/90"
                            style={{
                                fontSize: 'clamp(3rem, 8vw, 7rem)',
                                lineHeight: 1,
                                marginTop: '-0.1em',
                            }}
                        >
                            MUN
                            <span className="font-sans font-thin text-[0.45em] align-super ml-1">'26</span>
                        </span>
                    </motion.h1>

                    {/* Tagline */}
                    <motion.div
                        className="mt-6 md:mt-10 text-center max-w-xl px-4"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        <p className="font-serif text-xl md:text-2xl text-white/80 leading-relaxed">
                            Diplomacy, debate, and collaboration<br />
                            <em className="text-white font-medium">for impact.</em>
                        </p>
                        <p className="mt-4 text-sm text-white/50 font-light max-w-md mx-auto">
                            Uniting the sharpest minds from across the nation to debate, negotiate, and resolve global crises.
                        </p>
                    </motion.div>

                    {/* Floating Detail Tags */}
                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-20 mt-14">
                        <motion.div
                            className="flex flex-col items-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9, duration: 0.6 }}
                        >
                            <div className="w-1.5 h-1.5 bg-white/60 rounded-full mb-2" />
                            <span className="text-sm md:text-base font-serif text-white/90">18–19 April</span>
                            <span className="text-[10px] tracking-[0.2em] uppercase text-white/40 mt-1">2026</span>
                        </motion.div>
                        <motion.div
                            className="flex flex-col items-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.1, duration: 0.6 }}
                        >
                            <div className="w-1.5 h-1.5 bg-white/60 rounded-full mb-2" />
                            <span className="text-sm md:text-base font-serif text-white/90">Chennai, India</span>
                            <span className="text-[10px] tracking-[0.2em] uppercase text-white/40 mt-1">IIT Madras</span>
                        </motion.div>
                    </div>
                </div>

                {/* Scroll indicator — hides on scroll */}
                <AnimatePresence>
                    {!scrolled && (
                        <motion.div
                            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.4 }}
                        >
                            <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
                            <span className="material-symbols-outlined text-lg animate-bounce">keyboard_arrow_down</span>
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>

            <SectionSeparator />

            {/* ===== ABOUT ===== */}
            <section className="py-20 md:py-36 px-4 md:px-6 relative overflow-hidden" id="about">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
                        <ScrollReveal>
                            <div className="space-y-10">
                                <div>
                                    <span className="text-[10px] tracking-[0.4em] uppercase text-white/50 mb-4 block">Our Legacy</span>
                                    <h2 className="text-4xl md:text-7xl font-serif leading-tight">
                                        Diplomacy <br />
                                        <span className="italic font-medium">Redefined.</span>
                                    </h2>
                                </div>
                                <p className="text-white/70 font-light leading-relaxed text-base md:text-xl max-w-md">
                                    Experience the pinnacle of diplomatic discourse in the heart of Chennai. IITM MUN 2026
                                    brings together the sharpest minds to debate, negotiate, and resolve global crises in a
                                    setting of unparalleled prestige.
                                </p>
                                <div className="pt-4">
                                    <a
                                        href="#"
                                        className="inline-flex items-center gap-3 text-white border-b border-white/30 pb-2 hover:border-white transition-colors group"
                                    >
                                        <span className="text-xs tracking-[0.2em] uppercase">Download Prospectus</span>
                                        <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                                            arrow_forward
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-3 md:gap-6">
                            {stats.map((s, i) => (
                                <ScrollReveal key={s.label} delay={i * 0.1}>
                                    <div className="bg-white/5 p-5 md:p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 text-center">
                                        <span className="material-symbols-outlined text-2xl md:text-3xl mb-2 md:mb-4 text-white/80">{s.icon}</span>
                                        <h3 className="text-2xl md:text-4xl font-bold mb-1 md:mb-2 font-serif">{s.value}</h3>
                                        <p className="text-[10px] uppercase tracking-widest text-white/50">{s.label}</p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <SectionSeparator />

            {/* ===== COMMITTEES (Badge Cards) ===== */}
            <section className="py-20 md:py-36 px-4 md:px-6 bg-black/10 relative overflow-hidden" id="committees">
                <div className="max-w-7xl mx-auto">
                    <ScrollReveal>
                        <div className="text-center mb-12 md:mb-20">
                            <span className="text-[10px] tracking-[0.4em] uppercase text-white/50 mb-4 block">The Assemblies</span>
                            <h2 className="text-3xl md:text-6xl font-serif tracking-tight">
                                Our <span className="italic font-medium">Committees</span>
                            </h2>
                        </div>
                    </ScrollReveal>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
                        {committees.map((c, i) => (
                            <ScrollReveal key={c.name} delay={i * 0.12}>
                                <div
                                    className={`badge-card ${c.color} ${c.text} border border-white/10`}
                                >
                                    <h3 className="text-3xl md:text-4xl font-serif mb-4">{c.name}</h3>
                                    <p className="text-sm font-light leading-relaxed opacity-80">{c.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            <SectionSeparator />

            {/* ===== REGISTER CTA ===== */}
            <section className="py-20 md:py-36 px-4 md:px-6 relative overflow-hidden" id="register">
                <ScrollReveal>
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-6xl font-serif mb-6 md:mb-8">
                            Join the <span className="italic font-medium">Dialogue</span>
                        </h2>
                        <p className="text-white/70 font-light text-base md:text-lg mb-10 md:mb-14 max-w-lg mx-auto">
                            Secure your place among the next generation of global leaders. Registrations for the 2026
                            edition are now open.
                        </p>
                        <div className="flex flex-col md:flex-row gap-5 md:gap-8 justify-center">
                            <ScrollReveal delay={0.15} direction="left">
                                <div className="bg-white/5 p-6 md:p-10 border border-white/20 rounded-2xl flex flex-col items-center">
                                    <span className="text-xs tracking-[0.3em] uppercase opacity-50 mb-4">Phase 1</span>
                                    <h3 className="text-2xl font-bold font-serif mb-2">Individual Delegate</h3>
                                    <p className="text-3xl font-thin mb-8">₹1200</p>
                                    <Link
                                        to="/register"
                                        className="w-full py-4 bg-white text-primary font-bold tracking-widest uppercase rounded-full hover:bg-opacity-90 transition-all text-center block text-sm"
                                    >
                                        Apply Now
                                    </Link>
                                </div>
                            </ScrollReveal>
                            <ScrollReveal delay={0.3} direction="right">
                                <div className="bg-white/5 p-6 md:p-10 border border-white/20 rounded-2xl flex flex-col items-center">
                                    <span className="text-xs tracking-[0.3em] uppercase opacity-50 mb-4">Phase 1</span>
                                    <h3 className="text-2xl font-bold font-serif mb-2">Institution</h3>
                                    <p className="text-3xl font-thin mb-8">Contact Us</p>
                                    <button className="w-full py-4 border border-white/30 text-white font-bold tracking-widest uppercase rounded-full hover:bg-white hover:text-primary transition-all text-sm">
                                        Download Info
                                    </button>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </ScrollReveal>
            </section>

            <SectionSeparator />

            {/* ===== FAQ (Accordion Cards) ===== */}
            <FaqSection />

            <SectionSeparator />

            {/* ===== CONTACT US ===== */}
            <ContactSection />
        </>
    );
}

/* ─── FAQ Section ─── */
function FaqSection() {
    const [openIdx, setOpenIdx] = useState(null);

    return (
        <section className="py-20 md:py-36 px-4 md:px-6 bg-black/5 relative overflow-hidden" id="faq">
            <div className="max-w-3xl mx-auto">
                <ScrollReveal>
                    <div className="text-center mb-4">
                        <span className="text-[10px] tracking-[0.4em] uppercase text-white/50 mb-4 block">Common Questions</span>
                    </div>
                    <h2 className="text-3xl md:text-6xl font-serif text-center mb-10 md:mb-16">
                        Frequently Asked<br />
                        <span className="italic font-medium">Questions</span>
                    </h2>
                </ScrollReveal>
                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <ScrollReveal key={i} delay={i * 0.1}>
                            <div className={`faq-card ${openIdx === i ? 'open' : ''}`}>
                                <div
                                    className="faq-question"
                                    onClick={() => setOpenIdx(openIdx === i ? null : i)}
                                >
                                    <h3 className="text-base md:text-lg font-serif font-medium pr-4">{faq.q}</h3>
                                    <motion.span
                                        className="material-symbols-outlined text-white/50 flex-shrink-0"
                                        animate={{ rotate: openIdx === i ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        expand_more
                                    </motion.span>
                                </div>
                                <AnimatePresence initial={false}>
                                    {openIdx === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                                            style={{ overflow: 'hidden' }}
                                        >
                                            <div className="faq-answer">
                                                <p className="text-white/60 font-light text-sm leading-relaxed">{faq.a}</p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ─── Contact Section (separate component for state) ─── */
function ContactSection() {
    const [contactData, setContactData] = useState({ email: '', query: '' });
    const [contactStatus, setContactStatus] = useState('idle'); // idle | loading | success | error
    const [contactError, setContactError] = useState('');

    const handleContactSubmit = async (e) => {
        e.preventDefault();
        setContactStatus('loading');
        setContactError('');

        try {
            const res = await fetch(CONTACT_API, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(contactData),
            });
            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || 'Failed to submit query');
            }

            setContactStatus('success');
            setContactData({ email: '', query: '' });
        } catch (err) {
            setContactError(err.message);
            setContactStatus('error');
        }
    };

    return (
        <section className="py-20 md:py-36 px-4 md:px-6 relative overflow-hidden" id="contact">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] ${theme.contactGlow} rounded-full opacity-10 blur-[150px]`} />
            </div>

            <div className="max-w-3xl mx-auto relative z-10">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <span className="text-[10px] tracking-[0.4em] uppercase text-white/50 mb-4 block">Get In Touch</span>
                        <h2 className="text-3xl md:text-6xl font-serif tracking-tight">
                            Contact <span className="italic font-medium">Us</span>
                        </h2>
                        <div className="h-px w-24 bg-white/30 mx-auto my-6" />
                        <p className="text-white/60 font-light text-base max-w-lg mx-auto">
                            Have a question about IITM MUN 2026? Drop us a message and we'll get back to you shortly.
                        </p>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                    <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
                        {contactStatus === 'success' ? (
                            <div className="flex flex-col items-center justify-center py-12 text-center">
                                <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-6">
                                    <span className="material-symbols-outlined text-3xl text-white">check_circle</span>
                                </div>
                                <h3 className="text-2xl font-serif mb-3">
                                    Query <span className="italic font-medium">Submitted</span>
                                </h3>
                                <p className="text-white/60 font-light max-w-md mb-6">
                                    Thank you for reaching out! We'll respond to your email shortly.
                                </p>
                                <button
                                    onClick={() => setContactStatus('idle')}
                                    className="px-8 py-3 border border-white/30 rounded-full text-[11px] font-bold tracking-[0.15em] uppercase hover:bg-white hover:text-primary transition-all duration-300"
                                >
                                    Send Another Query
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleContactSubmit}>
                                {contactError && (
                                    <div className="mb-6 p-4 bg-red-900/40 border border-red-500/30 rounded-xl text-sm text-red-200 font-light">
                                        {contactError}
                                    </div>
                                )}

                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-[11px] tracking-wider uppercase text-white/40 mb-2 font-medium">
                                            Your Email *
                                        </label>
                                        <input
                                            className="form-input-style"
                                            type="email"
                                            placeholder="you@example.com"
                                            required
                                            value={contactData.email}
                                            onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[11px] tracking-wider uppercase text-white/40 mb-2 font-medium">
                                            Your Query *
                                        </label>
                                        <textarea
                                            className="form-input-style resize-none"
                                            placeholder="Type your question or message here..."
                                            rows="5"
                                            required
                                            value={contactData.query}
                                            onChange={(e) => setContactData({ ...contactData, query: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="mt-8 flex justify-center">
                                    <button
                                        type="submit"
                                        disabled={contactStatus === 'loading'}
                                        className="w-full md:w-auto md:min-w-[280px] py-4 px-12 bg-white text-primary font-bold tracking-[0.15em] uppercase rounded-full hover:bg-opacity-90 hover:scale-[1.02] transition-all duration-300 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {contactStatus === 'loading' ? 'Submitting...' : 'Submit Query'}
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
