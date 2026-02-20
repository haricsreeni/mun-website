import { useState } from 'react';
import { Link } from 'react-router-dom';

const API_URL = '/api/register';

export default function RegisterPage() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        institution: '',
        delegationType: 'individual',
        committee: '',
        delegatesCount: '',
        experience: '',
        accommodation: '',
        message: '',
    });

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const selectRadio = (name, value) => {
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const payload = { ...formData };
            if (payload.delegationType !== 'institution') {
                delete payload.delegatesCount;
            } else {
                payload.delegatesCount = Number(payload.delegatesCount) || undefined;
            }

            const res = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || 'Registration failed');
            }

            setSubmitted(true);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    /* ── Radio Card Helper ──────────────────── */
    const RadioCard = ({ group, value, label, sublabel, selected }) => (
        <label
            className={`radio-card flex items-center gap-3 ${selected ? 'selected' : ''}`}
            onClick={() => selectRadio(group, value)}
        >
            <input className="sr-only" name={group} type="radio" value={value} checked={selected} readOnly />
            <span className="w-4 h-4 rounded-full border-2 border-white/30 flex items-center justify-center transition-all">
                <span
                    className="w-2 h-2 rounded-full bg-white transition-transform"
                    style={{ transform: selected ? 'scale(1)' : 'scale(0)' }}
                />
            </span>
            <div>
                <span className="text-sm font-medium">{label}</span>
                {sublabel && <span className="block text-[10px] text-white/40 mt-0.5">{sublabel}</span>}
            </div>
        </label>
    );

    const SmallRadioCard = ({ group, value, label, selected }) => (
        <label
            className={`radio-card flex-1 flex items-center justify-center gap-2 text-center ${selected ? 'selected' : ''}`}
            onClick={() => selectRadio(group, value)}
        >
            <input className="sr-only" name={group} type="radio" value={value} checked={selected} readOnly />
            <span className="w-3.5 h-3.5 rounded-full border-2 border-white/30 flex items-center justify-center">
                <span
                    className="w-1.5 h-1.5 rounded-full bg-white transition-transform"
                    style={{ transform: selected ? 'scale(1)' : 'scale(0)' }}
                />
            </span>
            <span className="text-sm font-light">{label}</span>
        </label>
    );

    /* ── Success State ──────────────────────── */
    if (submitted) {
        return (
            <section className="relative min-h-screen flex items-center justify-center pt-28 pb-32 px-4">
                {/* Background */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-red-600 rounded-full opacity-15 blur-[150px] animate-glow-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-red-800 rounded-full opacity-10 blur-[120px] animate-glow-pulse-delayed" />
                </div>

                <div className="relative z-10 w-full max-w-3xl mx-auto">
                    <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
                        <div className="flex flex-col items-center justify-center py-16 text-center">
                            <div className="w-20 h-20 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-8">
                                <span className="material-symbols-outlined text-4xl text-white">check_circle</span>
                            </div>
                            <h3 className="text-3xl font-thin mb-3">
                                Registration <span className="font-bold">Received</span>
                            </h3>
                            <p className="text-white/60 font-light max-w-md mb-8">
                                Thank you for registering for IITM MUN 2026! We'll send a confirmation to your email
                                shortly.
                            </p>
                            <Link
                                to="/"
                                className="px-8 py-3 border border-white/30 rounded-full text-[11px] font-bold tracking-[0.15em] uppercase hover:bg-white hover:text-primary transition-all duration-300"
                            >
                                Back to Home
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    /* ── Form ────────────────────────────────── */
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-28 pb-32 px-4">
            {/* Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-red-600 rounded-full opacity-15 blur-[150px] animate-glow-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-red-800 rounded-full opacity-10 blur-[120px] animate-glow-pulse-delayed" />
                <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay" />
            </div>

            <div className="relative z-10 w-full max-w-3xl mx-auto">
                {/* Header */}
                <div className="text-center mb-14">
                    <span className="text-[10px] tracking-[0.4em] uppercase text-white/50 mb-4 block">
                        Delegate Registration
                    </span>
                    <h1 className="text-5xl md:text-6xl font-thin leading-tight mb-4">
                        Join the <span className="font-bold uppercase tracking-widest">Dialogue</span>
                    </h1>
                    <div className="h-px w-24 bg-white/30 mx-auto my-6" />
                    <p className="text-white/60 font-light text-base max-w-lg mx-auto leading-relaxed">
                        Secure your place among the next generation of global leaders. Fill in your details below to
                        register for IITM MUN 2026.
                    </p>
                </div>

                {/* Form Card */}
                <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
                    <form onSubmit={handleSubmit}>
                        {/* Error Message */}
                        {error && (
                            <div className="mb-8 p-4 bg-red-900/40 border border-red-500/30 rounded-xl text-sm text-red-200 font-light">
                                {error}
                            </div>
                        )}

                        {/* Personal Information */}
                        <div className="mb-10">
                            <h3 className="text-xs tracking-[0.3em] uppercase text-white/50 mb-6 flex items-center gap-3">
                                <span className="material-symbols-outlined text-base">person</span>
                                Personal Information
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-[11px] tracking-wider uppercase text-white/40 mb-2 font-medium">
                                        Full Name *
                                    </label>
                                    <input
                                        className="form-input-style"
                                        name="fullName"
                                        placeholder="Enter your full name"
                                        required
                                        type="text"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label className="block text-[11px] tracking-wider uppercase text-white/40 mb-2 font-medium">
                                        Email Address *
                                    </label>
                                    <input
                                        className="form-input-style"
                                        name="email"
                                        placeholder="you@example.com"
                                        required
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label className="block text-[11px] tracking-wider uppercase text-white/40 mb-2 font-medium">
                                        Phone Number *
                                    </label>
                                    <input
                                        className="form-input-style"
                                        name="phone"
                                        placeholder="+91 XXXXX XXXXX"
                                        required
                                        type="tel"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label className="block text-[11px] tracking-wider uppercase text-white/40 mb-2 font-medium">
                                        Institution / College *
                                    </label>
                                    <input
                                        className="form-input-style"
                                        name="institution"
                                        placeholder="Your institution name"
                                        required
                                        type="text"
                                        value={formData.institution}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Delegation Details */}
                        <div className="mb-10">
                            <h3 className="text-xs tracking-[0.3em] uppercase text-white/50 mb-6 flex items-center gap-3">
                                <span className="material-symbols-outlined text-base">groups</span>
                                Delegation Details
                            </h3>

                            <div className="mb-6">
                                <label className="block text-[11px] tracking-wider uppercase text-white/40 mb-3 font-medium">
                                    Delegation Type *
                                </label>
                                <div className="grid grid-cols-2 gap-4">
                                    <RadioCard
                                        group="delegationType"
                                        value="individual"
                                        label="Individual"
                                        sublabel="₹1200 per delegate"
                                        selected={formData.delegationType === 'individual'}
                                    />
                                    <RadioCard
                                        group="delegationType"
                                        value="institution"
                                        label="Institution"
                                        sublabel="Group discount available"
                                        selected={formData.delegationType === 'institution'}
                                    />
                                </div>
                            </div>

                            <div className="mb-6">
                                <label className="block text-[11px] tracking-wider uppercase text-white/40 mb-2 font-medium">
                                    Committee Preference *
                                </label>
                                <select
                                    className="form-input-style"
                                    name="committee"
                                    required
                                    value={formData.committee}
                                    onChange={handleChange}
                                >
                                    <option disabled value="">Select your preferred committee</option>
                                    <option value="unsc">UNSC — United Nations Security Council</option>
                                    <option value="disec">DISEC — Disarmament &amp; International Security</option>
                                    <option value="unhrc">UNHRC — United Nations Human Rights Council</option>
                                    <option value="crisis">Crisis Committee</option>
                                </select>
                            </div>

                            {formData.delegationType === 'institution' && (
                                <div>
                                    <label className="block text-[11px] tracking-wider uppercase text-white/40 mb-2 font-medium">
                                        Number of Delegates *
                                    </label>
                                    <input
                                        className="form-input-style"
                                        name="delegatesCount"
                                        min="2"
                                        placeholder="e.g. 10"
                                        required
                                        type="number"
                                        value={formData.delegatesCount}
                                        onChange={handleChange}
                                    />
                                </div>
                            )}
                        </div>

                        {/* Experience & Preferences */}
                        <div className="mb-10">
                            <h3 className="text-xs tracking-[0.3em] uppercase text-white/50 mb-6 flex items-center gap-3">
                                <span className="material-symbols-outlined text-base">tune</span>
                                Experience &amp; Preferences
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="block text-[11px] tracking-wider uppercase text-white/40 mb-3 font-medium">
                                        Previous MUN Experience *
                                    </label>
                                    <div className="flex gap-4">
                                        <SmallRadioCard group="experience" value="yes" label="Yes" selected={formData.experience === 'yes'} />
                                        <SmallRadioCard group="experience" value="no" label="No" selected={formData.experience === 'no'} />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-[11px] tracking-wider uppercase text-white/40 mb-3 font-medium">
                                        Accommodation Required *
                                    </label>
                                    <div className="flex gap-4">
                                        <SmallRadioCard group="accommodation" value="yes" label="Yes" selected={formData.accommodation === 'yes'} />
                                        <SmallRadioCard group="accommodation" value="no" label="No" selected={formData.accommodation === 'no'} />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="block text-[11px] tracking-wider uppercase text-white/40 mb-2 font-medium">
                                    Special Requirements / Message
                                </label>
                                <textarea
                                    className="form-input-style resize-none"
                                    name="message"
                                    placeholder="Any dietary restrictions, accessibility needs, or questions..."
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        {/* Submit */}
                        <div className="flex flex-col items-center gap-4">
                            <button
                                className="w-full md:w-auto md:min-w-[320px] py-4 px-12 bg-white text-primary font-bold tracking-[0.15em] uppercase rounded-full hover:bg-opacity-90 hover:scale-[1.02] transition-all duration-300 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                                type="submit"
                                disabled={loading}
                            >
                                {loading ? 'Submitting...' : 'Submit Registration'}
                            </button>
                            <p className="text-[10px] text-white/30 tracking-wider">
                                By registering, you agree to our{' '}
                                <a className="underline hover:text-white/50 transition-colors" href="#">
                                    Terms &amp; Conditions
                                </a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
