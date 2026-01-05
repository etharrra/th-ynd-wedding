import { motion } from "motion/react";
import { riseUpAnimation } from "../lib/animations";

export function HeroSection() {
    return (
        <section className="relative w-full h-screen overflow-hidden">
            {/* Background Image */}
            <img
                src="/images/hero-img.jpg"
                alt="Wedding couple"
                className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 flex justify-center md:hidden">
                <motion.h1
                    className="text-white text-7xl font-bold text-center"
                    style={{
                        fontFamily: "RTL Ansam, serif",
                        fontWeight: "normal",
                        textTransform: "uppercase",
                        letterSpacing: "2px",
                        textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                        marginTop: "4.8rem",
                    }}
                    {...riseUpAnimation}
                >
                    Thar <br /> &amp; <br />
                    Yu
                </motion.h1>
            </div>

            {/* Desktop Title */}
            <div className="absolute inset-0 hidden md:flex justify-center">
                <motion.h1
                    className="text-white text-9xl font-bold text-center"
                    style={{
                        fontFamily: "RTL Ansam, serif",
                        fontWeight: "normal",
                        textTransform: "uppercase",
                        letterSpacing: "3px",
                        textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                        marginTop: "9rem",
                        marginRight: "6.5rem",
                    }}
                    {...riseUpAnimation}
                >
                    Thar &amp; Yu
                </motion.h1>
            </div>

            {/* Bottom Right Text */}
            <div
                className="absolute bottom-12 right-12 text-right text-white"
                style={{ fontFamily: "Optima, sans-serif", fontWeight: "bold" }}
            >
                <p className="text-lg tracking-wide mb-1">January 18 2025</p>
                <p className="text-xl tracking-wider">#TharAndYuForever</p>
            </div>
        </section>
    );
}
