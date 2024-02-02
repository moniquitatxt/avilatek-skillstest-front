import AccordionItem from "./AccordionItem";

const FrequentQuestionsSection: React.FC = () => {
	//TODO pasar a otro archivo
	const questions = [
		{
			title: "Is there a free trial available?",
			content:
				"Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
		},
		{
			title: "Can I change my plan later?",
			content: "Yes, you can.",
		},
		{
			title: "What is your cancellation policy?",
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		},
		{
			title: "Can other info be added to an invoice?",
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		},
		{
			title: "How does billing work?",
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		},
		{
			title: "How do I change my account email?",
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		},
	];

	return (
		<div className="py-[80px] max-w-[768px] sm:max-w-[343px] mx-auto">
			<div className="text-center">
				<h2 className="md:text-[36px] md:leading-[44px]  text-[30px] leading-[38px] font-semibold mb-4">
					Frequently asked questions
				</h2>
				<p className="max-w-[768px] mx-auto text-gray-600 md:text-[20px] md:leading-[30px] text-[18px] leading-[28px] font-normal mb-8">
					Everything you need to know about the product and billing.
				</p>
			</div>
			<div>
				{questions.map((question, index) => (
					<AccordionItem
						key={index}
						title={question.title}
						content={question.content}
					/>
				))}
			</div>
		</div>
	);
};

export default FrequentQuestionsSection;
