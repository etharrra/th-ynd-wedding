export function EngInvite() {
  return (
    <section className="w-full py-20 px-8" style={{ backgroundColor: '#F5F1E8' }}>
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <h1 className="text-6xl mb-16" style={{ fontFamily: 'Ansam, serif', fontWeight: 'normal' }}>
          Wedding Invitation
        </h1>

        {/* Groom */}
        <div className="mb-12">
          <h2 className="text-5xl mb-4" style={{ fontFamily: 'Ansam, serif', fontWeight: 'normal' }}>
            Thar Htoo
          </h2>
          <p className="text-base mb-1">(B.A English, Dip in Web Development)</p>
          <p className="text-base mb-4">Son of: U Htein Win + Daw Tin Tin Htay</p>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-16 h-px bg-gray-400"></div>
            <span className="text-gray-400">❦</span>
            <div className="w-16 h-px bg-gray-400"></div>
          </div>
        </div>

        {/* Bride */}
        <div className="mb-16">
          <h2 className="text-5xl mb-4" style={{ fontFamily: 'Ansam, serif', fontWeight: 'normal' }}>
            Yunandar
          </h2>
          <p className="text-base mb-1">(B.A English)</p>
          <p className="text-base mb-4">Daughter of: U Hla Kyaing + Daw Tin Kyi</p>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-16 h-px bg-gray-400"></div>
            <span className="text-gray-400">❦</span>
            <div className="w-16 h-px bg-gray-400"></div>
          </div>
        </div>

        {/* Invitation Text */}
        <p className="text-lg max-w-2xl mx-auto leading-relaxed">
          Together with our families, we cordially invite you to join us as we celebrate our marriage.
        </p>
      </div>
    </section>
  );
}