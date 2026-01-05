import { HeroSection } from "./components/HeroSection";
import { EngInvite } from "./components/EngInvite";
import { TraditionalPhoto } from "./components/TraditionalPhoto";
import { MmInvite } from "./components/MmInvite";
import { OurStory } from "./components/OurStory";
import { CeremonySection } from "./components/CeremonySection";
import { PhotoSlider } from "./components/PhotoSlider";
import { FooterSection } from "./components/FooterSection";
import { CountDown } from "./components/CountDown";

export default function App() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <HeroSection />

            {/* English Invitation */}
            <EngInvite />

            {/* Traditional Photo */}
            <TraditionalPhoto />

            {/* Myanmar Invitation */}
            <MmInvite />

            {/* Our Story */}
            <OurStory />

            {/* Ceremony Section */}
            <CeremonySection />

            {/* Photo Slider */}
            <PhotoSlider />

            {/* Countdown */}
            <CountDown />

            {/* Footer Section */}
            <FooterSection />
        </div>
    );
}
