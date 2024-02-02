// components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
	return (
		<footer className="">
			<div className="flex flex-col md:flex-row justify-between">
				{/* First Column: Product */}
				<div className="mb-4 md:mb-0">
					<p className="text-black text-sm mb-2">Product</p>
					<ul className="text-purple-500 text-xs">
						<li>Overview</li>
						<li>Features</li>
						<li>Solutions</li>
						<li>Tutorials</li>
						<li>Pricing</li>
						<li>Releases</li>
					</ul>
				</div>

				{/* Second Column: Company */}
				<div className="mb-4 md:mb-0">
					<p className="text-black text-sm mb-2">Company</p>
					<ul className="text-purple-500 text-xs">
						<li>About us</li>
						<li>Careers</li>
						<li>Press</li>
						<li>News</li>
						<li>Media kit</li>
						<li>Contact</li>
					</ul>
				</div>

				{/* Right-aligned "Get the app" and images */}
				<div className="text-sm text-purple-500">
					<p className="mb-4 md:mb-0">Get the app</p>
					<div className="flex">
						<img
							src="/ios.svg"
							alt="ios logo"
							className="mr-2"
							width="135"
							height="40"
						/>
						<img
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
