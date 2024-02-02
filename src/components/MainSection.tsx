import Image from "next/image";
import PurpleButton from "./PurpleButton";

const MainSection: React.FC = () => {
	return (
		<div className="h-[1100px] ">
			<div className=" bg-purple-500 text-white  h-[674px] rounded-3xl pt-[96px] pb-[192px] p-x-[96px] text-center ">
				<div>
					<h1 className=" text-[72px]  font-semibold leading-[90px] tracking-wide">
						Grow your users.
						<br /> Smarter.
					</h1>

					<p className=" max-w-[768px] text-[#E9D7FE] mx-auto  leading-[30px] font-normal text-[20px] m-[24px] ">
						Powerful, self-serve product and growth analytics to help you
						convert, engage, and retain more users. Trusted by over 4,000
						startups.
					</p>
				</div>
				<div className="flex justify-between mx-auto max-w-[480px] m-[16px]">
					<div className="">
						<input
							type="text"
							placeholder="Enter your email"
							className="p-2 w-[335px]  h-[48px]  border-white rounded-md focus:outline-none"
						/>
						<p className="text-[14px] leading-[20px] text-[#E9D7FE]">
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
					className="absolute  left-1/2 transform -translate-x-1/2 bottom-[-540px] z-0"
				/>
			</div>
		</div>
	);
};

export default MainSection;
