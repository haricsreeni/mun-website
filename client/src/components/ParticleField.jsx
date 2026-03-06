import { useMemo, useRef, useEffect, useState } from 'react';

const NODES = 30;
const CONNECTION_DIST = 220; // px

function seededRandom(seed) {
    let s = seed;
    return () => {
        s = (s * 16807 + 0) % 2147483647;
        return s / 2147483647;
    };
}

export default function ParticleField() {
    const canvasRef = useRef(null);
    const animRef = useRef(null);
    const [dimensions, setDimensions] = useState({ w: 0, h: 0 });

    const nodes = useMemo(() => {
        const rand = seededRandom(42);
        return Array.from({ length: NODES }, (_, i) => ({
            x: rand(),
            y: rand(),
            vx: (rand() - 0.5) * 0.15,
            vy: (rand() - 0.5) * 0.15,
            size: 2.5 + rand() * 3.5,
            alpha: 0.3 + rand() * 0.4,
            // subtle color variation: white, pale red, pale gold
            color: i % 3 === 0
                ? 'rgba(255,200,200,'   // pale red
                : i % 3 === 1
                    ? 'rgba(255,235,200,' // pale gold
                    : 'rgba(255,255,255,', // white
        }));
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const updateSize = () => {
            const parent = canvas.parentElement;
            const w = parent.clientWidth;
            const h = parent.clientHeight;
            canvas.width = w * window.devicePixelRatio;
            canvas.height = h * window.devicePixelRatio;
            canvas.style.width = w + 'px';
            canvas.style.height = h + 'px';
            setDimensions({ w, h });
        };

        updateSize();
        window.addEventListener('resize', updateSize);

        const positionsRef = nodes.map((n) => ({
            x: n.x,
            y: n.y,
            vx: n.vx,
            vy: n.vy,
        }));

        const ctx = canvas.getContext('2d');
        const dpr = window.devicePixelRatio;

        const animate = () => {
            const { w, h } = { w: canvas.width / dpr, h: canvas.height / dpr };
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.save();
            ctx.scale(dpr, dpr);

            // Update positions
            positionsRef.forEach((p) => {
                p.x += p.vx / w;
                p.y += p.vy / h;
                if (p.x < 0 || p.x > 1) p.vx *= -1;
                if (p.y < 0 || p.y > 1) p.vy *= -1;
                p.x = Math.max(0, Math.min(1, p.x));
                p.y = Math.max(0, Math.min(1, p.y));
            });

            // Draw connections
            for (let i = 0; i < positionsRef.length; i++) {
                for (let j = i + 1; j < positionsRef.length; j++) {
                    const ax = positionsRef[i].x * w;
                    const ay = positionsRef[i].y * h;
                    const bx = positionsRef[j].x * w;
                    const by = positionsRef[j].y * h;
                    const dist = Math.sqrt((ax - bx) ** 2 + (ay - by) ** 2);
                    if (dist < CONNECTION_DIST) {
                        const opacity = (1 - dist / CONNECTION_DIST) * 0.12;
                        ctx.beginPath();
                        ctx.moveTo(ax, ay);
                        ctx.lineTo(bx, by);
                        ctx.strokeStyle = `rgba(255,255,255,${opacity})`;
                        ctx.lineWidth = 0.8;
                        ctx.stroke();
                    }
                }
            }

            // Draw nodes
            positionsRef.forEach((p, i) => {
                const n = nodes[i];
                const cx = p.x * w;
                const cy = p.y * h;

                // Outer glow
                const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, n.size * 3);
                grad.addColorStop(0, n.color + (n.alpha * 0.3).toFixed(2) + ')');
                grad.addColorStop(1, n.color + '0)');
                ctx.beginPath();
                ctx.arc(cx, cy, n.size * 3, 0, Math.PI * 2);
                ctx.fillStyle = grad;
                ctx.fill();

                // Core dot
                ctx.beginPath();
                ctx.arc(cx, cy, n.size, 0, Math.PI * 2);
                ctx.fillStyle = n.color + n.alpha.toFixed(2) + ')';
                ctx.fill();
            });

            ctx.restore();
            animRef.current = requestAnimationFrame(animate);
        };

        animRef.current = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animRef.current);
            window.removeEventListener('resize', updateSize);
        };
    }, [nodes]);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <canvas ref={canvasRef} className="absolute inset-0" />
        </div>
    );
}
