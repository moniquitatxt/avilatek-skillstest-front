import Image from "next/image";
import PurpleButton from "./PurpleButton";

const NoCatchesSection: React.FC = () => {
	return (
		<div className="max-w-[1280px] p-6 md:flex justify-between">
			<div className="md:flex items-center ">
				<div>
					<h2 className="md:text-[48px] md:leading-[60px] font-semibold mb-4 ">
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
						<PurpleButton />
					</div>
				</div>
			</div>

			<div className="">
				<div className="md:flex justify-center md:place-items-baseline">
					<Image
						src="/image-collage-1.svg"
						alt="Cta Image"
						width={329}
						height={160}
						className="md:w-[160px] h-[160px] md:m-2.5 object-cover "
					/>
					<Image
						src="/image-collage-2.svg"
						alt="Cta Image"
						width={329}
						height={160}
						className=" md:w-[160px] md:h-[240px] h-[160px] md:m-2.5 object-cover object-top"
					/>
				</div>
				<div className="md:flex justify-center md:items-start ">
					<Image
						src="/image-collage-3.svg"
						alt="Cta Image"
						width={329}
						height={160}
						className=" md:w-[192px] md:h-[128px] md:m-2.5 h-[160px] object-cover object-top"
					/>
					<Image
						src="/image-collage-4.svg"
						alt="Cta Image"
						width={329}
						height={160}
						className=" md:w-[160px] md:h-[240px] md:m-2.5 h-[160px] object-cover object-top"
					/>
					<Image
						src="/aux-image.svg"
						alt="Cta Image"
						width={329}
						height={160}
						className=" md:w-[192px] md:h-[128px] md:m-2.5 h-[160px] object-cover object-top"
					/>
				</div>
			</div>
		</div>
	);
};

export default NoCatchesSection;
