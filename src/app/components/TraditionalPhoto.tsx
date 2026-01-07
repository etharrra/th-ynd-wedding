export function TraditionalPhoto() {
    return (
        <section className="w-full" style={{ backgroundColor: "#F5F1E8" }}>
            <picture>
                <img
                    src="/images/slider-images/image-31.jpg"
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
