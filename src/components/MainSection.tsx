import Image from "next/image";

const MainSection: React.FC = () => {
	return (
		<div className="bg-purple-500 text-white p-8 rounded-lg text-center">
			<h1 className="text-4xl font-bold mb-4">Grow your users. Smarter.</h1>
			<p className="text-sm mb-6">
				Powerful, self-serve product and growth analytics to help you convert,
				engage, and retain more users. Trusted by over 4,000 startups.
			</p>
			<div className="flex justify-center items-center mb-4">
				<input
					type="text"
					placeholder="Your email"
					className="p-2 border border-white rounded-l focus:outline-none"
				/>
				<button className="bg-white text-purple-500 p-2 rounded-r">
					Get Started
				</button>
			</div>
		</div>
	);
};

export default MainSection;
