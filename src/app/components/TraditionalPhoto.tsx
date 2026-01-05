export function TraditionalPhoto() {
    return (
        <section className="w-full" style={{ backgroundColor: "#F5F1E8" }}>
            <picture>
                {/* Prefer modern format when supported */}
                <source
                    srcSet="/images/traditional-img.webp"
                    type="image/webp"
                />
                <img
                    src="/images/traditional-img.jpg"
                    alt="Traditional Wedding Photo"
                    className="traditional-photo-img"
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 75vw, 1200px"
                />
            </picture>
        </section>
    );
}
