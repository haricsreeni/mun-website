import { Link } from 'react-router-dom';
import SectionSeparator from '../components/SectionSeparator';

/* ─── Data ──────────────────────────────── */
const stats = [
    { icon: 'groups', value: '500+', label: 'Delegates' },
    { icon: 'gavel', value: '12', label: 'Committees' },
    { icon: 'public', value: '20+', label: 'Nations' },
    { icon: 'trophy', value: '₹1.5L', label: 'Prize Pool' },
];

const committees = [
    { name: 'UNSC', desc: 'United Nations Security Council: Addressing immediate threats to global peace and stability.' },
    { name: 'DISEC', desc: 'Disarmament and International Security Committee: Focusing on arms control and global security challenges.' },
    { name: 'UNHRC', desc: 'United Nations Human Rights Council: Protecting fundamental freedoms and rights across the globe.' },
    { name: 'CRISIS', desc: 'Crisis Committee: Addressing immediate threats to global peace and stability.' },
];

const faqs = [
    { q: 'Who can participate in IITM MUN 2026?', a: 'Undergraduate students, high school students (9th-12th grade), and post-graduate students from any recognized institution are welcome.' },
    { q: 'Will there be training for first-time delegates?', a: 'Yes, we host several online workshops leading up to the conference to ensure all delegates are familiar with Rules of Procedure.' },
    { q: 'Is accommodation provided?', a: 'We provide limited on-campus accommodation and have tied up with local hotels for discounted rates for delegates.' },
];

/* ─── Page ──────────────────────────────── */
export default function HomePage() {
    return (
        <>
            {/* ===== HERO ===== */}
            <main className="relative flex flex-col items-center justify-center min-h-screen w-full px-4 pt-20">
                {/* Background */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600 rounded-full opacity-20 blur-[120px]" />
                    <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay" />
                </div>

                <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-7xl mx-auto">
                    {/* Gavel Image */}
                    <div className="relative w-full max-w-2xl aspect-[16/9] flex items-center justify-center mb-12">
                        <div className="relative w-64 h-64 md:w-96 md:h-96">
                            <img
                                alt="Abstract 3D glass gavel floating in void"
                                className="w-full h-full object-contain drop-shadow-2xl opacity-90 mix-blend-luminosity brightness-200 contrast-125 mask-image-gradient"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDid-MeXWYLNLyDaFY78pWbWypjDuzvQH6AGOLjRfHy-PBTqXfNgagXEGTtk5-J-sll-mQOLdduu5sFo4AgT4A_tXVx_JPB9JY3K1JTb1O8w_Nom-NOxIexLBR0x02uQSjDUhU__wVc3ZbZvhGlExIVZsyOdwKqykO0vVIK9uqBeBmzyfkom0MjbI0LGJucy7YCtHJYY8btAMgsk56j6mC6VfKbMZwPGihJ6upLPrB3T7-rJQdVgNVsFFSnVKkS78HQgjiNStyGrYOa"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent rounded-full blur-xl animate-pulse" />
                        </div>
                    </div>

                    {/* Title */}
                    <div className="flex flex-col items-center text-center gap-6">
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-thin tracking-tighter text-white leading-none select-none">
                            IITM <span className="font-light">MUN</span>
                        </h1>
                        <div className="h-px w-24 bg-white/30 my-2" />
                        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-8 text-white/80 font-light tracking-[0.2em] text-sm md:text-base uppercase">
                            <span>18-19 April 2026</span>
                            <span className="hidden md:block w-1 h-1 bg-white rounded-full" />
                            <span>Chennai, India</span>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-16">
                        <a
                            href="#about"
                            className="relative group inline-block px-12 py-4 overflow-hidden rounded-full transition-all duration-300 hover:scale-105"
                        >
                            <div className="absolute inset-0 border border-white/30 rounded-full group-hover:border-white/80 transition-colors" />
                            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
                            <span className="relative text-sm font-medium tracking-[0.15em] uppercase text-white">
                                Join Conference
                            </span>
                        </a>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
                    <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
                    <span className="material-symbols-outlined text-lg animate-bounce">keyboard_arrow_down</span>
                </div>
            </main>

            <SectionSeparator />

            {/* ===== ABOUT ===== */}
            <section className="py-32 px-6 relative overflow-hidden" id="about">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                        <div className="space-y-10">
                            <div>
                                <span className="text-[10px] tracking-[0.4em] uppercase text-white/50 mb-4 block">Our Legacy</span>
                                <h2 className="text-5xl md:text-6xl font-thin leading-tight">
                                    Diplomacy <br />
                                    <span className="font-bold">Redefined.</span>
                                </h2>
                            </div>
                            <p className="text-white/70 font-light leading-relaxed text-xl max-w-md">
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

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-6">
                            {stats.map((s) => (
                                <div
                                    key={s.label}
                                    className="bg-white/5 p-8 rounded-lg border border-white/10 hover:bg-white/10 transition-all hover:-translate-y-1 text-center"
                                >
                                    <span className="material-symbols-outlined text-3xl mb-4 text-white/80">{s.icon}</span>
                                    <h3 className="text-4xl font-bold mb-2">{s.value}</h3>
                                    <p className="text-[10px] uppercase tracking-widest text-white/50">{s.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <SectionSeparator />

            {/* ===== COMMITTEES ===== */}
            <section className="py-32 px-6 bg-black/10 relative overflow-hidden" id="committees">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <span className="text-[10px] tracking-[0.4em] uppercase text-white/50 mb-4 block">The Assemblies</span>
                        <h2 className="text-5xl font-thin uppercase tracking-tight">
                            Our <span className="font-bold">Committees</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {committees.map((c) => (
                            <div
                                key={c.name}
                                className="group p-8 border border-white/10 rounded-xl hover:bg-white/5 transition-colors cursor-pointer"
                            >
                                <h3 className="text-xl font-bold mb-4 tracking-wider uppercase">{c.name}</h3>
                                <p className="text-sm text-white/60 font-light leading-relaxed">{c.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <SectionSeparator />

            {/* ===== REGISTER CTA ===== */}
            <section className="py-32 px-6 relative overflow-hidden" id="register">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-5xl font-thin mb-8">
                        Join the <span className="font-bold uppercase tracking-widest">Dialogue</span>
                    </h2>
                    <p className="text-white/70 font-light text-lg mb-12">
                        Secure your place among the next generation of global leaders. Registrations for the 2026
                        edition are now open.
                    </p>
                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        <div className="bg-white/5 p-10 border border-white/20 rounded-2xl flex-1 flex flex-col items-center">
                            <span className="text-xs tracking-[0.3em] uppercase opacity-50 mb-4">Phase 1</span>
                            <h3 className="text-2xl font-bold mb-2">Individual Delegate</h3>
                            <p className="text-3xl font-thin mb-8">₹1200</p>
                            <Link
                                to="/register"
                                className="w-full py-4 bg-white text-primary font-bold tracking-widest uppercase rounded-full hover:bg-opacity-90 transition-all text-center block"
                            >
                                Apply Now
                            </Link>
                        </div>
                        <div className="bg-white/5 p-10 border border-white/20 rounded-2xl flex-1 flex flex-col items-center">
                            <span className="text-xs tracking-[0.3em] uppercase opacity-50 mb-4">Phase 1</span>
                            <h3 className="text-2xl font-bold mb-2">Institution</h3>
                            <p className="text-3xl font-thin mb-8">Contact Us</p>
                            <button className="w-full py-4 border border-white/30 text-white font-bold tracking-widest uppercase rounded-full hover:bg-white hover:text-primary transition-all">
                                Download Info
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <SectionSeparator />

            {/* ===== FAQ ===== */}
            <section className="py-32 px-6 bg-black/5 relative overflow-hidden" id="faq">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl font-thin text-center mb-16 uppercase tracking-[0.2em]">
                        Common <span className="font-bold">Questions</span>
                    </h2>
                    <div className="space-y-6">
                        {faqs.map((faq, i) => (
                            <div key={i} className="p-6 border-b border-white/10">
                                <h3 className="text-lg font-medium mb-3">{faq.q}</h3>
                                <p className="text-white/60 font-light text-sm">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
