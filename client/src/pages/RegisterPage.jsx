import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import theme from '../config/theme';

const API_URL = `${import.meta.env.VITE_API_URL || ''}/api/register`;

const COMMITTEES = [
    { value: 'unga', label: 'UNGA — United Nations General Assembly' },
    { value: 'crisis', label: 'Crisis Committee — AI, Surveillance & Privacy' },
    { value: 'wto_ctd', label: 'WTO CTD — Committee on Trade and Development' },
    { value: 'pm_council', label: "PM Council — Prime Minister's Council" },
    { value: 'intl_press', label: 'International Press' },
];

const DELEGATE_FEE = 1500;
const ACCOMMODATION_FEE = 1800;

/* ─── Empty delegate template ─── */
const emptyDelegate = () => ({
    name: '',
    email: '',
    classYear: '',
    institution: '',
    rollNumber: '',
    collegeIdFile: null,
    age: '',
    phone: '',
    munExperience: '',
    committeePref1: '',
    portfolioPref1: '',
    committeePref2: '',
    portfolioPref2: '',
    accommodation: '',
});

export default function RegisterPage() {
    const [searchParams] = useSearchParams();
    const initialType = searchParams.get('type') === 'group' ? 'group' : 'individual';

    const [regType, setRegType] = useState(initialType);
    const [groupCount, setGroupCount] = useState(2);
    const [delegates, setDelegates] = useState([emptyDelegate()]);

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    // Sync delegate array length with groupCount
    useEffect(() => {
        if (regType === 'individual') {
            setDelegates([delegates[0] || emptyDelegate()]);
        } else {
            const count = Math.max(2, groupCount);
            setDelegates((prev) => {
                const arr = [...prev];
                while (arr.length < count) arr.push(emptyDelegate());
                return arr.slice(0, count);
            });
        }
    }, [regType, groupCount]);

    /* ─── Delegate field updater ─── */
    const updateDelegate = (idx, field, value) => {
        setDelegates((prev) => {
            const copy = [...prev];
            copy[idx] = { ...copy[idx], [field]: value };
            return copy;
        });
    };

    /* ─── Fee calculation ─── */
    const delegateCount = regType === 'individual' ? 1 : groupCount;
    const accommodationCount = delegates.filter((d) => d.accommodation === 'yes').length;
    const totalFee = delegateCount * DELEGATE_FEE + accommodationCount * ACCOMMODATION_FEE;

    /* ─── Submit ─── */
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const payload = {
                registrationType: regType,
                delegates: delegates.map(({ collegeIdFile, ...rest }) => rest),
            };

            const res = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.message || 'Registration failed');

            setSubmitted(true);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    /* ─── Radio helper ─── */
    const RadioCard = ({ selected, onClick, label, sublabel }) => (
        <label
            className={`radio-card flex items-center gap-3 cursor-pointer ${selected ? 'selected' : ''}`}
            onClick={onClick}
        >
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

    /* ─── Success State ─── */
    if (submitted) {
        return (
            <section className="relative min-h-screen flex items-center justify-center pt-28 pb-32 px-4">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className={`absolute top-1/4 left-1/4 w-[500px] h-[500px] ${theme.registerGlow1} rounded-full opacity-15 blur-[150px] animate-glow-pulse`} />
                    <div className={`absolute bottom-1/4 right-1/4 w-[400px] h-[400px] ${theme.registerGlow2} rounded-full opacity-10 blur-[120px] animate-glow-pulse-delayed`} />
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
                            <p className="text-white/60 font-light max-w-md mb-4">
                                Thank you for registering for Sabha MUN 2026!
                            </p>
                            <div className="bg-white/5 border border-white/10 rounded-xl p-6 max-w-md mb-8">
                                <p className="text-white/70 font-light text-sm leading-relaxed">
                                    <span className="material-symbols-outlined text-sm align-middle mr-1">info</span>
                                    A <strong>payment link</strong> will be sent to your registered email.
                                    Your registration will be confirmed once payment is completed.
                                    A <strong>final confirmation email</strong> will follow.
                                </p>
                            </div>
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

    /* ─── Form ─── */
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-28 pb-32 px-4">
            {/* Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className={`absolute top-1/4 left-1/4 w-[500px] h-[500px] ${theme.registerGlow1} rounded-full opacity-15 blur-[150px] animate-glow-pulse`} />
                <div className={`absolute bottom-1/4 right-1/4 w-[400px] h-[400px] ${theme.registerGlow2} rounded-full opacity-10 blur-[120px] animate-glow-pulse-delayed`} />
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
                        Secure your place at Sabha MUN 2026. Fill in your details below.
                    </p>
                    <p className="text-white/40 text-xs mt-2">
                        Eligibility: College Students · 18–19 April 2026 · IIT Madras
                    </p>
                </div>

                {/* Form Card */}
                <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
                    <form onSubmit={handleSubmit}>
                        {/* Error */}
                        {error && (
                            <div className="mb-8 p-4 bg-red-900/40 border border-red-500/30 rounded-xl text-sm text-red-200 font-light">
                                {error}
                            </div>
                        )}

                        {/* ─── Registration Type ─── */}
                        <div className="mb-10">
                            <h3 className="text-xs tracking-[0.3em] uppercase text-white/50 mb-6 flex items-center gap-3">
                                <span className="material-symbols-outlined text-base">how_to_reg</span>
                                Registration Type
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                <RadioCard
                                    selected={regType === 'individual'}
                                    onClick={() => setRegType('individual')}
                                    label="Individual"
                                    sublabel={`₹${DELEGATE_FEE.toLocaleString()} per delegate`}
                                />
                                <RadioCard
                                    selected={regType === 'group'}
                                    onClick={() => setRegType('group')}
                                    label="Group"
                                    sublabel="Register multiple delegates"
                                />
                            </div>
                        </div>

                        {/* ─── Group Count ─── */}
                        {regType === 'group' && (
                            <div className="mb-10">
                                <label className="block text-[11px] tracking-wider uppercase text-white/40 mb-3 font-medium">
                                    Number of Delegates *
                                </label>
                                <div className="flex items-center gap-4">
                                    <button
                                        type="button"
                                        onClick={() => setGroupCount(Math.max(2, groupCount - 1))}
                                        className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-white/10 transition-colors text-lg font-light disabled:opacity-30 disabled:cursor-not-allowed"
                                        disabled={groupCount <= 2}
                                    >
                                        −
                                    </button>
                                    <span className="text-2xl font-thin tabular-nums text-white min-w-[3ch] text-center">
                                        {groupCount}
                                    </span>
                                    <button
                                        type="button"
                                        onClick={() => setGroupCount(Math.min(50, groupCount + 1))}
                                        className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-white/10 transition-colors text-lg font-light disabled:opacity-30 disabled:cursor-not-allowed"
                                        disabled={groupCount >= 50}
                                    >
                                        +
                                    </button>
                                </div>
                                <p className="text-[10px] text-white/30 mt-2">
                                    {groupCount} delegate form(s) will appear below.
                                </p>
                            </div>
                        )}

                        {/* ─── Delegate Forms ─── */}
                        {delegates.map((d, idx) => (
                            <DelegateForm
                                key={idx}
                                idx={idx}
                                total={delegates.length}
                                data={d}
                                onChange={(field, val) => updateDelegate(idx, field, val)}
                                RadioCard={RadioCard}
                            />
                        ))}

                        {/* ─── Fee Summary ─── */}
                        <div className="mt-10 bg-white/5 border border-white/10 rounded-xl p-6">
                            <h3 className="text-xs tracking-[0.3em] uppercase text-white/50 mb-4 flex items-center gap-3">
                                <span className="material-symbols-outlined text-base">receipt_long</span>
                                Fee Summary
                            </h3>
                            <div className="space-y-2 text-sm font-light">
                                <div className="flex justify-between">
                                    <span className="text-white/60">Early Bird Delegate Fee (×{delegateCount})</span>
                                    <span className="text-white">₹{(delegateCount * DELEGATE_FEE).toLocaleString()}</span>
                                </div>
                                {accommodationCount > 0 && (
                                    <div className="flex justify-between">
                                        <span className="text-white/60">Accommodation (×{accommodationCount})</span>
                                        <span className="text-white">₹{(accommodationCount * ACCOMMODATION_FEE).toLocaleString()}</span>
                                    </div>
                                )}
                                <div className="h-px bg-white/10 my-3" />
                                <div className="flex justify-between text-lg font-medium">
                                    <span>Total</span>
                                    <span>₹{totalFee.toLocaleString()}</span>
                                </div>
                            </div>
                        </div>

                        {/* ─── Payment Notice ─── */}
                        <div className="mt-6 bg-white/5 border border-white/10 rounded-xl p-5">
                            <div className="flex gap-3 items-start">
                                <span className="material-symbols-outlined text-base text-white/50 mt-0.5">info</span>
                                <div className="text-xs text-white/50 font-light leading-relaxed">
                                    <p className="mb-1">
                                        <strong className="text-white/70">Payment Process:</strong> A payment link will be sent
                                        to your registered email. All payments must be made to the <strong className="text-white/70">Student Activities Trust IIT Madras</strong>.
                                    </p>
                                    <p className="mb-1">
                                        Your registration is <strong className="text-white/70">confirmed only after payment</strong>.
                                        Lunch is provided for all delegates on conference days.
                                    </p>
                                    <p>
                                        For queries, contact <strong className="text-white/70">ppc@smail.iitm.ac.in</strong>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* ─── Submit ─── */}
                        <div className="mt-10 flex flex-col items-center gap-4">
                            <button
                                className="w-full md:w-auto md:min-w-[320px] py-4 px-12 bg-white text-primary font-bold tracking-[0.15em] uppercase rounded-full hover:bg-opacity-90 hover:scale-[1.02] transition-all duration-300 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                                type="submit"
                                disabled={loading}
                            >
                                {loading ? 'Submitting...' : 'Submit Registration'}
                            </button>
                            <p className="text-[10px] text-white/30 tracking-wider">
                                By registering, you agree to our{' '}
                                <Link className="underline hover:text-white/50 transition-colors" to="/terms">
                                    Terms &amp; Conditions
                                </Link>
                                {' '}and Campus Rules.
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

/* ─── Per-delegate form block ─── */
function DelegateForm({ idx, total, data, onChange, RadioCard }) {
    return (
        <div className={`${total > 1 ? 'mb-10 pb-10 border-b border-white/10' : 'mb-6'}`}>
            {total > 1 && (
                <h3 className="text-sm font-bold tracking-widest uppercase text-white/70 mb-6 flex items-center gap-2">
                    <span className="material-symbols-outlined text-base">person</span>
                    Delegate {idx + 1} of {total}
                </h3>
            )}

            {/* Personal Information */}
            <div className="mb-8">
                <h4 className="text-xs tracking-[0.3em] uppercase text-white/50 mb-6 flex items-center gap-3">
                    <span className="material-symbols-outlined text-base">person</span>
                    Personal Information
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                        <label className="block text-[11px] tracking-wider uppercase text-white/40 mb-2 font-medium">Name *</label>
                        <input className="form-input-style" type="text" placeholder="Full name" required value={data.name} onChange={(e) => onChange('name', e.target.value)} />
                    </div>
                    <div>
                        <label className="block text-[11px] tracking-wider uppercase text-white/40 mb-2 font-medium">Email Id *</label>
                        <input className="form-input-style" type="email" placeholder="you@example.com" required value={data.email} onChange={(e) => onChange('email', e.target.value)} />
                    </div>
                    <div>
                        <label className="block text-[11px] tracking-wider uppercase text-white/40 mb-2 font-medium">Class/Year *</label>
                        <input className="form-input-style" type="text" placeholder="e.g. 2nd Year B.Tech" required value={data.classYear} onChange={(e) => onChange('classYear', e.target.value)} />
                    </div>
                    <div>
                        <label className="block text-[11px] tracking-wider uppercase text-white/40 mb-2 font-medium">Institution *</label>
                        <input className="form-input-style" type="text" placeholder="Your institution name" required value={data.institution} onChange={(e) => onChange('institution', e.target.value)} />
                    </div>
                    <div>
                        <label className="block text-[11px] tracking-wider uppercase text-white/40 mb-2 font-medium">College Roll Number / ID Number</label>
                        <input className="form-input-style" type="text" placeholder="Optional" value={data.rollNumber} onChange={(e) => onChange('rollNumber', e.target.value)} />
                    </div>
                    <div>
                        <label className="block text-[11px] tracking-wider uppercase text-white/40 mb-2 font-medium">College ID Card Upload</label>
                        <input
                            className="form-input-style file:mr-4 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-xs file:font-medium file:bg-white/10 file:text-white hover:file:bg-white/20"
                            type="file"
                            accept="image/*,.pdf"
                            onChange={(e) => onChange('collegeIdFile', e.target.files[0] || null)}
                        />
                    </div>
                    <div>
                        <label className="block text-[11px] tracking-wider uppercase text-white/40 mb-2 font-medium">Age *</label>
                        <input className="form-input-style" type="number" min="15" max="40" placeholder="Your age" required value={data.age} onChange={(e) => onChange('age', e.target.value)} />
                    </div>
                    <div>
                        <label className="block text-[11px] tracking-wider uppercase text-white/40 mb-2 font-medium">Contact No *</label>
                        <input className="form-input-style" type="tel" placeholder="+91 XXXXX XXXXX" required value={data.phone} onChange={(e) => onChange('phone', e.target.value)} />
                    </div>
                </div>
            </div>

            {/* MUN Experience */}
            <div className="mb-8">
                <h4 className="text-xs tracking-[0.3em] uppercase text-white/50 mb-6 flex items-center gap-3">
                    <span className="material-symbols-outlined text-base">military_tech</span>
                    Experience
                </h4>
                <div>
                    <label className="block text-[11px] tracking-wider uppercase text-white/40 mb-2 font-medium">
                        MUN Experience in Numbers (Write N/A if none) *
                    </label>
                    <input className="form-input-style" type="text" placeholder="e.g. 3 or N/A" required value={data.munExperience} onChange={(e) => onChange('munExperience', e.target.value)} />
                </div>
            </div>

            {/* Committee Preferences */}
            <div className="mb-8">
                <h4 className="text-xs tracking-[0.3em] uppercase text-white/50 mb-6 flex items-center gap-3">
                    <span className="material-symbols-outlined text-base">gavel</span>
                    Committee Preferences
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                        <label className="block text-[11px] tracking-wider uppercase text-white/40 mb-2 font-medium">Committee Preference 1 *</label>
                        <select className="form-input-style" required value={data.committeePref1} onChange={(e) => onChange('committeePref1', e.target.value)}>
                            <option disabled value="">Select committee</option>
                            {COMMITTEES.map((c) => (
                                <option key={c.value} value={c.value}>{c.label}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block text-[11px] tracking-wider uppercase text-white/40 mb-2 font-medium">
                            Portfolio/Country Preference 1 *
                        </label>
                        <input className="form-input-style" type="text" placeholder="For IP: Journalist/Photographer/Caricaturist" required value={data.portfolioPref1} onChange={(e) => onChange('portfolioPref1', e.target.value)} />
                    </div>
                    <div>
                        <label className="block text-[11px] tracking-wider uppercase text-white/40 mb-2 font-medium">Committee Preference 2 *</label>
                        <select className="form-input-style" required value={data.committeePref2} onChange={(e) => onChange('committeePref2', e.target.value)}>
                            <option disabled value="">Select committee</option>
                            {COMMITTEES.map((c) => (
                                <option key={c.value} value={c.value}>{c.label}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block text-[11px] tracking-wider uppercase text-white/40 mb-2 font-medium">
                            Portfolio/Country Preference 2 *
                        </label>
                        <input className="form-input-style" type="text" placeholder="For IP: Journalist/Photographer/Caricaturist" required value={data.portfolioPref2} onChange={(e) => onChange('portfolioPref2', e.target.value)} />
                    </div>
                </div>
            </div>

            {/* Accommodation */}
            <div>
                <h4 className="text-xs tracking-[0.3em] uppercase text-white/50 mb-6 flex items-center gap-3">
                    <span className="material-symbols-outlined text-base">hotel</span>
                    Accommodation
                </h4>
                <label className="block text-[11px] tracking-wider uppercase text-white/40 mb-3 font-medium">
                    Accommodation Required? (₹{ACCOMMODATION_FEE.toLocaleString()}) *
                </label>
                <div className="flex gap-4">
                    <RadioCard selected={data.accommodation === 'yes'} onClick={() => onChange('accommodation', 'yes')} label="Yes" />
                    <RadioCard selected={data.accommodation === 'no'} onClick={() => onChange('accommodation', 'no')} label="No" />
                </div>
            </div>
        </div>
    );
}
