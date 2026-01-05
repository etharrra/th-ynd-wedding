import {
    useEffect,
    useRef,
    useState,
    Suspense,
    lazy,
    type ReactElement,
} from "react";
import { HeroSection } from "./components/HeroSection";

// Lazy chunks (map named exports to default for React.lazy)
const EngInvite = lazy(() =>
    import("./components/EngInvite").then((m) => ({ default: m.EngInvite }))
);

const TraditionalPhoto = lazy(() =>
    import("./components/TraditionalPhoto").then((m) => ({
        default: m.TraditionalPhoto,
    }))
);

const MmInvite = lazy(() =>
    import("./components/MmInvite").then((m) => ({ default: m.MmInvite }))
);

const OurStory = lazy(() =>
    import("./components/OurStory").then((m) => ({ default: m.OurStory }))
);

const CeremonySection = lazy(() =>
    import("./components/CeremonySection").then((m) => ({
        default: m.CeremonySection,
    }))
);

const PhotoSlider = lazy(() =>
    import("./components/PhotoSlider").then((m) => ({ default: m.PhotoSlider }))
);

const FooterSection = lazy(() =>
    import("./components/FooterSection").then((m) => ({
        default: m.FooterSection,
    }))
);

const CountDown = lazy(() =>
    import("./components/CountDown").then((m) => ({ default: m.CountDown }))
);

function InView({
    children,
    rootMargin = "400px 0px",
}: {
    children: ReactElement;
    rootMargin?: string;
}) {
    const ref = useRef<HTMLDivElement | null>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (visible) return; // already visible
        const el = ref.current;
        if (!el) return;
        if (!("IntersectionObserver" in window)) {
            setVisible(true);
            return;
        }
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        setVisible(true);
                        io.disconnect();
                    }
                });
            },
            { root: null, rootMargin, threshold: 0.01 }
        );
        io.observe(el);
        return () => io.disconnect();
    }, [visible, rootMargin]);

    return visible ? (
        children
    ) : (
        <div ref={ref} aria-hidden="true" className="min-h-[200px] w-full" />
    );
}

export default function App() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <HeroSection />

            {/* English Invitation */}
            <InView>
                <Suspense
                    fallback={
                        <div className="min-h-[200px]" aria-busy="true" />
                    }
                >
                    <EngInvite />
                </Suspense>
            </InView>

            {/* Traditional Photo */}
            <InView>
                <Suspense
                    fallback={
                        <div className="min-h-[200px]" aria-busy="true" />
                    }
                >
                    <TraditionalPhoto />
                </Suspense>
            </InView>

            {/* Myanmar Invitation */}
            <InView>
                <Suspense
                    fallback={
                        <div className="min-h-[200px]" aria-busy="true" />
                    }
                >
                    <MmInvite />
                </Suspense>
            </InView>

            {/* Our Story */}
            <InView>
                <Suspense
                    fallback={
                        <div className="min-h-[200px]" aria-busy="true" />
                    }
                >
                    <OurStory />
                </Suspense>
            </InView>

            {/* Ceremony Section */}
            <InView>
                <Suspense
                    fallback={
                        <div className="min-h-[200px]" aria-busy="true" />
                    }
                >
                    <CeremonySection />
                </Suspense>
            </InView>

            {/* Photo Slider */}
            <InView>
                <Suspense
                    fallback={
                        <div className="min-h-[200px]" aria-busy="true" />
                    }
                >
                    <PhotoSlider />
                </Suspense>
            </InView>

            {/* Countdown */}
            <InView>
                <Suspense
                    fallback={
                        <div className="min-h-[120px]" aria-busy="true" />
                    }
                >
                    <CountDown />
                </Suspense>
            </InView>

            {/* Footer Section */}
            <InView>
                <Suspense
                    fallback={
                        <div className="min-h-[200px]" aria-busy="true" />
                    }
                >
                    <FooterSection />
                </Suspense>
            </InView>
        </div>
    );
}
