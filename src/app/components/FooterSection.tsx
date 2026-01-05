import { motion } from "motion/react";
import { riseUpAnimation } from "../lib/animations";

export function FooterSection() {
    return (
        <section
            className="w-full py-28 px-6 md:px-8"
            style={{ backgroundColor: "#F5F1E8" }}
        >
            <div className="max-w-6xl mx-auto flex flex-col items-center">
                <motion.h2
                    className="text-center tracking-wide"
                    style={{
                        fontFamily: "New Icon Serif, Marcellus, serif",
                        fontSize: "3.25rem",
                        lineHeight: 1.1,
                        letterSpacing: "0.05em",
                        color: "#2F2A25",
                    }}
                    {...riseUpAnimation}
                >
                    WE CAN'T WAIT
                </motion.h2>
                <motion.p
                    className="mt-3 text-center italic"
                    style={{
                        fontFamily: "Custom Font,Marcellus, serif",
                        fontSize: "3rem",
                        color: "#2F2A25",
                    }}
                    {...riseUpAnimation}
                >
                    to be Husband & Wife
                </motion.p>

                {/* <div className="mt-6 mb-12 flex items-center gap-3 text-[#A69480]">
                    <span className="inline-block w-16 h-px bg-[#A69480]/50" />
                    <span className="text-xl">❦</span>
                    <span className="inline-block w-16 h-px bg-[#A69480]/50" />
                </div> */}

                <div className="w-full flex justify-center">
                    <motion.div
                        className="max-w-3xl w-full rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5 bg-white"
                        {...riseUpAnimation}
                    >
                        <img
                            src="/images/slider-images/image-37.jpg"
                            alt="Couple"
                            className="w-full h-auto object-cover"
                            style={{ objectPosition: "center" }}
                        />
                    </motion.div>
                </div>

                <div className="mt-12 w-full">
                    <div className="mx-auto max-w-3xl rounded-xl p-6 md:p-8 bg-gradient-to-r from-[#F0E7D8] via-[#EFE6D7] to-[#F0E7D8] text-center shadow-sm ring-1 ring-black/5">
                        <motion.p
                            style={{
                                fontFamily: "Marcellus, serif",
                                fontSize: "1.125rem",
                                color: "#2F2A25",
                                lineHeight: 1.7,
                            }}
                            {...riseUpAnimation}
                        >
                            Thank you for sharing in our joy and being a part of
                            our story. <br />
                            With love and gratitude, we’ll see you on the big
                            day.
                        </motion.p>
                    </div>
                </div>
            </div>
        </section>
    );
}
