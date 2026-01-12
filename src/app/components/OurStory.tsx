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
                            className="mb-6"
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
                            Our story began in 2014, during our final year of
                            high school. I was fifteen, and she was sixteen—two
                            kids just beginning to truly see each other. We
                            started as friends, sharing late-night study
                            sessions and weekend walks, slowly realizing we were
                            building something rare.
                            <br />
                            <br />
                            Over the next ten years, we grew up together. We
                            celebrated college graduations, navigated first
                            jobs, and held each other close through quiet storms
                            and bright, unexpected joys. Life tested us, but we
                            never let go. Then, on Valentine’s Day, February 14,
                            2025, surrounded by our families, we held a private
                            engagement ceremony. In that moment, our decade-long
                            promise found its future.
                            <br />
                            <br />
                            Now, on January 18, 2026, we’ll stand before
                            everyone we love and promise forever. This isn’t
                            just the start of a marriage—it’s the beginning of
                            the next chapter in a story we’ve been writing
                            together since we were fifteen and sixteen.
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
