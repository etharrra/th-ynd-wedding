export function FooterSection() {
  return (
    <section className="w-full py-24 px-6 md:px-8" style={{ backgroundColor: "#F5F1E8" }}>
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h2
          className="text-center tracking-wide"
          style={{
            fontFamily: "Marcellus, serif",
            fontSize: "3rem",
            lineHeight: 1.1,
            letterSpacing: "0.04em",
            color: "#2F2A25",
          }}
        >
          WE CAN'T WAIT
        </h2>
        <p
          className="mt-2 mb-12 text-center italic"
          style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: "2rem",
            color: "#2F2A25",
          }}
        >
          to be Husband & Wife
        </p>

        <div className="w-full flex justify-center">
          <div className="bg-white/0" style={{ padding: 0 }}>
            <img
              src="/src/assets/footer-img.jpg"
              alt="Couple"
              className="object-cover"
              style={{ width: "640px", height: "360px", objectPosition: "center" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
