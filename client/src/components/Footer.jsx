export default function Footer() {
    return (
        <footer className="bg-[#1a0000] text-white/60 py-20 px-6 border-t border-white/5" id="footer">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
                {/* Brand */}
                <div>
                    <h4 className="text-white text-lg font-bold mb-6 tracking-widest uppercase">IITM MUN 2026</h4>
                    <p className="text-xs font-light leading-loose max-w-xs">
                        The premier Model United Nations conference of the Indian Institute of Technology Madras.
                        Fostering diplomacy, leadership, and global awareness since 2012.
                    </p>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="text-white text-lg font-bold mb-6 tracking-widest uppercase">Contact Us</h4>
                    <div className="space-y-4 text-xs font-light">
                        <p className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-sm">mail</span>
                            secretariat@iitmmun.org
                        </p>
                        <p className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-sm">phone</span>
                            +91 98765 43210
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
                        {['camera_alt', 'work', 'flutter_dash'].map((icon) => (
                            <a
                                key={icon}
                                href="#"
                                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300"
                            >
                                <span className="material-symbols-outlined text-xl">{icon}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-[10px] uppercase tracking-widest opacity-40">
                    © 2026 IIT Madras Model United Nations. All Rights Reserved.
                </div>
                <div className="flex items-center gap-8 text-[10px] uppercase tracking-[0.2em]">
                    <a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
                    <a className="hover:text-white transition-colors" href="#">Terms &amp; Conditions</a>
                    <a className="hover:text-white transition-colors" href="#">Sponsors</a>
                </div>
            </div>
        </footer>
    );
}
