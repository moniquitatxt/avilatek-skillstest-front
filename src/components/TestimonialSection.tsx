import Image from "next/image";

const TestimonialSection = () => {
	return (
		<div className="md:max-w-[1216px] md:flex justify-start mt-[64px] max-w-[343px] mx-auto text-white">
			<div className="mt-8 md:mt-0 ">
				<Image
					src="/woman.svg"
					alt="Cta Image"
					width={480}
					height={400}
					className="md:rounded-l-[24px] sm:rounded-t-[24px] max-w-screen-md:rounded-b-[24px] w-full h-auto md:h-full md:w-full object-cover "
				/>
			</div>
			<div className="md:w-2/3 md:rounded-r-[24px]  sm:rounded-b-[24px] sm:px-[24px] sm:py-[40px] bg-purple-500 flex items-center">
				<div className="md:m-10">
					<Image
						src="/stars.svg"
						width={116}
						height={20}
						alt="stars"
						className="mb-4"
					/>
					<h2 className="md:text-[36px] md:leading-[44px] text-[24px] leading-[32px] font-medium mb-4 ">
						Love the simplicity of the service and the prompt customer support.
						We can’t imagine working without it.
					</h2>
					<p className="md:text-[18px] md:leading-[28px] text-[18px] leading-[28px] font-semibold ">
						— Renee Wells
					</p>
					<p className="md:text-[16px] md:leading-[24px] text-[16px] leading-[24px] mb-4 font-normal ">
						Product Designer, Quotient
					</p>
				</div>
			</div>
		</div>
	);
};

export default TestimonialSection;
