import { useEffect } from 'react';
import { motion } from 'framer-motion';
import theme from '../config/theme';

export default function TermsPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="relative min-h-screen pt-32 pb-24 px-4 md:px-8">
            {/* Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className={`absolute top-0 right-1/4 w-[600px] h-[600px] ${theme.heroGlow1} rounded-full opacity-10 blur-[150px]`} />
                <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] mix-blend-overlay" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl font-thin mb-4">
                        Terms & <span className="font-bold">Conditions</span>
                    </h1>
                    <div className="h-px w-24 bg-white/30 mb-12" />

                    <div className="space-y-12 text-white/80 font-light leading-relaxed">

                        {/* Section 1: General & Payments */}
                        <section>
                            <h2 className="text-xl font-medium text-white mb-4 flex items-center gap-3">
                                <span className="material-symbols-outlined text-[1.2em]" style={{ color: theme.cta }}>payments</span>
                                1. Registration & Payments
                            </h2>
                            <ul className="list-disc pl-6 space-y-3 text-sm md:text-base">
                                <li>All registration payments must be made to the <strong>Student Activities Trust IIT Madras</strong>.</li>
                                <li>Your registration is strictly provisional until the payment has been successfully completed and confirmed by our team.</li>
                                <li>Fees once paid are entirely non-refundable and non-transferable under any circumstances.</li>
                                <li>Lunch will be provided to all registered delegates on the days of the conference.</li>
                            </ul>
                        </section>

                        {/* Section 2: Accommodation */}
                        <section>
                            <h2 className="text-xl font-medium text-white mb-4 flex items-center gap-3">
                                <span className="material-symbols-outlined text-[1.2em]" style={{ color: theme.cta }}>bed</span>
                                2. Accommodation & Amenities
                            </h2>
                            <ul className="list-disc pl-6 space-y-3 text-sm md:text-base">
                                <li>Accommodation is provided inside the IIT Madras campus at the College Hostels, situated amidst serene greenery.</li>
                                <li>Delegates opting for accommodation will be provided with basic necessities, including a <strong>bed, bucket, and mug</strong>.</li>
                                <li>Delegates are required to bring their own toiletries and any other personal items they may require.</li>
                                <li>Allocation of hostels is at the sole discretion of the organizing committee and cannot be contested.</li>
                            </ul>
                        </section>

                        {/* Section 3: Campus Code of Conduct */}
                        <section>
                            <h2 className="text-xl font-medium text-white mb-4 flex items-center gap-3">
                                <span className="material-symbols-outlined text-[1.2em]" style={{ color: theme.cta }}>rule</span>
                                3. Campus Code of Conduct & Rules
                            </h2>
                            <p className="mb-4 text-sm md:text-base">
                                IIT Madras is a premier central institute. All delegates are expected to maintain the highest standards of discipline and decorum.
                            </p>
                            <ul className="list-disc pl-6 space-y-3 text-sm md:text-base">
                                <li><strong>Zero Tolerance Policy:</strong> The possession, consumption, or distribution of <strong>drugs, alcohol, and smoking</strong> is strictly prohibited on campus. Violators will face immediate expulsion from the conference and potential legal action.</li>
                                <li><strong>Institute Property:</strong> Delegates must use furniture, hostel amenities, and all institute properties with utmost care. Any structural or material damage caused by a delegate will be heavily penalized and billed to the individual.</li>
                                <li><strong>Wildlife & Flora:</strong> The IIT Madras campus is a protected forest area home to endangered wildlife (including Blackbucks and monkeys). <strong>Do not feed, approach, or harm any animals.</strong> Treat the environment with respect.</li>
                                <li><strong>Curfew & Boundaries:</strong> Delegates must adhere to specific hostel curfew timings and are heavily advised not to wander into restricted zones or deep forested areas, especially after dark.</li>
                            </ul>
                        </section>

                        {/* Section 4: General Conduct */}
                        <section>
                            <h2 className="text-xl font-medium text-white mb-4 flex items-center gap-3">
                                <span className="material-symbols-outlined text-[1.2em]" style={{ color: theme.cta }}>gavel</span>
                                4. Conference Decorum
                            </h2>
                            <ul className="list-disc pl-6 space-y-3 text-sm md:text-base">
                                <li>Delegates must adhere to Western Business Attire or formal traditional wear during the committee sessions.</li>
                                <li>The Secretariat reserves the right to expel any delegate exhibiting disruptive behavior, harassment, or violation of the MUN rules of procedure, without refund.</li>
                                <li>The decisions of the Executive Board and the Secretariat are final and binding in all committee-related matters.</li>
                            </ul>
                        </section>

                        <div className="mt-16 p-6 bg-white/5 border border-white/10 rounded-xl text-center">
                            <p className="text-sm font-medium text-white mb-2">Have questions about these terms?</p>
                            <p className="text-xs text-white/60">
                                Contact the Secretariat at <a href="mailto:ppc@smail.iitm.ac.in" className="text-white hover:underline">ppc@smail.iitm.ac.in</a>
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
