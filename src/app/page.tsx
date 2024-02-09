import IntegrationsSection from "@/components/IntegrationsSection";
import NavBar from "../components/NavBar";
import MainSection from "@/components/MainSection";
import CtaSection from "@/components/CtaSection";
import FeaturesSection from "@/components/FeaturesSection";
import NoCatchesSection from "@/components/NoCatchesSection";
import FrequentQuestionsSection from "@/components/FrequentQuestionsSection";
import TestimonialSection from "@/components/TestimonialSection";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<main className="max-w-[1216px] mx-auto">
			<NavBar />
			<MainSection />
			<IntegrationsSection />
			<CtaSection />
			<FeaturesSection />
			<NoCatchesSection />
			<FrequentQuestionsSection />
			<TestimonialSection />
			<Footer />
		</main>
	);
}
