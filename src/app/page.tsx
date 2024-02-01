import IntegrationsSection from "@/components/IntegrationsSection";
import NavBar from "../components/NavBar";
import MainSection from "@/components/MainSection";

export default function Home() {
	return (
		<main className="max-w-[1216px] mx-auto">
			<NavBar />
			<div>
				<MainSection />
			</div>
			<IntegrationsSection />
		</main>
	);
}
