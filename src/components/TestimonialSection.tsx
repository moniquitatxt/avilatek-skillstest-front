import Image from "next/image";

const TestimonialSection = () => {
	return (
		<div className=" text-white md:flex ">
			<div className="mt-8 md:mt-0 ">
				<Image
					src="/woman.svg"
					alt="Cta Image"
					width={480}
					height={400}
					className="w-full h-auto md:h-full md:w-full object-cover rounded-l-[24px] "
				/>
			</div>
			<div className="bg-purple-500 flex items-center md:w-[736px] rounded-r-[24px]">
				<div className="md:m-10">
					<h2 className="text-4xl font-medium mb-4 ">
						Love the simplicity of the service and the prompt customer support.
						We can’t imagine working without it.
					</h2>
					<p className="text-lg  font-semibold md:text-xl">— Renee Wells</p>
					<p className="text-lg mb-4 font-normal md:text-xl">
						Product Designer, Quotient
					</p>
				</div>
			</div>
		</div>
	);
};

export default TestimonialSection;
