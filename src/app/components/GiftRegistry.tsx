import { motion } from "motion/react";
import { riseUpAnimation } from "../lib/animations";

export function GiftRegistry() {
    return (
        <section
            className="w-full py-24 px-6 md:px-8"
            style={{ backgroundColor: "#F5F1E8" }}
        >
            <div className="max-w-5xl mx-auto">
                <motion.h2
                    className="text-center mb-6 tracking-wide"
                    style={{
                        fontFamily: "RTL Ansam, Marcellus, serif",
                        fontSize: "3.25rem",
                        lineHeight: 1.1,
                        fontWeight: 400,
                        color: "#2F2A25",
                    }}
                    {...riseUpAnimation}
                >
                    Gift Registry
                </motion.h2>

                <motion.p
                    className="text-center mb-12 px-2 md:px-12"
                    style={{
                        fontFamily: "Marcellus, serif",
                        color: "#2F2A25",
                    }}
                    {...riseUpAnimation}
                >
                    Your presence is the greatest gift of all. If you would like
                    to honor us with a gift, you can use the QR code below to
                    send your blessing.
                </motion.p>

                <div className="flex flex-col items-center gap-6">
                    <motion.img
                        src="/images/kpay_qr.jpg"
                        alt="Payment QR"
                        className="w-64 h-64 md:w-72 md:h-72 rounded-lg shadow-sm object-cover"
                        {...riseUpAnimation}
                    />
                    <motion.div {...riseUpAnimation}>
                        <p
                            className="text-center"
                            style={{
                                fontFamily: "Marcellus, serif",
                                color: "#2F2A25",
                            }}
                        >
                            Scan the QR code with your KBZ Pay to send a gift.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
