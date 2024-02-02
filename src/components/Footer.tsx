// components/Footer.tsx
import Image from "next/image";
import React from "react";

const Footer: React.FC = () => {
	return (
		<footer className="sm:max-w-[343px] sm:mx-auto ">
			<div className="flex flex-col md:flex-row justify-between py-20">
				<div className="flex">
					<div className="mb-4 mr-[32px] md:mb-0">
						<p className="text-[14px] leading-[20px] text-black font-semibold mb-2">
							Product
						</p>
						<ul className="text-[16px] leading-[24px] text-purple-400 font-semibold">
							<li className="my-2">Overview</li>
							<li className="my-2">Features</li>
							<li className="my-2">Solutions</li>
							<li className="my-2">Tutorials</li>
							<li className="my-2">Pricing</li>
							<li className="my-2">Releases</li>
						</ul>
					</div>

					<div className="mb-4 md:mb-0">
						<p className="text-[14px] leading-[20px] text-black font-semibold mb-2">
							Company
						</p>
						<ul className="text-[16px] leading-[24px] text-purple-400 font-semibold">
							<li className="my-2">About us</li>
							<li className="my-2">Careers</li>
							<li className="my-2">Press</li>
							<li className="my-2">News</li>
							<li className="my-2">Media kit</li>
							<li className="my-2">Contact</li>
						</ul>
					</div>
				</div>
				<div>
					<p className="text-[14px] leading-[20px] font-semibold mb-4 md:mb-0">
						Get the app
					</p>
					<div>
						<Image
							src="/ios.svg"
							alt="ios logo"
							className="mr-2 my-4"
							width="135"
							height="40"
						/>
						<Image
							src="/android.svg"
							alt="google play logo"
							width="135"
							height="40"
						/>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
