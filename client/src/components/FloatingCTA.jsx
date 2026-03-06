import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function FloatingCTA() {
    return (
        <motion.div
            className="floating-cta-wrapper"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
            <Link to="/register" className="floating-cta" aria-label="Register now">
                <div className="floating-cta-content">
                    <span className="floating-cta-date">18–19 April</span>
                    <span className="floating-cta-sub">In-Person</span>
                    <span className="floating-cta-main">Register now</span>
                </div>
            </Link>
        </motion.div>
    );
}
