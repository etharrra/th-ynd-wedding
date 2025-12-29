import { useMemo, useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaCarouselType } from "embla-carousel";
import { motion } from "motion/react";
import { riseUpAnimation } from "../lib/animations";

export function PhotoSlider() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [mainRef, mainApi] = useEmblaCarousel({
        loop: true,
        align: "center",
        duration: 20,
        skipSnaps: false,
    });
    const [thumbRef, thumbApi] = useEmblaCarousel({
        containScroll: "keepSnaps",
        dragFree: true,
        skipSnaps: false,
    });

    // Static list of images, memoized to avoid re-creates on state changes

    const onSelect = useCallback(
        (api: EmblaCarouselType) => {
            setSelectedIndex(api.selectedScrollSnap());
            if (thumbApi) {
                thumbApi.scrollTo(api.selectedScrollSnap());
            }
        },
        [thumbApi]
    );

    useEffect(() => {
        if (!mainApi) return;
        onSelect(mainApi);
        const handler = () => onSelect(mainApi);
        mainApi.on("select", handler);
        return () => {
            mainApi.off("select", handler);
        };
    }, [mainApi, onSelect]);

    const photos = useMemo(
        () => [
            {
                src: "/images/slider-images/image-1.jpg",
                alt: "Prewedding photo 1",
            },
            {
                src: "/images/slider-images/image-2.jpg",
                alt: "Prewedding photo 2",
            },
            {
                src: "/images/slider-images/image-3.jpg",
                alt: "Prewedding photo 3",
            },
            {
                src: "/images/slider-images/image-4.jpg",
                alt: "Prewedding photo 4",
            },
            {
                src: "/images/slider-images/image-5.jpg",
                alt: "Prewedding photo 5",
            },
            {
                src: "/images/slider-images/image-6.jpg",
                alt: "Prewedding photo 6",
            },
            {
                src: "/images/slider-images/image-7.jpg",
                alt: "Prewedding photo 7",
            },
            {
                src: "/images/slider-images/image-8.jpg",
                alt: "Prewedding photo 8",
            },
            {
                src: "/images/slider-images/image-9.jpg",
                alt: "Prewedding photo 9",
            },
            {
                src: "/images/slider-images/image-10.jpg",
                alt: "Prewedding photo 10",
            },
            {
                src: "/images/slider-images/image-11.jpg",
                alt: "Prewedding photo 11",
            },
            {
                src: "/images/slider-images/image-12.jpg",
                alt: "Prewedding photo 12",
            },
            {
                src: "/images/slider-images/image-13.jpg",
                alt: "Prewedding photo 13",
            },
            {
                src: "/images/slider-images/image-14.jpg",
                alt: "Prewedding photo 14",
            },
            {
                src: "/images/slider-images/image-15.jpg",
                alt: "Prewedding photo 15",
            },
            {
                src: "/images/slider-images/image-16.jpg",
                alt: "Prewedding photo 16",
            },
            {
                src: "/images/slider-images/image-17.jpg",
                alt: "Prewedding photo 17",
            },
            {
                src: "/images/slider-images/image-18.jpg",
                alt: "Prewedding photo 18",
            },
            {
                src: "/images/slider-images/image-19.jpg",
                alt: "Prewedding photo 19",
            },
            {
                src: "/images/slider-images/image-20.jpg",
                alt: "Prewedding photo 20",
            },
            {
                src: "/images/slider-images/image-21.jpg",
                alt: "Prewedding photo 21",
            },
            {
                src: "/images/slider-images/image-22.jpg",
                alt: "Prewedding photo 22",
            },
            {
                src: "/images/slider-images/image-23.jpg",
                alt: "Prewedding photo 23",
            },
            {
                src: "/images/slider-images/image-24.jpg",
                alt: "Prewedding photo 24",
            },
            {
                src: "/images/slider-images/image-25.jpg",
                alt: "Prewedding photo 25",
            },
            {
                src: "/images/slider-images/image-26.jpg",
                alt: "Prewedding photo 26",
            },
            {
                src: "/images/slider-images/image-27.jpg",
                alt: "Prewedding photo 27",
            },
            {
                src: "/images/slider-images/image-28.jpg",
                alt: "Prewedding photo 28",
            },
            {
                src: "/images/slider-images/image-29.jpg",
                alt: "Prewedding photo 29",
            },
            {
                src: "/images/slider-images/image-30.jpg",
                alt: "Prewedding photo 30",
            },
            {
                src: "/images/slider-images/image-31.jpg",
                alt: "Prewedding photo 31",
            },
            {
                src: "/images/slider-images/image-32.jpg",
                alt: "Prewedding photo 32",
            },
            {
                src: "/images/slider-images/image-33.jpg",
                alt: "Prewedding photo 33",
            },
            {
                src: "/images/slider-images/image-34.jpg",
                alt: "Prewedding photo 34",
            },
            {
                src: "/images/slider-images/image-35.jpg",
                alt: "Prewedding photo 35",
            },
            {
                src: "/images/slider-images/image-36.jpg",
                alt: "Prewedding photo 36",
            },
            {
                src: "/images/slider-images/image-37.jpg",
                alt: "Prewedding photo 37",
            },
            {
                src: "/images/slider-images/image-38.jpg",
                alt: "Prewedding photo 38",
            },
            {
                src: "/images/slider-images/image-39.jpg",
                alt: "Prewedding photo 39",
            },
            {
                src: "/images/slider-images/image-40.jpg",
                alt: "Prewedding photo 40",
            },
            {
                src: "/images/slider-images/image-41.jpg",
                alt: "Prewedding photo 41",
            },
            {
                src: "/images/slider-images/image-42.jpg",
                alt: "Prewedding photo 42",
            },
            {
                src: "/images/slider-images/image-43.jpg",
                alt: "Prewedding photo 43",
            },
            {
                src: "/images/slider-images/image-44.jpg",
                alt: "Prewedding photo 44",
            },
            {
                src: "/images/slider-images/image-45.jpg",
                alt: "Prewedding photo 45",
            },
            {
                src: "/images/slider-images/image-46.jpg",
                alt: "Prewedding photo 46",
            },
            {
                src: "/images/slider-images/image-47.jpg",
                alt: "Prewedding photo 47",
            },
            {
                src: "/images/slider-images/image-48.jpg",
                alt: "Prewedding photo 48",
            },
        ],
        []
    );

    // Preload nearby images to avoid jank when clicking thumbnails
    useEffect(() => {
        const toPreload = new Set<number>();
        for (let delta = -2; delta <= 2; delta++) {
            const idx = selectedIndex + delta;
            if (idx >= 0 && idx < photos.length) toPreload.add(idx);
        }
        toPreload.forEach((i) => {
            const img = new Image();
            img.src = photos[i].src;
            // decoding is advisory; browsers may ignore
            // @ts-ignore
            if (img.decode) img.decode().catch(() => {});
        });
    }, [selectedIndex, photos]);

    return (
        <section
            className="w-full py-20 px-8"
            style={{ backgroundColor: "#F5F1E8" }}
        >
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    className="text-center mb-8"
                    style={{
                        fontFamily: "RTL Ansam, Marcellus, serif",
                        fontSize: "3.25rem",
                        lineHeight: 1.1,
                        fontWeight: 400,
                        color: "#2F2A25",
                    }}
                    {...riseUpAnimation}
                >
                    Our Prewedding Memories
                </motion.h2>

                {/* Main Carousel (Embla) */}
                <div className="embla overflow-hidden" ref={mainRef}>
                    <div className="embla__container flex">
                        {photos.map((photo, index) => (
                            <div
                                key={index}
                                className="embla__slide flex-[0_0_100%] min-w-0"
                            >
                                <div className="w-full h-[400px] grid place-items-center">
                                    <img
                                        src={photo.src}
                                        alt={photo.alt}
                                        className="block mx-auto max-w-full object-contain p-2 rounded-4xl"
                                        loading={
                                            index === selectedIndex
                                                ? "eager"
                                                : "lazy"
                                        }
                                        decoding="async"
                                        fetchPriority={
                                            index === selectedIndex
                                                ? "high"
                                                : Math.abs(
                                                        index - selectedIndex
                                                    ) === 1
                                                  ? "high"
                                                  : "auto"
                                        }
                                        style={{ maxHeight: "400px" }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Thumbnails (Embla) */}
                <div
                    className="thumb-embla mt-4 w-full mx-auto max-w-[840px] px-4 overflow-hidden"
                    ref={thumbRef}
                >
                    <div className="embla__container flex items-center">
                        {photos.map((photo, index) => (
                            <div
                                key={index}
                                className="embla__slide flex-[0_0_auto]"
                            >
                                <button
                                    type="button"
                                    onClick={() =>
                                        mainApi && mainApi.scrollTo(index)
                                    }
                                    className={`thumb-btn block outline-none ${selectedIndex === index ? "is-selected" : ""}`}
                                    aria-label={`Go to slide ${index + 1}`}
                                >
                                    <img
                                        src={photo.src}
                                        alt={photo.alt}
                                        className="thumbnail-img"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
