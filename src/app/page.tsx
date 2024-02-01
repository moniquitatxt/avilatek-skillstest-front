import NavBar from "../components/NavBar";
import MainSection from "@/components/MainSection";

export default function Home() {
	return (
		<div>
			<NavBar />
			<div>
				<MainSection />
			</div>
			<main>Hello world</main>
		</div>
	);
}
