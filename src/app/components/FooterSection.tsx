import { motion } from "motion/react";
import { riseUpAnimation } from "../lib/animations";

export function FooterSection() {
    return (
        <section
            className="w-full py-24 px-6 md:px-8"
            style={{ backgroundColor: "#F5F1E8" }}
        >
            <div className="max-w-6xl mx-auto flex flex-col items-center">
                <motion.h2
                    className="text-center tracking-wide"
                    style={{
                        fontFamily: "New Icon Serif, Marcellus, serif",
                        fontSize: "3rem",
                        lineHeight: 1.1,
                        letterSpacing: "0.04em",
                        color: "#2F2A25",
                    }}
                    {...riseUpAnimation}
                >
                    WE CAN'T WAIT
                </motion.h2>
                <motion.p
                    className="mt-2 mb-12 text-center italic"
                    style={{
                        fontFamily: "Custom Font,Marcellus, serif",
                        fontSize: "3rem",
                        color: "#2F2A25",
                    }}
                    {...riseUpAnimation}
                >
                    to be Husband & Wife
                </motion.p>

                <div className="w-full flex justify-center">
                    <div className="bg-white/0" style={{ padding: 0 }}>
                        <motion.img
                            src="/images/footer-img.jpg"
                            alt="Couple"
                            className="object-cover"
                            style={{
                                width: "640px",
                                height: "360px",
                                objectPosition: "center",
                            }}
                            {...riseUpAnimation}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
