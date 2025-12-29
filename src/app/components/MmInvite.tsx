import { motion } from "motion/react";
import { riseUpAnimation } from "../lib/animations";

export function MmInvite() {
    return (
        <section
            className="w-full py-16 px-8"
            style={{ backgroundColor: "#F5F1E8" }}
        >
            <div className="max-w-4xl mx-auto text-center">
                {/* Main heading */}
                <motion.h1
                    className="mb-8"
                    style={{
                        fontFamily:
                            "Canva Font,Myanmar Text, Padauk, sans-serif",
                        fontSize: "2rem",
                        lineHeight: "1.4",
                    }}
                    {...riseUpAnimation}
                >
                    စုလျားရစ်ပတ်ထိမ်းမြားမင်္ဂလာဖိတ်ကြားလွှာ
                </motion.h1>

                {/* Parents information - Groom's side */}
                <motion.div
                    className="mb-6"
                    style={{
                        fontFamily:
                            "Canva Font, Myanmar Text, Padauk, sans-serif",
                        fontSize: "1rem",
                        lineHeight: "1.8",
                    }}
                    {...riseUpAnimation}
                >
                    <p>
                        ရန်ကုန်တိုင်းဒေသကြီး၊ ရွှေပြည်သာမြို့နယ်၊
                        အမှတ်(၉)ရပ်ကွက် (ဦးတင်လှိုင် + ဒေါ်ခင်မြင့်)၊
                        (ဦးကျော်ငြိမ်း + ဒေါ်ခင်သန်း) တို့၏ မြေး၊ ဦးထိန်ဝင်း +
                        ဒေါ်တင်တင်ဌေး တို့၏ တစ်ဦးတည်းသောသား
                    </p>
                </motion.div>

                {/* Groom name */}
                <motion.h2
                    className="mb-2"
                    style={{
                        fontFamily:
                            "Canva Font, Myanmar Text, Padauk, sans-serif",
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                    }}
                    {...riseUpAnimation}
                >
                    မောင်သာထူး
                </motion.h2>

                {/* Groom education */}
                <motion.p
                    className="mb-10"
                    style={{
                        fontFamily: "Canva Font, Marcellus, serif",
                        fontSize: "1rem",
                    }}
                    {...riseUpAnimation}
                >
                    B.A (English), Dip in Web Development
                </motion.p>

                {/* Divider */}
                <div className="flex items-center justify-center gap-2 mb-4">
                    <div className="w-16 h-px bg-gray-400"></div>
                    <span className="text-gray-400">❦</span>
                    <div className="w-16 h-px bg-gray-400"></div>
                </div>

                {/* Parents information - Bride's side */}
                <motion.div
                    className="mb-6"
                    style={{
                        fontFamily:
                            "Canva Font, Myanmar Text, Padauk, sans-serif",
                        fontSize: "1rem",
                        lineHeight: "1.8",
                    }}
                    {...riseUpAnimation}
                >
                    <p>
                        ရန်ကုန်တိုင်းဒေသကြီး၊ ရွှေပြည်သာမြို့နယ် (ဦးညွန့်တင် +
                        ဒေါ်လွန်းစိန်)၊ (ဦးဖိုးသစ် + ဒေါ်ကြည်) တို့၏ မြေး၊
                        (ဦးလှကြိုင် + ဒေါ်တင်ကြည်) တို့၏ သမီးထွေး၊ မစန္ဒာဝင်း၊
                        မောင်သန်းဇော်ဝင်း၊ မောင်ထူးပိုင်စိုး၊ မောင်အောင်ထက်မိုး
                        + မဟန်နီလှိုင် တို့၏ အငယ်ဆုံးညီမ
                    </p>
                </motion.div>

                {/* Bride name */}
                <motion.h2
                    className="mb-2"
                    style={{
                        fontFamily:
                            "Canva Font, Myanmar Text, Padauk, sans-serif",
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                    }}
                    {...riseUpAnimation}
                >
                    မယုနန္ဒာ
                </motion.h2>

                {/* Bride education */}
                <motion.p
                    className="mb-10"
                    style={{
                        fontFamily: "Canva Font, Marcellus, serif",
                        fontSize: "1rem",
                    }}
                    {...riseUpAnimation}
                >
                    B.A (English)
                </motion.p>

                {/* Divider */}
                <div className="flex items-center justify-center gap-2 mb-4">
                    <div className="w-16 h-px bg-gray-400"></div>
                    <span className="text-gray-400">❦</span>
                    <div className="w-16 h-px bg-gray-400"></div>
                </div>

                {/* Footer text */}
                <motion.div
                    style={{
                        fontFamily:
                            "Canva Font, Myanmar Text, Padauk, sans-serif",
                        fontSize: "0.9rem",
                        lineHeight: "1.6",
                    }}
                    {...riseUpAnimation}
                >
                    <p className="italic">တို့၏</p>
                    <p>
                        “စုလျားရစ်ပတ်ထိမ်းမြားမင်္ဂလာပွဲ” သို့
                        ကြွရောက်ချီးမြှင့်ပေးပါရန် နှစ်ဖက်သောမိဘများနှင့်
                        ကျွန်တော်၊ ကျွန်မတို့မှ ဂါရဝတရားရှေ့ထား၍ ရိုသေလေးစားစွာ
                        ဖိတ်ကြားအပ်ပါသည်။
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
