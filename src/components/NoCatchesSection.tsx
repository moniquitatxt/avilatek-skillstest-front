import Image from "next/image";

const NoCatchesSection: React.FC = () => {
	return (
		<div className="max-w-[1280px] p-8 flex justify-between">
			<div className=" flex items-center ">
				<div>
					<h2 className="md:text-[48px] md:leading-[60px] font-semibold mb-4 md:text-4xl">
						No long-term contracts.
						<br /> No catches.
					</h2>
					<p className="md:text-[20px] md:leading[30px] mb-4  ">
						Start your 30-day free trial today.
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

			<div className="">
				<div className="flex justify-center place-items-baseline">
					<Image
						src="/image-collage-1.svg"
						alt="Cta Image"
						width={160}
						height={160}
						className="m-3.5"
					/>
					<Image
						src="/image-collage-2.svg"
						alt="Cta Image"
						width={160}
						height={240}
						className=" b-0"
					/>
				</div>
				<div className="flex justify-center items-start ">
					<Image
						src="/image-collage-3.svg"
						alt="Cta Image"
						width={192}
						height={128}
					/>
					<Image
						src="/image-collage-4.svg"
						alt="Cta Image"
						width={160}
						height={240}
					/>
					<Image
						src="/aux-image.svg"
						alt="Cta Image"
						width={192}
						height={128}
						className=" "
					/>
				</div>
			</div>
		</div>
	);
};

export default NoCatchesSection;
