import Card from "./Card";

const FeaturesSection: React.FC = () => {
	//TODO poner estas en un ts aparte
	const integrations = [
		{
			icon: "/feature-icon-1.svg",
			title: "Share team inboxes",
			text: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
		},
		{
			icon: "/feature-icon-2.svg",
			title: "Deliver instant answers",
			text: "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
		},
		{
			icon: "/feature-icon-3.svg",
			title: "Manage your team with reports",
			text: "Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
		},
	];

	return (
		<div className="text-center py-[100px] ">
			<p className="text-purple-400 text-[14px] font-medium mb-2">Features</p>
			<h2 className="text-black text-[44px] font-semibold mb-4">
				Cutting-edge features for advanced analytics
			</h2>
			<p className="max-w-[768px] mx-auto text-gray-600 text-[20px] font-normal mb-8">
				Powerful, self-serve product and growth analytics to help you convert,
				engage, and retain more users. Trusted by over 4,000 startups..
			</p>
			<div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
				{integrations.map((integration, index) => (
					<Card key={index} {...integration} linkText="Learn more" />
				))}
			</div>
		</div>
	);
};

export default FeaturesSection;
