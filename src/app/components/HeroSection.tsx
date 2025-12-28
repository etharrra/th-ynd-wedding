export function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src="/src/assets/hero-img.png"
        alt="Wedding couple"
        className="w-full h-full object-cover"
      />

      {/* Bottom Right Text */}
      <div className="absolute bottom-12 right-12 text-right text-white" style={{ fontFamily: 'Optima, sans-serif', fontWeight: 'bold' }}>
        <p className="text-lg tracking-wide mb-1">January 18 2025</p>
        <p className="text-xl tracking-wider">#TharAndYuForever</p>
      </div>
    </section>
  );
}
