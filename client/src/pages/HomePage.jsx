import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SectionSeparator from '../components/SectionSeparator';
import ScrollReveal from '../components/ScrollReveal';
import theme from '../config/theme';

const CONTACT_API = `${import.meta.env.VITE_API_URL || ''}/api/contact`;
const stats = [
    { icon: 'groups', value: '200+', label: 'Delegates' },
    { icon: 'gavel', value: '5', label: 'Committees' },
    { icon: 'public', value: '20+', label: 'Nations' },
    { icon: 'emoji_events', value: '75k', label: 'Prize Pool' },
];

const committees = [
    { name: 'UNGA', desc: 'Step into the theater of real-world impact where negotiation meets necessity, transforming the friction of competing agendas into a singular, universal consensus.', color: theme.committeeCards[0], text: 'text-white' },
    { name: 'Crisis Committee', desc: 'Events unfold in real time as delegates navigate the complex interaction between artificial intelligence, surveillance, and privacy. Through secret directives, intelligence leaks, and fast-changing situations, every decision carries weight.', color: theme.committeeCards[1], text: 'text-white' },
    { name: 'WTO CTD', desc: 'The Committee on Trade and Development tackles the 2026 "Subsidy Race" and trade wars to draft a "Framework for Economic Resilience" that protects emerging markets from superpower decoupling.', color: theme.committeeCards[2], text: 'text-white' },
    { name: 'PM Council', desc: 'A high-stakes executive simulation where 30 Ministers must navigate budget wars and departmental friction to reach a mandatory consensus, drafting a technically airtight Cabinet Note that balances national survival with cold, hard fiscal reality.', color: theme.committeeCards[3], text: 'text-white' },
    { name: 'International Press', desc: 'Step behind the lens of raw reality — the frontline of visual truth. Wield the power of the frame to expose the unseen, transforming a single, frozen frame into a catalyst for real-world impact.', color: theme.committeeCards[4], text: 'text-white' },
];

const faqs = [
    { q: 'Who can participate in Sabha MUN 2026?', a: 'All college students from any recognized institution are eligible to participate. Whether you\'re a first-timer or a seasoned MUNner, Sabha welcomes you.' },
    { q: 'What are the dates and venue?', a: 'The inauguration is on 17th April 2026 at 7 PM. The conference runs on 18–19 April 2026 at IIT Madras, Chennai.' },
    { q: 'What is the registration fee?', a: 'Early Bird Individual Delegate Fee is ₹1,500. Registration fees are payable to the Student Activities Trust IIT Madras. Lunch will be provided for all delegates on conference days.' },
    { q: 'Is accommodation provided?', a: 'Yes, on-campus accommodation at college hostels is available for ₹1,800. This includes basic amenities like a bed, bucket, and mug. You can opt-in during registration.' },
    { q: 'Are there any campus rules I must follow?', a: 'Yes. IIT Madras enforces a strict code of conduct. Posession or use of drugs, alcohol, or smoking is strictly prohibited. Delegates must treat hostel property and campus wildlife with utmost respect. Violations lead to immediate expulsion.' },
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

/* ─── Countdown to 18 April 2026 ─── */
function Countdown() {
    const target = new Date('2026-04-18T09:00:00+05:30').getTime();
    const [now, setNow] = useState(Date.now());

    useEffect(() => {
        const id = setInterval(() => setNow(Date.now()), 1000);
        return () => clearInterval(id);
    }, []);

    const diff = Math.max(0, target - now);
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);

    const units = [
        { value: days, label: 'Days' },
        { value: hours, label: 'Hrs' },
        { value: minutes, label: 'Min' },
        { value: seconds, label: 'Sec' },
    ];

    return (
        <motion.div
            className="mt-8 flex items-center justify-center gap-3"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
        >
            {units.map((u) => (
                <div key={u.label} className="flex flex-col items-center">
                    <span className="text-2xl md:text-3xl font-thin tabular-nums text-white">
                        {String(u.value).padStart(2, '0')}
                    </span>
                    <span className="text-[8px] tracking-[0.25em] uppercase text-white/40 mt-1">{u.label}</span>
                </div>
            ))}
        </motion.div>
    );
}

/* ─── Page ──────────────────────────────── */
export default function HomePage() {
    const scrolled = useScrolled(100);

    return (
        <>
            {/* ===== HERO ===== */}
            <main className="relative flex flex-col items-center justify-center min-h-screen w-full px-4 pt-20 pb-24">
                {/* Clean dramatic background glows */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] ${theme.heroGlow1} rounded-full opacity-20 blur-[140px]`} />
                    <div className={`absolute top-1/4 right-1/4 w-[300px] h-[300px] ${theme.heroGlow2} rounded-full opacity-10 blur-[100px] animate-glow-pulse`} />
                    <div className={`absolute bottom-1/4 left-1/3 w-[250px] h-[250px] ${theme.heroGlow3} rounded-full opacity-8 blur-[120px] animate-glow-pulse-delayed`} />
                    <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] mix-blend-overlay" />
                </div>

                <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-7xl mx-auto">

                    {/* Title — Sabha in Samarkan, no letter spacing for connected shirorekha */}
                    <motion.h1
                        className="text-center select-none mt-20"
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

                    {/* One-liner */}
                    <motion.p
                        className="mt-6 md:mt-8 text-center text-sm md:text-base text-white/50 font-light max-w-xl px-4 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        Sabha's inaugural edition — from a Flagship Crisis Committee for tech minds, to the PM Council for policy enthusiasts, to the WTO for economics aficionados. One conference, every lens.
                    </motion.p>

                    {/* Early Bird + Countdown */}
                    <motion.p
                        className="mt-8 text-xs tracking-[0.3em] uppercase font-bold text-center"
                        style={{ color: theme.cta }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.85, duration: 0.6 }}
                    >
                        ✦ Early Bird Registrations Open ✦
                    </motion.p>
                    <Countdown />

                    {/* Date · Venue chips */}
                    <motion.div
                        className="flex flex-wrap items-center justify-center gap-3 mt-8"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.6 }}
                    >
                        {[
                            { label: '17 Apr', sub: 'Inauguration · 7 PM' },
                            { label: '18–19 Apr', sub: 'Conference · 2026' },
                            { label: 'IIT Madras', sub: 'Chennai, India' },
                        ].map((t) => (
                            <div
                                key={t.label}
                                className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03]"
                            >
                                <span className="text-xs font-medium text-white/90">{t.label}</span>
                                <span className="text-[9px] text-white/40 tracking-wider uppercase">{t.sub}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Scroll indicator — fixed to viewport bottom, hides on scroll */}
                <AnimatePresence>
                    {!scrolled && (
                        <motion.div
                            className="fixed bottom-4 left-1/2 flex flex-col items-center z-40 pointer-events-none"
                            initial={{ opacity: 0, x: '-50%' }}
                            animate={{ opacity: 0.5, x: '-50%' }}
                            exit={{ opacity: 0, x: '-50%', y: 10 }}
                            transition={{ duration: 0.4 }}
                        >
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
                                    Experience the pinnacle of diplomatic discourse in the heart of Chennai. Sabha MUN 2026
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
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8 max-w-4xl mx-auto">
                        {committees.map((c, i) => (
                            <ScrollReveal key={c.name} delay={i * 0.12}>
                                <div
                                    className={`badge-card ${c.color} ${c.text} border border-white/10 w-full`}
                                    style={{ width: '100%', maxWidth: '400px', minWidth: '280px' }}
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
                        <p className="text-white/70 font-light text-base md:text-lg mb-4 max-w-lg mx-auto">
                            Secure your place among the next generation of global leaders. Registrations for Sabha MUN 2026 are now open.
                        </p>
                        <p className="text-white/40 font-light text-sm mb-10 md:mb-14 max-w-md mx-auto">
                            Eligibility: College Students · Venue: IIT Madras
                        </p>
                        <div className="flex flex-col md:flex-row gap-5 md:gap-8 justify-center">
                            <ScrollReveal delay={0.15} direction="left">
                                <div className="bg-white/5 p-6 md:p-10 border border-white/20 rounded-2xl flex flex-col items-center">
                                    <span className="text-xs tracking-[0.3em] uppercase opacity-50 mb-4">Early Bird</span>
                                    <h3 className="text-2xl font-bold font-serif mb-2">Individual Delegate</h3>
                                    <p className="text-3xl font-thin mb-2">₹1,500</p>
                                    <p className="text-xs text-white/40 mb-8">+ ₹1,800 for accommodation</p>
                                    <Link
                                        to="/register"
                                        className="w-full py-4 bg-white text-primary font-bold tracking-widest uppercase rounded-full hover:bg-opacity-90 transition-all text-center block text-sm"
                                    >
                                        Register Now
                                    </Link>
                                </div>
                            </ScrollReveal>
                            <ScrollReveal delay={0.3} direction="right">
                                <div className="bg-white/5 p-6 md:p-10 border border-white/20 rounded-2xl flex flex-col items-center">
                                    <span className="text-xs tracking-[0.3em] uppercase opacity-50 mb-4">Group</span>
                                    <h3 className="text-2xl font-bold font-serif mb-2">Group Registration</h3>
                                    <p className="text-3xl font-thin mb-2">₹1,500<span className="text-lg">/delegate</span></p>
                                    <p className="text-xs text-white/40 mb-8">Register multiple delegates at once</p>
                                    <Link
                                        to="/register?type=group"
                                        className="w-full py-4 border border-white/30 text-white font-bold tracking-widest uppercase rounded-full hover:bg-white hover:text-primary transition-all text-sm text-center block"
                                    >
                                        Group Register
                                    </Link>
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

            {/* ===== TERMS & CONDITIONS ===== */}
            <section className="py-16 md:py-24 px-4 md:px-6 relative overflow-hidden">
                <ScrollReveal>
                    <div className="max-w-2xl mx-auto text-center">
                        <span className="material-symbols-outlined text-4xl mb-4 block" style={{ color: theme.cta }}>gavel</span>
                        <h2 className="text-2xl md:text-4xl font-serif mb-4">
                            Terms & <span className="italic font-medium">Conditions</span>
                        </h2>
                        <p className="text-sm text-white/50 font-light max-w-md mx-auto mb-8 leading-relaxed">
                            Please review our campus code of conduct, accommodation guidelines, and payment policies before registering.
                        </p>
                        <Link
                            to="/terms"
                            className="inline-flex items-center gap-2 px-8 py-3 border border-white/20 rounded-full text-sm tracking-widest uppercase font-medium hover:bg-white hover:text-primary transition-all duration-300"
                        >
                            Read Full Terms
                            <span className="material-symbols-outlined text-base">arrow_forward</span>
                        </Link>
                    </div>
                </ScrollReveal>
            </section>

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
                        <p className="text-white/60 font-light text-base max-w-lg mx-auto mb-8">
                            Have a question about Sabha MUN 2026? Drop us a message and we'll get back to you shortly.
                        </p>
                        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-xs text-white/50 font-light">
                            <p className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-sm">person</span>
                                Maria Peeter (Secretary General): +91 8606507583
                            </p>
                            <p className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-sm">person</span>
                                Ganesha (Director General): +91 6360664478
                            </p>
                            <p className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-sm">mail</span>
                                ppc@smail.iitm.ac.in
                            </p>
                        </div>
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
