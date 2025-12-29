import { motion } from "motion/react";
import { riseUpAnimation } from "../lib/animations";

export function EngInvite() {
    return (
        <section
            className="w-full py-20 px-8"
            style={{ backgroundColor: "#F5F1E8" }}
        >
            <div className="max-w-4xl mx-auto text-center">
                {/* Header */}
                <motion.h1
                    className="text-6xl mb-16"
                    style={{
                        fontFamily: "RTL Ansam, serif",
                        fontWeight: "normal",
                    }}
                    {...riseUpAnimation}
                >
                    Wedding Invitation
                </motion.h1>

                {/* Groom */}
                <div className="mb-12">
                    <motion.h2
                        className="text-5xl mb-4"
                        style={{
                            fontFamily: "RTL Ansam, serif",
                            fontWeight: "normal",
                        }}
                        {...riseUpAnimation}
                    >
                        Thar Htoo
                    </motion.h2>
                    <motion.p
                        className="text-base mb-1"
                        style={{ fontFamily: "Marcellus, serif" }}
                        {...riseUpAnimation}
                    >
                        (B.A English, Dip in Web Development)
                    </motion.p>
                    <motion.p
                        className="text-base mb-4"
                        style={{ fontFamily: "Marcellus, serif" }}
                        {...riseUpAnimation}
                    >
                        Son of: U Htein Win + Daw Tin Tin Htay
                    </motion.p>
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="w-16 h-px bg-gray-400"></div>
                        <span className="text-gray-400">❦</span>
                        <div className="w-16 h-px bg-gray-400"></div>
                    </div>
                </div>

                {/* Bride */}
                <div className="mb-16">
                    <motion.h2
                        className="text-5xl mb-4"
                        style={{
                            fontFamily: "RTL Ansam, serif",
                            fontWeight: "normal",
                        }}
                        {...riseUpAnimation}
                    >
                        Yunandar
                    </motion.h2>
                    <motion.p
                        className="text-base mb-1"
                        style={{ fontFamily: "Marcellus, serif" }}
                        {...riseUpAnimation}
                    >
                        (B.A English)
                    </motion.p>
                    <motion.p
                        className="text-base mb-4"
                        style={{ fontFamily: "Marcellus, serif" }}
                        {...riseUpAnimation}
                    >
                        Daughter of: U Hla Kyaing + Daw Tin Kyi
                    </motion.p>
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="w-16 h-px bg-gray-400"></div>
                        <span className="text-gray-400">❦</span>
                        <div className="w-16 h-px bg-gray-400"></div>
                    </div>
                </div>

                {/* Invitation Text */}
                <motion.p
                    className="text-lg max-w-2xl mx-auto leading-relaxed"
                    style={{ fontFamily: "Marcellus, serif" }}
                    {...riseUpAnimation}
                >
                    Together with our families, we cordially invite you to join
                    us as we celebrate our marriage.
                </motion.p>
            </div>
        </section>
    );
}
