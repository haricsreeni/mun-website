import { Link } from 'react-router-dom';
import theme from '../config/theme';

export default function Footer() {
    return (
        <footer style={{ backgroundColor: theme.footerBg }} className="text-white/60 py-20 px-6 border-t border-white/5" id="footer">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
                {/* Brand */}
                <div>
                    <h4 className="text-white text-lg font-bold mb-6 tracking-widest uppercase">Sabha MUN 2026</h4>
                    <p className="text-xs font-light leading-loose max-w-xs">
                        The premier Model United Nations conference of the Indian Institute of Technology Madras.
                        Fostering diplomacy, leadership, and global awareness.
                    </p>
                    <div className="mt-4 space-y-1 text-xs font-light">
                        <p>📅 Inauguration: 17th April, 7 PM</p>
                        <p>📅 Conference: 18–19 April 2026</p>
                        <p>📍 IIT Madras, Chennai</p>
                    </div>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="text-white text-lg font-bold mb-6 tracking-widest uppercase">Contact Us</h4>
                    <div className="space-y-4 text-xs font-light">
                        <p className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-sm">mail</span>
                            ppc@smail.iitm.ac.in
                        </p>
                        <p className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-sm">phone</span>
                            Maria Peeter (Secretary General): +91 8606507583
                        </p>
                        <p className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-sm">phone</span>
                            Ganesha (Director General): +91 6360664478
                        </p>
                        <p className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-sm mt-1">location_on</span>
                            <span>
                                Indian Institute of Technology Madras,<br />
                                Chennai, Tamil Nadu 600036
                            </span>
                        </p>
                    </div>
                </div>

                {/* Social */}
                <div>
                    <h4 className="text-white text-lg font-bold mb-6 tracking-widest uppercase">Connect</h4>
                    <div className="flex items-center gap-4">
                        <a
                            href="https://www.instagram.com/sabha.mun.iitm/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300"
                        >
                            <span className="material-symbols-outlined text-xl">camera_alt</span>
                        </a>
                    </div>
                    <p className="text-[10px] text-white/40 mt-3">@sabha.mun.iitm</p>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-[10px] uppercase tracking-widest opacity-40">
                    © 2026 Sabha Model United Nations, IIT Madras. All Rights Reserved.
                </div>
                <div className="flex items-center gap-8 text-[10px] uppercase tracking-[0.2em]">
                    <a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
                    <Link to="/terms" className="hover:text-white transition-colors">Terms &amp; Conditions</Link>
                </div>
            </div>
        </footer>
    );
}
