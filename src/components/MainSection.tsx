import Image from "next/image";
import PurpleButton from "./PurpleButton";

const MainSection: React.FC = () => {
	return (
		<div className="h-[1100px] ">
			<div className=" bg-purple-500 text-white  h-[674px] md:rounded-3xl pt-[96px] pb-[192px] p-x-[96px] text-center ">
				<div>
					<h1 className=" md:text-[72px] md:leading-[90px] text-[36px] leading-[44px] font-semibold  tracking-wide  ">
						Grow your users.
						<br /> Smarter.
					</h1>

					<p className="md:text-[20px] md:leading-[30px] md:max-w-[768px] text-[18px] leading-[28px] max-w-[343px] mx-auto text-[#E9D7FE] font-normal m-[24px] ">
						Powerful, self-serve product and growth analytics to help you
						convert, engage, and retain more users. Trusted by over 4,000
						startups.
					</p>
				</div>
				<div className="md:flex justify-between mx-auto max-w-[480px] m-[16px]">
					<div className="">
						<input
							type="text"
							placeholder="Enter your email"
							className="p-2 w-[335px] h-[48px]  border-white rounded-md focus:outline-none"
						/>
						<p className="text-[14px] leading-[20px] my-[6px] text-[#E9D7FE]">
							We care about your data in our{" "}
							<a href="/privacy-policy" className="underline">
								privacy policy
							</a>
							.
						</p>
					</div>
					<PurpleButton />
				</div>

				<Image
					src="/graphic-card.svg"
					width={800}
					height={492}
					alt="graphic"
					className="absolute  left-1/2 transform -translate-x-1/2 bottom-[-520px] z-0"
				/>
			</div>
		</div>
	);
};

export default MainSection;
