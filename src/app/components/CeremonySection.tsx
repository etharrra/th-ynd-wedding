export function CeremonySection() {
    return (
        <section className="w-full py-24 px-6 md:px-8" style={{ backgroundColor: "#F5F1E8" }}>
            <div className="max-w-7xl mx-auto">
                {/* Title */}
                <h2
                    className="text-center mb-16 md:mb-20 tracking-wide"
                    style={{
                        fontFamily: "Marcellus, serif",
                        fontSize: "3.25rem",
                        lineHeight: 1.1,
                        fontWeight: 400,
                        color: "#2F2A25",
                    }}
                >
                    The Ceremory
                </h2>

                {/* Rows */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-y-8">
                    {/* Date */}
                    <div className="md:col-span-3 flex items-start md:justify-start">
                        <span
                            style={{
                                fontFamily: "Marcellus, serif",
                                fontSize: "1.25rem",
                                color: "#2F2A25",
                            }}
                        >
                            Date
                        </span>
                    </div>
                    <div className="md:col-span-9">
                        <p
                            className="mb-1"
                            style={{ fontFamily: "Marcellus, serif", color: "#2F2A25" }}
                        >
                            January 18, 2026 (Sunday)
                        </p>
                        <p style={{ fontFamily: "Marcellus, serif", color: "#2F2A25" }}>
                            1st Waxing of Tabodwe, 1387 ME
                        </p>
                    </div>
                    <div className="md:col-span-12 border-t" style={{ borderColor: "#C9C1B5" }}></div>

                    {/* Time */}
                    <div className="md:col-span-3 flex items-start md:justify-start">
                        <span
                            style={{
                                fontFamily: "Marcellus, serif",
                                fontSize: "1.25rem",
                                color: "#2F2A25",
                            }}
                        >
                            Time
                        </span>
                    </div>
                    <div className="md:col-span-9">
                        <p style={{ fontFamily: "Marcellus, serif", color: "#2F2A25" }}>
                            9:00 AM to 11:00 AM
                        </p>
                    </div>
                    <div className="md:col-span-12 border-t" style={{ borderColor: "#C9C1B5" }}></div>

                    {/* Venue */}
                    <div className="md:col-span-3 flex items-start md:justify-start">
                        <span
                            style={{
                                fontFamily: "Marcellus, serif",
                                fontSize: "1.25rem",
                                color: "#2F2A25",
                            }}
                        >
                            Venue
                        </span>
                    </div>
                    <div className="md:col-span-9">
                        <p className="mb-1">
                            <a
                                href="https://maps.app.goo.gl/x6D7o4Qp6wZQkkL68"
                                target="_blank"
                                className="underline"
                                style={{ fontFamily: "Marcellus, serif", color: "#2F4965" }}
                            >
                                Myo Oo Zedi Thathana Beikman
                            </a>
                        </p>
                        <p style={{ fontFamily: "Marcellus, serif", color: "#2F2A25" }}>
                            Shwe Phone Shein Road, Car Gyi Gate Bus Stop, Shwepyithar, Yangon
                        </p>
                    </div>
                    <div className="md:col-span-12 border-t" style={{ borderColor: "#C9C1B5" }}></div>

                    {/* Transportation */}
                    <div className="md:col-span-3 flex items-start md:justify-start">
                        <span
                            style={{
                                fontFamily: "Marcellus, serif",
                                fontSize: "1.25rem",
                                color: "#2F2A25",
                            }}
                        >
                            Transportation
                        </span>
                    </div>
                    <div className="md:col-span-9">
                        <p style={{ fontFamily: "Marcellus, serif", color: "#2F2A25" }}>
                            You can take YBS 65 and 42 buses; please get off at the "Car Gyi Gate" bus stop.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
