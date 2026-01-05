import { useEffect, useMemo, useState } from "react";

type TimeLeft = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};

export function CountDown() {
    // Set target date to local time midnight of Jan 18, 2026
    const targetDate = useMemo(() => new Date(2026, 0, 18, 0, 0, 0, 0), []);

    const calculate = (): TimeLeft => {
        const now = new Date().getTime();
        const distance = targetDate.getTime() - now;

        if (distance <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
    };

    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculate());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculate());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    const isComplete =
        timeLeft.days === 0 &&
        timeLeft.hours === 0 &&
        timeLeft.minutes === 0 &&
        timeLeft.seconds === 0;

    return (
        <section
            className="w-full py-20 px-8"
            style={{ backgroundColor: "#F5F1E8" }}
        >
            <div className="max-w-7xl mx-auto text-center">
                <h2
                    className="mb-6"
                    style={{
                        fontFamily: "RTL Ansam, Marcellus, serif",
                        fontSize: "3.25rem",
                        lineHeight: 1.1,
                        fontWeight: 400,
                        color: "#2F2A25",
                    }}
                >
                    Countdown to Our Wedding Day
                </h2>

                {isComplete ? (
                    <p
                        style={{
                            fontFamily: "Marcellus, serif",
                            fontSize: "1.25rem",
                            color: "#2F2A25",
                        }}
                    >
                        It's our special day!
                    </p>
                ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
                        <TimeCard label="Days" value={timeLeft.days} />
                        <TimeCard label="Hours" value={timeLeft.hours} />
                        <TimeCard label="Minutes" value={timeLeft.minutes} />
                        <TimeCard label="Seconds" value={timeLeft.seconds} />
                    </div>
                )}

                <p
                    className="mt-6 text-sm"
                    style={{ fontFamily: "Marcellus, serif", color: "#6B6B6B" }}
                >
                    Target date: Jan 18, 2026
                </p>
            </div>
        </section>
    );
}

function TimeCard({ label, value }: { label: string; value: number }) {
    return (
        <div className="rounded-lg p-4 bg-white/70 shadow-sm">
            <div
                className="mb-1"
                style={{
                    fontFamily: "Marcellus, serif",
                    fontSize: "2rem",
                    color: "#2F2A25",
                }}
            >
                {String(value).padStart(2, "0")}
            </div>
            <div
                style={{
                    fontFamily: "Marcellus, serif",
                    fontSize: "0.9rem",
                    color: "#6B6B6B",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                }}
            >
                {label}
            </div>
        </div>
    );
}
