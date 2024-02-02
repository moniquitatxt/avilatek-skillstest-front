import Card from "./Card";

const IntegrationsSection: React.FC = () => {
	const integrations = [
		{
			icon: "/notion.svg",
			title: "Notion",
		},
		{
			icon: "/slack.svg",
			title: "Slack",
		},
		{
			icon: "/google-drive.svg",
			title: "Google Drive",
		},
		{
			icon: "/intercom.svg",
			title: "Intercom ",
		},
		{
			icon: "/jira.svg",
			title: "Jira ",
		},
		{
			icon: "/dropbox.svg",
			title: "Dropbox ",
		},
	];

	return (
		<div className="text-center">
			<p className="text-purple-400 text-[14px]  font-medium mb-2">
				Integrations
			</p>
			<h2 className="md:text-[36px] md:leading-[44px]  text-[30px] leading-[38px] font-semibold mb-4">
				Get more value from your tools
			</h2>
			<p className="md:text-[20px] md:leading-[30px] text-[18px] leading-[28px] max-w-[768px] mx-auto text-gray-600 font-normal mb-8">
				Connect your tools, connect your teams. With over 100 apps already
				available in our directory, your team's favorite tools are just a click
				away.
			</p>
			<div className=" grid grid-cols-1 md:grid-cols-3 gap-4">
				{integrations.map((integration, index) => (
					<Card
						key={index}
						icon={integration.icon}
						title={`${integration.title} Integration`}
						text={`Work faster and smarter by integrating directly with ${integration.title}, right in the app.`}
						linkText="View Integration"
					/>
				))}
			</div>
		</div>
	);
};

export default IntegrationsSection;
