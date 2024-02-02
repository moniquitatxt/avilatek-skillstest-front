import Image from "next/image";

const CtaSection: React.FC = () => {
	return (
		<div className=" text-white md:flex ">
			<div className="bg-purple-500 flex items-center md:w-2/3 rounded-l-[24px]">
				<div className="md:m-10">
					<h2 className="text-3xl font-semibold mb-4 md:text-4xl">
						Give us a shot
					</h2>
					<p className="text-lg mb-4 md:text-xl">
						Join over 4,000+ startups already growing with Untitled.
					</p>
					<div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
						<button className="bg-white text-purple-500 py-2 px-4 rounded-full md:rounded">
							Learn More
						</button>
						<button className="bg-purple-300 text-white py-2 px-4 rounded-full md:rounded">
							Get Started
						</button>
					</div>
				</div>
			</div>
			<div className="mt-8 md:mt-0 md:w-1/2">
				<Image
					src="/aux-image.svg"
					alt="Cta Image"
					width={480}
					height={400}
					className="w-full h-auto md:h-full md:w-full object-cover rounded-r-[24px] "
				/>
			</div>
		</div>
	);
};

export default CtaSection;
