"use client";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

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
		<div className="border-b mb-2">
			<div
				className="flex items-center justify-between cursor-pointer"
				onClick={toggleAccordion}
			>
				<h3 className="text-[18px] font-medium ">{title}</h3>
				{isOpen ? <FaMinus /> : <FaPlus />}
			</div>
			{isOpen && <p className="mt-2">{content}</p>}
		</div>
	);
};

export default AccordionItem;
