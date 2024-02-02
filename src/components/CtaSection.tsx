import Image from "next/image";
import PurpleButton from "./PurpleButton";
import WhiteButton from "./WhiteButton";

const CtaSection: React.FC = () => {
	return (
		<div className="md:max-w-[1216px] md:flex justify-start mt-[64px] max-w-[343px] mx-auto text-white">
			<div className="md:w-2/3 md:rounded-l-[24px]  sm:rounded-t-[24px] sm:px-[24px] sm:py-[40px] bg-purple-500 flex items-center ">
				<div className="md:m-10">
					<h2 className="md:text-[36px] md:leading-[44px] text-[30px] leading-[38px] font-semibold mb-4 md:text-4xl">
						Give us a shot
					</h2>
					<p className="md:text-[20px] md:leading-[30px] text-[18px] leading-[30px] mb-4 ">
						Join over 4,000+ startups already growing with Untitled.
					</p>
					<div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
						<WhiteButton />
						<PurpleButton />
					</div>
				</div>
			</div>
			<div className=" md:mt-0 md:w-1/2">
				<Image
					src="/aux-image.svg"
					alt="Cta Image"
					width={480}
					height={400}
					className="md:rounded-r-[24px] sm:rounded-b-[24px] max-w-screen-md:rounded-b-[24px] w-full h-auto md:h-full md:w-full object-cover  "
				/>
			</div>
		</div>
	);
};

export default CtaSection;
