import { useEffect, useState } from 'react';

const sections = [
    { id: 'about', label: 'About' },
    { id: 'committees', label: 'Committees' },
    { id: 'register', label: 'Register' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
];

export default function SidebarTracker() {
    const [active, setActive] = useState('');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
                if (visible.length > 0) {
                    setActive(visible[0].target.id);
                }
            },
            { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
        );

        sections.forEach((s) => {
            const el = document.getElementById(s.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="sidebar-tracker">
            {sections.map((s, i) => (
                <div key={s.id} className="relative flex flex-col items-center">
                    {i > 0 && (
                        <div
                            className="track-line"
                            style={{
                                background: active === s.id || active === sections[i - 1]?.id
                                    ? 'rgba(255,255,255,0.5)'
                                    : undefined,
                            }}
                        />
                    )}
                    <div
                        className={`track-dot ${active === s.id ? 'active' : ''}`}
                        onClick={() => scrollTo(s.id)}
                    />
                    <span className="track-label">{s.label}</span>
                </div>
            ))}
        </div>
    );
}
