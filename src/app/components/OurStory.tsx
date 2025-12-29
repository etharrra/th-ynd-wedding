import { motion } from "motion/react";
import { riseUpAnimation } from "../lib/animations";

export function OurStory() {
    return (
        <section
            className="w-full py-20 px-8"
            style={{ backgroundColor: "#F5F1E8" }}
        >
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Left side - Text content */}
                    <div className="lg:col-span-4 flex flex-col">
                        <motion.h2
                            className="mb-12"
                            style={{
                                fontFamily: "Parfumerie Script, cursive",
                                fontSize: "4rem",
                                lineHeight: "1.2",
                            }}
                            {...riseUpAnimation}
                        >
                            Our Story
                        </motion.h2>

                        <motion.p
                            style={{
                                fontFamily: "Marcellus, serif",
                                fontSize: "0.9rem",
                                lineHeight: "1.8",
                                textAlign: "justify",
                            }}
                            {...riseUpAnimation}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Ut a massa est. Aliquam fermentum mauris sit
                            amet felis scelerisque vehicula. Phasellus mattis
                            porttitor nisl, a pulvinar enim dictum ut. Duis
                            volutpat ornare sem. Ut porttitor vulputate nulla
                            eget euismod est gravida ut. Proin vitae volutpat
                            ligula, vel porttitor dui. Nam eget eros risus.
                        </motion.p>
                    </div>

                    {/* Center - Large photo */}
                    <div className="lg:col-span-4">
                        <motion.img
                            src="/images/couple-1.jpg"
                            alt="Couple intimate moment"
                            className="w-full h-auto"
                            {...riseUpAnimation}
                        />
                    </div>

                    {/* Right side - Small photo */}
                    <div className="lg:col-span-3">
                        <motion.img
                            src="/images/couple-2.jpg"
                            alt="Wedding couple"
                            className="w-full h-auto max-w-xs mx-auto"
                            {...riseUpAnimation}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
