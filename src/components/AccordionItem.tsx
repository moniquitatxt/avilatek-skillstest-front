"use client";
import { useState } from "react";
import PlusIcon from "../assets/plus-circle.svg";
import MinusIcon from "../assets/minus-circle.svg";
import Image from "next/image";

interface AccordionItemProps {
	title: string;
	content: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleAccordion = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<div className="border-b my-6">
			<div
				className="flex items-center justify-between cursor-pointer"
				onClick={toggleAccordion}
			>
				<h3 className="text-lg font-medium ">{title}</h3>
				<Image
					width={24}
					height={24}
					src={isOpen ? MinusIcon : PlusIcon}
					alt={isOpen ? "Minus" : "Plus"}
				/>
			</div>
			{isOpen && (
				<p className="text-gray-600 mt-2 text-base " text-gray-600>
					{content}
				</p>
			)}
		</div>
	);
};

export default AccordionItem;
