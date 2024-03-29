// components/Card.tsx
import Image from "next/image";
import React from "react";

interface CardProps {
	icon: string; // URL for the image icon
	title: string;
	text: string;
	linkText: string;
}

const Card: React.FC<CardProps> = ({ icon, title, text, linkText }) => {
	return (
		<div className="max-w-[343px] sm:mx-auto bg-white p-4 rounded-lgtext-center">
			<Image
				src={icon}
				alt="Card Icon"
				width={56}
				height={56}
				className="mx-auto mb-2"
			/>
			<h2 className="md:text-[20px] md:leading-[30px] text-[18px] leading-[28px] font-semibold mb-2">
				{title}
			</h2>
			<p className="text-gray-600 mb-4">{text}</p>
			<a
				href={title}
				className="flex items-center font-semibold  justify-center text-purple-400"
			>
				{linkText}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					className="h-4 w-4 ml-1"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M17 8l4 4m0 0l-4 4m4-4H3"
					/>
				</svg>
			</a>
		</div>
	);
};

export default Card;
